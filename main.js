const state = {
  activeCard: null
}

const cards = document.querySelectorAll(".card");

const handleClick = (idx) => {
  if (state.activeCard === idx) {
    cards[idx].classList.remove("active");
    state.activeCard = null;
    return
  }
  else {
    cards.forEach((card, i) => {
      card.classList.toggle("active", i === idx);
    })
  }
  state.activeCard = idx;
}

cards.forEach((card, idx) => {
  card.addEventListener("click", () => handleClick(idx));
});


gsap.registerPlugin(ScrollTrigger);

const videoContainer = document.querySelector(".video");
const video = videoContainer.querySelector("video");
const overlay = videoContainer.querySelector(".overlay");

// Устанавливаем уровень громкости на 20%, чтобы не пугать пользователя,
// если у него выкручены громко колонки.
video.volume = 0.2;

gsap.from(".video", {
  scale: 0.3,
  scrollTrigger: {
    trigger: ".team",
    start: "bottom bottom",
    end: "top top",
    scrub: true, 
  }
});


overlay.addEventListener("click", (evt) => {
  evt.preventDefault();
  video.play();
  overlay.classList.add("hidden");
});

video.addEventListener("pause", (evt) => {
  // evt.preventDefault();
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


// Заресайзим денежку
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