import { changeNavbarState } from "../../utils/changeNavbarState";

const navItems = [
  {
    name: "home",
    linkPath: "/",
  },
  {
    name: "content",
    linkPath: "#content",
  },
  {
    name: "about",
    linkPath: "#about",
  },
  {
    name: "contact us",
    linkPath: "#contact-us",
  },
  {
    name: "other",
    linkPath: "#other",
  },
];

const createNavItems = () => {
  const itemsWrapper = document.querySelector("#itemsWrapper");
  if (itemsWrapper === null) return;

  navItems.forEach((item) => {
    itemsWrapper.innerHTML += `
    <li class="nav-item" tabindex="1">
      <div
      class="nav-item__wrapper d-flex justify-content-between align-items-center"
      >
        <a
        href=${item.linkPath}
        class="nav-link text-uppercase text-truncate"
        >${item.name}</a>
        
        <div class="nav-icons">
          <div class="nav-icons__item">
            <i class="bi bi-arrow-down"></i>
          </div>
          <div class="nav-icons__item">
            <i class="bi bi-arrow-down"></i>
          </div>                              
        </div>
      </div>
    </li>
    `;
  });
};

const NavlinkOnClick = (item) => {
  if (item.hasAttribute("aria-current")) return;
  item.setAttribute("aria-current", item.textContent);
};

const handleNavlinks = () => {
  const navLinks = document.querySelectorAll(".nav-link");
  if (navLinks === null) return;

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      changeNavbarState();
      NavlinkOnClick(link);
    });

    //* cleanup function
    return () => {
      link.removeEventListener("click", () => {
        changeNavbarState();
        NavlinkOnClick(link);
      });
    };
  });
};

document.addEventListener("DOMContentLoaded", () => {
  createNavItems();
  handleNavlinks();
});
