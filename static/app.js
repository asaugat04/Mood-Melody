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
  // remove the data below and use data from the server ie. uncomment avobe line and remove the below line
  /* let data = {
    detected_emotion: "Happy",
    music_data: [
      {
        Album: "Lover",
        Artist: "Taylor Swift",
        Image:
          "https://i.scdn.co/image/ab67616d0000b273e787cffec20aa2a396a61647",
        Link: "No Preview Available",
        Name: "Cruel Summer",
      },
      {
        Album: "Unwritten",
        Artist: "Natasha Bedingfield",
        Image:
          "https://i.scdn.co/image/ab67616d0000b273b337e1ca6629a53c66a3b0d4",
        Link: "https://p.scdn.co/mp3-preview/5559460cc3e2c5aa1eeea1c16cf838cecde326d8?cid=8a2de09d7dbc482ab0fa4875232acd8b",
        Name: "Unwritten",
      },
      {
        Album: "Read My Lips",
        Artist: "Sophie Ellis-Bextor",
        Image:
          "https://i.scdn.co/image/ab67616d0000b273b736151ed1c04f2d41d5f69e",
        Link: "No Preview Available",
        Name: "Murder On The Dancefloor",
      },
      {
        Album: "After Hours",
        Artist: "The Weeknd",
        Image:
          "https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36",
        Link: "No Preview Available",
        Name: "Blinding Lights",
      },
      {
        Album: "Dance The Night (From Barbie The Album)",
        Artist: "Dua Lipa",
        Image:
          "https://i.scdn.co/image/ab67616d0000b2737dd3ba455ee3390cb55b0192",
        Link: "https://p.scdn.co/mp3-preview/acaea048f50a3b30ca24b348c84a6047373baabb?cid=8a2de09d7dbc482ab0fa4875232acd8b",
        Name: "Dance The Night - From Barbie The Album",
      },
      {
        Album: "I'm Good (Blue)",
        Artist: "David Guetta",
        Image:
          "https://i.scdn.co/image/ab67616d0000b273933c036cd61cd40d3f17a9c4",
        Link: "https://p.scdn.co/mp3-preview/c1de960c1a98f7ab652331e5223c50baba75c460?cid=8a2de09d7dbc482ab0fa4875232acd8b",
        Name: "I'm Good (Blue)",
      },
      {
        Album: "THINK LATER",
        Artist: "Tate McRae",
        Image:
          "https://i.scdn.co/image/ab67616d0000b27377eb7a5b9367de79c3b92a49",
        Link: "https://p.scdn.co/mp3-preview/e2bab2006bfccb91a35ec33d54411e56dd7c9d21?cid=8a2de09d7dbc482ab0fa4875232acd8b",
        Name: "exes",
      },
      {
        Album:
          'I Ain\u2019t Worried (Music From The Motion Picture "Top Gun: Maverick")',
        Artist: "OneRepublic",
        Image:
          "https://i.scdn.co/image/ab67616d0000b273ec96e006b8bdfc582610ec13",
        Link: "No Preview Available",
        Name: "I Ain't Worried",
      },
      {
        Album: "Whatever",
        Artist: "Kygo",
        Image:
          "https://i.scdn.co/image/ab67616d0000b2734d914470ab899815f103f5cc",
        Link: "https://p.scdn.co/mp3-preview/03bbf447d8f0101cff90c78b3ab0c4757c3bf27b?cid=8a2de09d7dbc482ab0fa4875232acd8b",
        Name: "Whatever",
      },
      {
        Album: "Fine Line",
        Artist: "Harry Styles",
        Image:
          "https://i.scdn.co/image/ab67616d0000b27377fdcfda6535601aff081b6a",
        Link: "https://p.scdn.co/mp3-preview/824cd58da2e9a15eeaaa6746becc09093547a09b?cid=8a2de09d7dbc482ab0fa4875232acd8b",
        Name: "Watermelon Sugar",
      },
      {
        Album: "(It Goes Like) Nanana [Edit]",
        Artist: "Peggy Gou",
        Image:
          "https://i.scdn.co/image/ab67616d0000b27388d71aadd009fe1a83df88f2",
        Link: "https://p.scdn.co/mp3-preview/e36e0bd4714844f1f9d992398b41a3e333f15cc9?cid=8a2de09d7dbc482ab0fa4875232acd8b",
        Name: "(It Goes Like) Nanana - Edit",
      },
      {
        Album: "=",
        Artist: "Ed Sheeran",
        Image:
          "https://i.scdn.co/image/ab67616d0000b273ef24c3fdbf856340d55cfeb2",
        Link: "https://p.scdn.co/mp3-preview/08cec59d36ac30ae9ce1e2944f206251859844af?cid=8a2de09d7dbc482ab0fa4875232acd8b",
        Name: "Shivers",
      },
      {
        Album: "Chemical",
        Artist: "Post Malone",
        Image:
          "https://i.scdn.co/image/ab67616d0000b273f76f8deeba5370c98ad38f1c",
        Link: "No Preview Available",
        Name: "Chemical",
      },
      {
        Album: "Uptown Special",
        Artist: "Mark Ronson",
        Image:
          "https://i.scdn.co/image/ab67616d0000b273e419ccba0baa8bd3f3d7abf2",
        Link: "https://p.scdn.co/mp3-preview/3074e956e6794c0eadea660b9cef671db6b27234?cid=8a2de09d7dbc482ab0fa4875232acd8b",
        Name: "Uptown Funk (feat. Bruno Mars)",
      },
      {
        Album: "Baby Don't Hurt Me",
        Artist: "David Guetta",
        Image:
          "https://i.scdn.co/image/ab67616d0000b2730b4ef75c3728599aa4104f7a",
        Link: "https://p.scdn.co/mp3-preview/a8f2e176e17e0f6298b42ef8e96118318fdd2b89?cid=8a2de09d7dbc482ab0fa4875232acd8b",
        Name: "Baby Don't Hurt Me",
      },
    ],
  };
  console.log(data);*/
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
    datarow.appendChild(namecell);
    datarow.appendChild(artistcell);
    datarow.appendChild(albumcell);

    // datarow.innerHTML = `
    //         <td><button class='control-btn'></button></td>
    //         <td>${music.Name}</td>
    //         <td>${music.Artist}</td>
    //         <td>${music.Album}</td>
    //         `;
    table.appendChild(datarow);
  });
};
