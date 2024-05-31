
const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");

let isPaused = true;

function togglePlayer() {
  if (isPaused) {
    video.play();
    isPaused = false;
    toggle.textContent = "❚❚";
    toggle.style.fontSize = "16px";
  } else {
    video.pause();
    isPaused = true;
    toggle.textContent = "►";
    toggle.style.fontSize = "25px";
  }
}

toggle.addEventListener("click", togglePlayer);
video.addEventListener("click", togglePlayer);

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
  if (percent === 100) togglePlayer();
}

function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
  video[this.name] = this.value;
}

video.addEventListener("timeupdate", handleProgress);

skipButtons.forEach((button) => button.addEventListener("click", skip));

ranges.forEach((range) => range.addEventListener("input", handleRangeUpdate)); 
