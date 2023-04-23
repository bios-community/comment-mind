import pickle as pkl
from pymongo import MongoClient
from keys import api_key, AtlasConnection_string
from youtube_api import YoutubeAPI
import random
import string
import sys

link = sys.argv[1]
# print(link)

# The function returns 4 parameters
comments, video_title, subscriber_count, channel_name=YoutubeAPI(api_key=api_key,video_url=link)

comment_classifier = pkl.load(open("./python_db/Pickle_file/question_classifier.pkl",'rb'))
vectorizer = pkl.load(open("./python_db/Pickle_file/text_vectorizer.pkl",'rb'))

interrogative_comments = []
feedback_comments = []
for comment in comments:
    label = comment_classifier.predict(vectorizer.transform([comment]))
    if label in ["whQuestion","ynQuestion"]:
        interrogative_comments.append(comment)
    else:
        feedback_comments.append(comment)

# Start saving comments to database in Different collections

atlas_client = MongoClient(AtlasConnection_string)

#Create a Database
comments_db = atlas_client.comments_db

#Create Two collections

video_details = comments_db.video_details

video_details.insert_one({
    'Title':video_title,
    'Subscriber': subscriber_count,
    'Channel Name': channel_name,
    'comment': feedback_comments,
    'question': interrogative_comments
})
print("updated database")