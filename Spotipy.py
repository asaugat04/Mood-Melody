import spotipy
import spotipy.oauth2 as oauth2
from spotipy.oauth2 import SpotifyOAuth
from spotipy.oauth2 import SpotifyClientCredentials
import pandas as pd
import time
import json
'''
Store the client id and secret in a config.json file:
{
  "spotify_client_id": "your_client_id",
  "spotify_client_secret": "your_client_secret"
}
'''

with open('config.json') as config_file:
    config = json.load(config_file)
client_id = config['spotify_client_id']
client_secret = config['spotify_client_secret']

auth_manager = SpotifyClientCredentials(client_id, client_secret)
sp = spotipy.Spotify(auth_manager=auth_manager)


def getTrackIDs(user, playlist_id):
    track_ids = []
    playlist = sp.user_playlist(user, playlist_id)
    for item in playlist["tracks"]["items"]:
        track = item["track"]
        track_ids.append(track["id"])
    return track_ids


def getTrackFeatures(id):
    track_info = sp.track(id)

    name = track_info["name"] or "null"
    album = track_info["album"]["name"] or "null"
    artist = track_info["album"]["artists"][0]["name"] or "null"
    # release_date = track_info['album']['release_date']
    # length = track_info['duration_ms']
    # popularity = track_info['popularity']
    image = track_info['album']['images'][0]['url'] or "null"
    preview_url = track_info["preview_url"] or "null"
    
    track_data = [name, album, artist,preview_url,image]  # , release_date, length, popularity
    return track_data


# Code for creating dataframe of feteched playlist

emotion_dict = {
    0: "Angry",
    1: "Disgusted",
    2: "Fearful",
    3: "Happy",
    4: "Neutral",
    5: "Sad",
    6: "Surprised",
}
music_dist = {
    0: "289niu87jQv6wijmNnKE0L",
    1: "3qgzMg4m5tvf16PzlPgGa9",
    2: "3W6P20WXYSNACvkGnGabEE",
    3: "37i9dQZF1DXdPec7aLTmlC",
    4: "4kvSlabrnfRCQWfN0MgtgA?si=b36add73b4a74b3a",
    5: "3Ar6l24242VBGny7S9VxcD",
    6: "51Ca05x9QkTaA63dg4NWyP",
}

"""
Code can def be modularised into a function but i tried to write it when i was extremely sleepy so thought screw it and repeated code block

Uncomment for fetching updated playlists
"""


track_ids = getTrackIDs("spotify", music_dist[0])
track_list = []
for i in range(len(track_ids)):
    time.sleep(0.3)
    track_data = getTrackFeatures(track_ids[i])
    is_null = False
    for el in track_data:
        if el == "null":
            is_null = True
            break
    if not is_null:
        track_list.append(track_data)
    df = pd.DataFrame(
        track_list, columns=["Name", "Album", "Artist", "Link", "Image"]
    )  # ,'Release_date','Length','Popularity'
    df.to_csv("songs/angry.csv")
print("CSV Generated")

track_ids = getTrackIDs("spotify", music_dist[1])
track_list = []
for i in range(len(track_ids)):
    time.sleep(0.3)
    track_data = getTrackFeatures(track_ids[i])
    is_null = False
    for el in track_data:
        if el == "null":
            is_null = True
            break
    if not is_null:
        track_list.append(track_data)
    df = pd.DataFrame(
        track_list, columns=["Name", "Album", "Artist", "Link", "Image"]
    )  # ,'Release_date','Length','Popularity'
    df.to_csv("songs/disgusted.csv")
print("CSV Generated")

track_ids = getTrackIDs("spotify", music_dist[2])
track_list = []
for i in range(len(track_ids)):
    time.sleep(0.3)
    track_data = getTrackFeatures(track_ids[i])
    is_null = False
    for el in track_data:
        if el == "null":
            is_null = True
            break
    if not is_null:
        track_list.append(track_data)
    df = pd.DataFrame(
        track_list, columns=["Name", "Album", "Artist", "Link", "Image"]
    )  # ,'Release_date','Length','Popularity'
    df.to_csv("songs/fearful.csv")
print("CSV Generated")

track_ids = getTrackIDs("spotify", music_dist[3])
track_list = []
for i in range(len(track_ids)):
    time.sleep(0.3)
    track_data = getTrackFeatures(track_ids[i])
    track_list.append(track_data)
    df = pd.DataFrame(
        track_list, columns=["Name", "Album", "Artist", "Link", "Image"]
    )  # ,'Release_date','Length','Popularity'
    df.to_csv("songs/happy.csv")
print("CSV Generated")

track_ids = getTrackIDs("spotify", music_dist[4])
track_list = []
for i in range(len(track_ids)):
    time.sleep(0.3)
    track_data = getTrackFeatures(track_ids[i])
    is_null = False
    for el in track_data:
        if el == "null":
            is_null = True
            break
    if not is_null:
        track_list.append(track_data)
    df = pd.DataFrame(
        track_list, columns=["Name", "Album", "Artist", "Link", "Image"]
    )  # ,'Release_date','Length','Popularity'
    df.to_csv("songs/neutral.csv")
print("CSV Generated")

track_ids = getTrackIDs("spotify", music_dist[5])
track_list = []
for i in range(len(track_ids)):
    time.sleep(0.3)
    track_data = getTrackFeatures(track_ids[i])
    is_null = False
    for el in track_data:
        if el == "null":
            is_null = True
            break
    if not is_null:
        track_list.append(track_data)
    df = pd.DataFrame(
        track_list, columns=["Name", "Album", "Artist", "Link", "Image"]
    )  # ,'Release_date','Length','Popularity'
    df.to_csv("songs/sad.csv")
print("CSV Generated")

track_ids = getTrackIDs("spotify", music_dist[6])
track_list = []
for i in range(len(track_ids)):
    time.sleep(0.3)
    track_data = getTrackFeatures(track_ids[i])
    is_null = False
    for el in track_data:
        if el == "null":
            is_null = True
            break
    if not is_null:
        track_list.append(track_data)
    df = pd.DataFrame(
        track_list, columns=["Name", "Album", "Artist", "Link", "Image"]
    )  # ,'Release_date','Length','Popularity'
    df.to_csv("songs/surprised.csv")
print("CSV Generated")
