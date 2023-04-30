# Comment Mind

Analyze YouTube Comments and Discover Insights

![image](https://cdn.discordapp.com/attachments/1041723116512100452/1102132895264542781/Blog_Poster.png)

## Table of Contents

-   [About](#about)
-   [Tech Stack](#tech-stack)
-   [How to run the project](#how-to-run-the-project)
-   [Maintainers](#maintainers)

## About

This is a submission for the MindsDB x Hashnode Hackathon. You can read a everything about the application on the [submission blog](https://blog.adarshdubey.com/comment-mind-analyze-youtube-comments-and-discover-insights).

In today's digital world, social media platforms like YouTube have become a hotspot for user-generated content. It is essential to monitor and understand the sentiments of users towards the content posted on these platforms. Our tool addresses this need by using cutting-edge technologies to perform sentiment analysis on YouTube comments.

Taking advantage of Mindsdb integration with a pre-trained Hugging-Face classifier pipeline, and also using a GradientBoostingClassifier to classify comments into feedback and questions we can plot some wonderful and interactive graphs for the content creator to understand his audience. The hugging face integration further classifies feedback into Positive and Negative ones to understand the sentiment of feedback and store them in the MongoDB database.

## Tech Stack

-   [MindsDB](https://mindsdb.com/)
-   [Hugging Face](https://huggingface.co/)
-   [MongoDB](https://www.mongodb.com/)
-   [React](https://reactjs.org/)
-   [Express](https://expressjs.com/)

## How to run the project

To run the project locally, you will need to take a couple of steps, they are as follows:

1. Fork the repository and clone it to your local machine.

    ```sh
    git clone https://github.com/<your-username>/comment-mind.git
    ```

2. Change the directory to the project directory.

    ```sh
    cd comment-mind
    ```

3. You will need a MindsDB accound or local installation of the same and a `seniment_classifier` model. You can do that by following the official documentation [here](https://docs.mindsdb.com/nlp/nlp-mindsdb-hf#example-using-mql)

4. Install client side dependencies.

    1. Change directory to client folder.

        ```sh
        cd client
        ```

    1. Install the dependencies.

        ```sh
        npm install
        ```

5. Install server side dependencies.

    1. Change the directory back to root folder (use this command only if you're in client folder).

        ```sh
        cd ..
        ```

    2. Change directory to server folder.

        ```sh
        cd server
        ```

    3. Install the dependencies.

        ```sh
        npm install
        ```

    4. Environment Variables.

        Now, to run the server, you will also need a `.env` file in the `server` folder. A sample file as `.env.example` is provided, you just have to change the values according to your needs and rename it to `.env`.

        Other than that, you will also need a `keys.py` file in the `server/python_db` folder. We have provided a sample file as `keys.py.example`, you just have to change the values according to your needs and rename it to `keys.py`. You can get the MindsDB cloud connection string from [here](https://cloud.mindsdb.com/).

    5. Running the server also requires few python dependencies. Before running the server, make sure you have python installed on your system. You can install the dependencies using the following command.

        ```sh
        pip install -r requirements.txt
        ```

6. Now that you have installed all the dependencies, you can run the project locally.

    1. Start the server. (Run in the `server` folder)

        ```sh
        npm start
        ```

    2. Start the client. (Run in the `client` folder)

        ```sh
        npm run dev
        ```

7. Now you can go to `http://localhost:5173` to view and run the project.

## Maintainers

Below are the people who have created this project and maintain it. You can contact them in case of any queries.

-   [Pranav Prajapati](https://github.com/pranavvp16)
-   [Adarsh Dubey](https://github.com/inclinedadarsh)
