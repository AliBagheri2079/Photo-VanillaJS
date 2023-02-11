import { changeNavbarState } from "../../utils/changeNavbarState";

const navToggler = document.getElementById("navTogglerIcon");

document.addEventListener("DOMContentLoaded", () => {
  navToggler.addEventListener("click", changeNavbarState);
});

//* Write cleanup function
document.removeEventListener("DOMContentLoaded", () => {
  navToggler.addEventListener("click", changeNavbarState);
});
