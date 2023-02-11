import revealer from "circular-revealer";

//* Initial Revealer Nav Background
const revealerNav = revealer({
  revealElementSelector: ".offcanvas--customize",
  options: {
    anchorSelector: "#navTogglerIcon",
  },
});

const toggleNavbarAttributes = () => {
  const navTogglerEl = document.getElementById("navTogglerIcon");

  const currentState = navTogglerEl.getAttribute("data-open");
  const isExpanded = navTogglerEl.getAttribute("aria-expanded");

  if (currentState === "false" && isExpanded === "false") {
    navTogglerEl.setAttribute("data-open", "true");
    navTogglerEl.setAttribute("aria-expanded", "true");
  } else {
    navTogglerEl.setAttribute("data-open", "false");
    navTogglerEl.setAttribute("aria-expanded", "false");
  }
};

const toggleNavbarStatus = () => {
  const isRevealed = revealerNav.isRevealed();

  if (!isRevealed) revealerNav.reveal();
  else revealerNav.hide();
};

// eslint-disable-next-line import/prefer-default-export
export const changeNavbarState = () => {
  toggleNavbarAttributes();
  toggleNavbarStatus();
};
