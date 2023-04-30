
# Comment Mind - Analyze YouTube Comments and Discover Insights

![image](https://cdn.discordapp.com/attachments/1041723116512100452/1102132895264542781/Blog_Poster.png)

In today's digital world, social media platforms like YouTube have become a hotspot for user-generated content. It is essential to monitor and understand the sentiments of users towards the content posted on these platforms. Our tool addresses this need by using cutting-edge technologies to perform sentiment analysis on YouTube comments.

Taking advantage of Mindsdb integration with a pre-trained Hugging-Face classifier pipeline, and also using a GradientBoostingClassifier to classify comments into feedback and questions we can plot some wonderful and interactive graphs for the content creator to understand his audience. The hugging face integration further classifies feedback into Positive and Negative ones to understand the sentiment of feedback and store them in the MongoDB database.







## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`API_KEY` : Youtube API key

`Mongodb Database` : Connection string to Mongodb

`MindsDB Cloud` : Connection string to MindsDB cloud 


## Installation

Install my-project with npm

```bash
  npm install my-project
  cd my-project
```
 To install python dependancies 

```
    pip install -r requirements.txt
```


    
## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## Authors

- [@pranavvp16](https://github.com/pranavvp16)
- [@inclinedadarsh](https://github.com/inclinedadarsh)


