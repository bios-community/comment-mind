from googleapiclient.discovery import build

def YoutubeAPI(api_key,video_url):
    
    #Trim video_id from video_url
    if "youtube.com" in video_url: # If user provides browser link
        video_id = video_url[32:]

    if "youtu.be" in video_url: # If user provides share link
        video_id = video_url[17:]


    youtube = build('youtube', 'v3', developerKey=api_key)
    comments = []
    next_page_token = None

    video_response = youtube.videos().list(
            part='snippet',
            id=video_id
        ).execute()
    # Extract video title
    video_title = video_response['items'][0]['snippet']['title']
    print(f'Video Title: {video_title}')


    channel_id = video_response['items'][0]['snippet']['channelId']
    channel_response = youtube.channels().list(
            part='snippet,statistics',
            id=channel_id
        ).execute()

    # Extract channel name, subscriber count, and likes count
    channel_name = channel_response['items'][0]['snippet']['title']
    subscriber_count = channel_response['items'][0]['statistics']['subscriberCount']
    print(channel_name)
    print(subscriber_count)
    while True:
        # Retrieve comments for the video
        response = youtube.commentThreads().list(
            part='snippet',
            videoId=video_id,
            maxResults=100,
            pageToken=next_page_token
        ).execute()

        for item in response['items']:
            comment = item['snippet']['topLevelComment']['snippet']['textOriginal']
            comments.append(comment)

        next_page_token = response.get('nextPageToken')
        if not next_page_token:
            break

    return comments,video_title,subscriber_count,channel_name
     





