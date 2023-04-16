import pickle as pkl
from pymongo import MongoClient
from keys import api_key, AtlasConnection_string
from youtube_api import YoutubeAPI

# The function returns 4 parameters
comments, video_title, subscriber_count, channel_name=YoutubeAPI(api_key=api_key,video_url="https://youtu.be/1qw5ITr3k9E")

comment_classifier = pkl.load(open("Pickle_file/question_classifier.pkl",'rb'))
vectorizer = pkl.load(open("Pickle_file/text_vectorizer.pkl",'rb'))

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

#Create a Database
comments_db = atlas_client.comments_db
#Create Two collections
questions = comments_db.questions
feedbacks = comments_db.feedbacks
video_details = comments_db.video_details

questions.insert_many([{'question':question} for question in interrogative_comments])
print("Question inserted in Database")

feedbacks.insert_many([{'feedback':feedback} for feedback in feedback_comments])
print("Feedbacks also inserted")

video_details.insert_one({
    'Title':video_title,
    'Subscriber': subscriber_count,
    'Channel Name': channel_name
})

print("inserted video details too")