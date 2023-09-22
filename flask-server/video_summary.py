

from youtube_transcript_api import YouTubeTranscriptApi as yt
import urllib.parse as up


def caption(url):
    url_data = up.urlparse(url)
    query = up.parse_qs(url_data.query)
    mystring=""

    if "v" not in query.keys():
        print("URL is not correct.")
        return

    video = query["v"][0]
    srt = yt.get_transcript(video)

    lst = []
    for item in srt:
        lst.append(item["text"])

    if not lst:
        mystring="This video does not contain any caption. It might be possible due to following reson 1. The captions aren't available yet due to processing complex audio in the video.\n 2. Automatic captions don't support the language in the video.\n 3. The video is too long.\n"
        return mystring
    else:
        mystring="".join(map(str,lst))
        return mystring
