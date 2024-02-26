// document.addEventListener('DOMContentLoaded', function () {
//     var video = document.getElementById('video');
//     var captureButton = document.getElementById('capture');
//     var canvas = document.getElementById('canvas');
//     var context = canvas.getContext('2d');
//     var videostream;

//     // Get access to the camera
//     if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
//         navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
//             videostream=stream;
//             video.srcObject = stream;
//             video.play();
//         });
//     }

//     // Capture the frame and draw it to the canvas
//     captureButton.addEventListener('click', function() {
//         context.drawImage(video, 0, 0, 640, 480);
//         //used to stop camera stream
//         videostream.getTracks().forEach(function(track) {
//             track.stop();
//         });
//     });
// });



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
