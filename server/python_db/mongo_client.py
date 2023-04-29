import pickle as pkl
from pymongo import MongoClient
from keys import api_key, AtlasConnection_string,CloudConnection_string
from youtube_api import YoutubeAPI
import sys
import concurrent.futures

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
#Create a Collection
video_details = comments_db.video_details
#Check if video already exists in database
video = video_details.find_one({"Title":video_title})
if video:
    print(video_title)
    sys.exit()

mindsdb_cloud = MongoClient(CloudConnection_string)
mindsdb = mindsdb_cloud.mindsdb
sentiment_classifier = mindsdb.sentiment_classifier2
pred_list = [sentiment_classifier.find({'comment':i}) for i in feedback_comments]
pred_list1 = pred_list[:int(len(pred_list)/2)]
pred_list2 = pred_list[int(len(pred_list)/2):]

sentiment_list = []
def process_cursor(cursor):
    for doc in cursor:
        sentiment_list.append(doc)

# Process cursors in parallel
with concurrent.futures.ThreadPoolExecutor(max_workers=4) as executor1, \
    concurrent.futures.ThreadPoolExecutor(max_workers=4) as executor2:
    futures1 = [executor1.submit(process_cursor, cursor) for cursor in pred_list1]
    futures2 = [executor2.submit(process_cursor,cursor)for cursor in pred_list2]

    concurrent.futures.wait(futures1 + futures2)

video_details.insert_one({
    'Title':video_title,
    'Subscriber': subscriber_count,
    'Channel Name': channel_name,
    'comment': sentiment_list,
    'question': interrogative_comments
})
print(video_title)