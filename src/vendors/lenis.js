import Lenis from "@studio-freight/lenis";

const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)), // https://www.desmos.com/calculator/brs54l4xou
  direction: "vertical", // vertical, horizontal
  gestureDirection: "vertical", // vertical, horizontal, both
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
  infinite: false,
});

/*
* get scroll value
lenis.on("scroll", ({ scroll, limit, velocity, direction, progress }) => {
   console.log({ scroll, limit, velocity, direction, progress })
});
*/

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

/*
* Using custom scroll container
const lenis = new Lenis({
  wrapper: NodeElement, // element which has overflow
  content: NodeElement, // usually wrapper's direct child
})
*/
