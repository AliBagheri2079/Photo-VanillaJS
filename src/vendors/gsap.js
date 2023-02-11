import { gsap } from "gsap";

//* Before Load Contents
const tll = gsap.timeline({
  paused: "true",
});

tll
  .addLabel("counter")
  .to(".preloader__percent, .preloader__bar", {
    duration: 0.2,
    opacity: 0,
    zIndex: -1,
  })
  .addLabel("preloader")
  .to("#preloader", {
    duration: 0.8,
    width: "0%",
  });

const percent = document.querySelector(".preloader__percent");
const bar = document.querySelector(".preloader__bar__barconfrm");
let width = 1;
let id;

const frame = () => {
  if (width >= 100) {
    clearInterval(id);
    tll.play();
  } else {
    width += 1;
    const updatedWidth = `${width}%`;
    bar.style.width = updatedWidth;
    percent.textContent = updatedWidth;
  }
};

const moveBarconfrm = () => {
  id = setInterval(frame, 10);
};
window.addEventListener("load", moveBarconfrm);
