import pickle as pkl
from pymongo import MongoClient
from keys import api_key, AtlasConnection_string
from youtube_api import YoutubeAPI
import random
import string

# The function returns 4 parameters
comments, video_title, subscriber_count, channel_name=YoutubeAPI(api_key=api_key,video_url="https://youtu.be/2LhoCfjm8R4")

comment_classifier = pkl.load(open("./python_db/Pickle_file/question_classifier.pkl",'rb'))
vectorizer = pkl.load(open("./python_db/Pickle_file/text_vectorizer.pkl",'rb'))

interrogative_comments = []
feedback_comments = []
for comment in comments:
    label = comment_classifier.predict(vectorizer.transform([comment]))
    if label in ["whQuestion","yAnswer","nAnswer","ynQuestion"]:
        interrogative_comments.append(comment)
    else:
        feedback_comments.append(comment)

# Start saving comments to database in Different collections

atlas_client = MongoClient(AtlasConnection_string)

#Create session_id with random string
length = 7
session_id = ''.join(random.choices(string.ascii_letters + string.digits, k=length))

#Create a Database
comments_db = atlas_client.comments_db
collection_question_name = "q_"+session_id
collection_feedback_name = "f_"+session_id
collection_video_name = "d_"+session_id
#Create Two collections
questions = comments_db[collection_question_name]
feedbacks = comments_db[collection_feedback_name]
video_details = comments_db[collection_video_name]

questions.insert_many([{'comment':question} for question in interrogative_comments])
feedbacks.insert_many([{'comment':feedback} for feedback in feedback_comments])


video_details.insert_one({
    'Title':video_title,
    'Subscriber': subscriber_count,
    'Channel Name': channel_name
})
print(session_id)