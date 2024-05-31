const player = document.querySelector('.flex');
const progress = document.querySelector('.progress__filled');
const toggle = document.querySelector('.toggle');
const sliders = document.querySelectorAll('.player__slider');
const skipButtons = document.querySelectorAll('[data-skip]');

function togglePlay() {
  const method = player.paused ? 'play' : 'pause';
  player[method]();
}

function updateButton() {
  const icon = this.paused ? '►' : '❚ ❚';
  toggle.textContent = icon;
}

function skip() {
  player.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
  player[this.name] = this.value;
}

function handleProgress() {
  const percent = (player.currentTime / player.duration) * 100;
  progress.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * player.duration;
  player.currentTime = scrubTime;
}

player.addEventListener('click', togglePlay);
player.addEventListener('play', updateButton);
player.addEventListener('pause', updateButton);
player.addEventListener('timeupdate', handleProgress);
toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip));
sliders.forEach(slider => slider.addEventListener('change', handleRangeUpdate));
sliders.forEach(slider => slider.addEventListener('mousemove', handleRangeUpdate));

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);
