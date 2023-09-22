from typing import Text
from flask import Flask, request
from nltk import text
import text_summary
import video_summary

app = Flask(__name__)


@app.route("/entry", methods=['GET'])
def data_get():
    return "i am in get method"


@app.route('/post_text_to_text_summary', methods=['GET', 'POST'])
def text_to_text_summary():
    dict = request.data.decode("UTF-8")
    text = (eval(dict))["text"]
    summary_text = text_summary.summary(text)
    return str(summary_text)


@app.route('/post_video_to_text_summary', methods=['GET', 'POST'])
def video_to_text_summary():
    dict = request.data.decode("UTF-8")
    url = (eval(dict))["url"]
    caption = video_summary.caption(url)
    # print("CAPTION : "+caption)
    summary_text = text_summary.summary(caption)
    # print("SUMMARY : "+summary_text)
    return str(summary_text)

@app.route('/post_ocr_to_text_summary', methods=['GET', 'POST'])
def ocr_to_text_summary():
    dict = request.data.decode("UTF-8")
    text = (eval(dict))["text"]
    summary_text = text_summary.summary(text)
    # print("SUMMARY : "+summary_text)
    return str(summary_text)    


if __name__ == "__main__":
    app.run(debug=True)
