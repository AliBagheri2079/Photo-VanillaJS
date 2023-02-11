/* eslint-disable no-plusplus */
//* followind is from codepen profile: https://codepen.io/tmrDevelops/pen/vOPZBv
const handleCanvasProps = (x, y, r, g, b) => {
  const gradiantCanvas = document.getElementById("gradiant-canv");
  const $ = gradiantCanvas.getContext("2d");

  /*
    * Create color with 'rgb' color function
    ? rgb(255 122 127 / 50%)
    * and We can using other color function like: 'hsl', 'hwb', ...
    * Create random rectangol params
  */
  const ALPHA = "1%";
  $.fillStyle = `rgb(${r} ${g} ${b} / ${ALPHA})`;
  $.fillRect(x, y, 1, 1);
};

const DEFAULT_BIG_VALUE = 192;
const DEFAULT_SHORT_VALUE = 64;

const R = (x, y, t) => {
  return Math.floor(
    DEFAULT_BIG_VALUE +
      DEFAULT_SHORT_VALUE * Math.cos((x ** 2 - y ** 2) / 300 + t)
  );
};

const G = (x, y, t) => {
  return Math.floor(
    DEFAULT_BIG_VALUE +
      DEFAULT_SHORT_VALUE *
        Math.sin((x ** 2 * Math.cos(t / 4) + y ** 2 * Math.sin(t / 3)) / 300)
  );
};

const B = (x, y, t) => {
  return Math.floor(
    DEFAULT_BIG_VALUE +
      DEFAULT_SHORT_VALUE *
        Math.sin(5 * Math.sin(t / 9) + ((x - 100) ** 2 + (y - 100) ** 2) / 1100)
  );
};

let t = 0;
const createAnimatedGradiant = () => {
  const DEFAULT_PARAMETER = 35;

  for (let x = 0; x <= DEFAULT_PARAMETER; x++) {
    for (let y = 0; y <= DEFAULT_PARAMETER; y++) {
      // ? console.table(R(x, y, t), G(x, y, t), B(x, y, t));
      handleCanvasProps(x, y, R(x, y, t), G(x, y, t), B(x, y, t));
    }
  }

  t += 0.01;
  window.requestAnimationFrame(createAnimatedGradiant);
};

createAnimatedGradiant();

//* created multiple tiile overlay
const mainTitle = document.querySelector(".titles__items");
const mainTitleOverlay = document.querySelector(".titles__items[data-overlay]");

mainTitleOverlay.innerText = mainTitle.textContent;
