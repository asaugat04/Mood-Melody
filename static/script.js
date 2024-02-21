const startAnimation = (entries, observer) => {
  entries.forEach((entry) => {
    entry.isIntersecting ? entry.target.classList.add("slide") : "";
  });
};

const observer = new IntersectionObserver(startAnimation);
const options = { root: document.body, rootMargin: "0px", threshold: 1 };

const elements = document.querySelectorAll(".sliding_items");
elements.forEach((el) => {
  observer.observe(el, options);
});

const loader = document.querySelector("#loader-container");
const showLoader = () => {
  loader.style.display = "flex";
};
const hideLoader = () => {
  loader.style.display = "none";
};
// tab swithing
const homeBtn = document.getElementById("home");
const aboutBtn = document.getElementById("about");
const startBtn = document.getElementById("start");
const tabChangingBtns = [homeBtn, aboutBtn];

const hometab = document.getElementById("home-tab");
const abouttab = document.getElementById("about-tab");
const applicationtab = document.getElementById("application-tab");
const tabs = [hometab, abouttab, applicationtab];

homeBtn.addEventListener("click", () => {
  showLoader();
  tabs.forEach((tab) => tab.classList.remove("active-tab"));
  hometab.classList.add("active-tab");

  tabChangingBtns.forEach((btn) => btn.classList.remove("active"));
  homeBtn.classList.add("active");
  setTimeout(hideLoader, 200);
});

aboutBtn.addEventListener("click", () => {
  showLoader();
  tabs.forEach((tab) => tab.classList.remove("active-tab"));
  abouttab.classList.add("active-tab");
  tabChangingBtns.forEach((btn) => btn.classList.remove("active"));
  aboutBtn.classList.add("active");
  setTimeout(hideLoader, 200);
});

startBtn.addEventListener("click", () => {
  showLoader();
  tabs.forEach((tab) => tab.classList.remove("active-tab"));
  applicationtab.classList.add("active-tab");
  tabChangingBtns.forEach((btn) => btn.classList.remove("active"));
  setTimeout(hideLoader, 200);
});
// ambient mode in video
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
