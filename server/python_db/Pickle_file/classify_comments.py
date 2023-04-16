import nltk
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.ensemble import GradientBoostingClassifier
import pickle as pkl

nltk.download('nps_chat')
posts = nltk.corpus.nps_chat.xml_posts()


posts_text = [post.text for post in posts]

#divide train and test in 80 20
train_text = posts_text[:int(len(posts_text)*0.8)]
test_text = posts_text[int(len(posts_text)*0.2):]

#Get TFIDF features
vectorizer = TfidfVectorizer(ngram_range=(1,3), 
                             min_df=0.001, 
                             max_df=0.7, 
                             analyzer='word')

X_train = vectorizer.fit_transform(train_text)
X_test = vectorizer.transform(test_text)

y = [post.get('class') for post in posts]

y_train = y[:int(len(posts_text)*0.8)]
y_test = y[int(len(posts_text)*0.2):]

# Fitting Gradient Boosting classifier to the Training set
gb = GradientBoostingClassifier(n_estimators = 400, random_state=0)
# Can be improved with Cross Validation

gb.fit(X_train, y_train)

#Save trained Gradient Boosting model to aviod training and runtime
filename = "question_classifier"

pkl.dump(gb, open(filename,"wb"))





