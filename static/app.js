//FOR AMBIENT LIGHT
var video = document.getElementById("video");
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

canvas.style.width = video.clientWidth + "px";
canvas.style.height = video.clientHeight + "px";

id = setInterval(getCurrentImage, 100);
function getCurrentImage() {
  if (video.src != null) {
    canvas.style.width = video.clientWidth + "px";
    canvas.style.height = video.clientHeight + "px";
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
  } else {
    clearInterval(id);
  }
}

//FOR AMBIENT LIGHT END

let generatePlaylistBtn = document.getElementById("generateButton");
loader = document.getElementById("loader");
generatePlaylistBtn.addEventListener("click", handleGeneratePlaylistClick);

async function handleGeneratePlaylistClick() {
  console.log("button clicked");
  loader.style.display = "block";
  generatePlaylistBtn.style.display = "none";
  let data = await fetchPlaylist();
  displayPlaylist(data);
}
function changeEmojiTo(emotion) {
  emojiset = {
    angry: "😡",
    happy: "😊",
    sad: "😢",
    fearful: "😨",
    disgusted: "🤢",
    surprised: "😲",
    neutral: "😐",
  };
  let emoji = emojiset[emotion.toLowerCase()];
  let encoded_emoji = encodeURI(emoji);
  let emoji_bg = document.querySelector(".emoji-background");
  emoji_bg.style.backgroundImage = `url(
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='50' viewBox='0 0 64 64'%3E%3Ctext y='50%25' x='40%25' dy='0.35em' text-anchor='middle' style='font-size:41px;'%3E${encoded_emoji}%3C/text%3E%3C/svg%3E"
  )`;
}
function fetchPlaylist() {
  return fetch("/get_recommendations")
    .then((response) => response.json())
    .then((res) => res);
}
//fetch songs and display them
let videoPage = document.querySelector(".camera-container");
let playlistpage = document.querySelector(".playlist-container");
let emotionDisplay = document.getElementById("detected-emotion");
let playing_audios = [];

displayPlaylist = (data) => {
  video.src = null;
  emotionDisplay.textContent =
    data.detected_emotion == "neutral"
      ? "No Face detected"
      : data.detected_emotion;
  changeEmojiTo(data.detected_emotion);
  console.log("data:", data);
  videoPage.style.display = "none";
  playlistpage.style.display = "block";
  let table = document.getElementById("playlist-table");
  data.music_data.forEach((music) => {
    let datarow = document.createElement("tr");
    datarow.className = "playlist-row mt-1 mb-1";

    let namecell = document.createElement("td");
    namecell.textContent = music.Name;

    let artistcell = document.createElement("td");
    artistcell.textContent = music.Artist;

    let albumcell = document.createElement("td");
    albumcell.textContent = music.Album;

    let covercell = document.createElement("td");
    let cover = document.createElement("img");
    cover.src = music.Image;
    covercell.appendChild(cover);
    cover.style.width = "50px";
    cover.style.height = "50px";
    cover.style.borderRadius = "50%";

    playBtn = document.createElement("button");
    playBtn.className = "control-btn";
    playBtn.addEventListener("click", (e) => {
      let audio = new Audio(music.Link);
      if (e.target.classList.contains("paused")) {
        playing_audios.forEach((audio) => {
          audio.pause();
        });
        e.target.classList.remove("paused");
      } else {
        playing_audios.forEach((audio) => {
          audio.pause();
        });
        document.querySelectorAll(".paused").forEach((btn) => {
          btn.classList.remove("paused");
        });
        playing_audios.push(audio);
        audio.play();
        e.target.classList.add("paused");
      }
    });
    controlPlaycell = document.createElement("td");
    controlPlaycell.appendChild(playBtn);

    datarow.appendChild(controlPlaycell);
    datarow.appendChild(covercell);
    datarow.appendChild(namecell);
    datarow.appendChild(artistcell);
    datarow.appendChild(albumcell);

    table.appendChild(datarow);
  });
};
