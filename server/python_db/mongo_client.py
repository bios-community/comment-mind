import pickle as pkl
from pymongo import MongoClient
from keys import api_key
from youtube_api import YoutubeAPI

# The function returns 4 parameters
comments, video_title, subscriber_count, channel_name=YoutubeAPI(api_key=api_key,video_url="https://youtu.be/UpsZDGutpZc")

comment_classifier = pkl.load(open("Pickle_file/question_classifier.pkl",'rb'))
vectorizer = pkl.load(open("Pickle_file/text_vectorizer.pkl",'rb'))

interrogative_comments = []
feedbacks = []
for comment in comments:
    label = comment_classifier.predict(vectorizer.transform([comment]))
    if label in ["whQuestion","yAnswer","nAnswer","ynQuestion"]:
        interrogative_comments.append(comment)
    else:
        feedbacks.append(comment)

