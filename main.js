
const videoContainer = document.querySelector(".video");
const video = videoContainer.querySelector("video");
const overlay = videoContainer.querySelector(".overlay");


overlay.addEventListener("click", (evt) => {
  evt.preventDefault();
  video.play();
  overlay.classList.add("hidden");
});

video.addEventListener("pause", (evt) => {
  video.pause();
  overlay.classList.remove("hidden");
});

// Этот обработчик нужен, чтобы при нажатии на таймлайн
// не врубался оверлей
video.addEventListener("seeking", (evt) => {
  if (video.paused) {
    overlay.classList.add("hidden");
  }
});


// Заресайзим
const money = document.querySelector(".money");
const cover = document.querySelector(".hero-image");

const resizeMoney = () => {
  const coverWidth = cover.clientWidth;
  const coverMargin = parseInt(window.getComputedStyle(cover).marginTop);

  money.style.width = `${coverWidth / 2.5}px`;
  money.style.marginTop = `${coverMargin + coverWidth / 6}px`;
}


window.addEventListener("load", () => {
  resizeMoney();
});

window.addEventListener("resize", () => {
  resizeMoney();
})