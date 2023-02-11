import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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

//* After Load Contents
const tl = gsap.timeline({
  defaults: { ease: "circ.out", duration: 2, stagger: 0.5 },
});

ScrollTrigger.defaults({
  // toggleActions: "play pause resume reset" => onEnter, onLeave, onEnterBack, and onLeaveBack
  toggleActions: "restart reset reset restart",
  // markers: true,
});

ScrollTrigger.create({
  animation: tl,
  trigger: "#app",
  start: "21% center",
  // endTrigger: ".content",
  end: `+=${document.querySelector("#app").offsetHeight - 500}`,
  // onEnter: () => console.log(document.querySelector("#app").offsetHeight),
  scrub: 2,
});

tl.addLabel("start")
  .fromTo(
    ".header",
    {
      backgroundPosition:
        "right 0 bottom -50px, center bottom -50px, center top",
    },
    {
      backgroundPosition:
        "right 100px bottom 150px, center bottom 200px, center top -50px",
    }
  )
  .addLabel("galleryTitles")
  .fromTo(".titles", { x: "50%" }, { x: "-100%", duration: 3 }, ">-1")
  .addLabel("galleryImages")
  .fromTo(
    ".images .card",
    {
      y: -400,
    },
    {
      y: -830,
    },
    "galleryTitles-=0.1"
  )
  .addLabel("location")
  .from(".location__map", { scale: 0, duration: 4 }, "galleryImages+=2")
  .addLabel("end");
