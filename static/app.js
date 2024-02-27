//FOR AMBIENT LIGHT
var video = document.getElementById("video");
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

canvas.style.width = video.clientWidth + "px";
canvas.style.height = video.clientHeight + "px";

function getCurrentImage() {
  canvas.style.width = video.clientWidth + "px";
  canvas.style.height = video.clientHeight + "px";
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
}

setInterval(getCurrentImage, 100);
//FOR AMBIENT LIGHT END
let generatePlaylistBtn = document.getElementById("generateButton");
loader = document.getElementById("loader");
generatePlaylistBtn.addEventListener("click", handleGeneratePlaylistClick);

async function handleGeneratePlaylistClick() {
  console.log("button clicked");
  loader.style.display = "block";
  generatePlaylistBtn.style.display = "none";
  let data = await fetchPlaylist();
  console.log(data);
}
function fetchPlaylist() {
  return fetch("/get_recommendations")
    .then((response) => response.json())
    .then((res) => res);
}
//fetch songs and display them
