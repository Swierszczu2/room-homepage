const changer = document.querySelector(".changer");
const bg = document.querySelector(".primary__bg-image");
const title = document.querySelector(".info__title");
const text = document.querySelector(".info__text");
const hamburger = document.getElementById("hamburger");
const menu = document.querySelector(".menu");
const menuList = document.querySelector(".menu__list");

const sets = [
  {
    title: "Discover innovative ways to decorate",
    text: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    img: "1",
  },
  {
    title: "We are available all across the globe",
    text: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    img: "2",
  },
  {
    title: "Manufactured with the best materials",
    text: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
    img: "3",
  },
];

let i = 0;
active = false;

changer.addEventListener("click", (e) => {
  if (e.target.classList.contains("changer__left-icon")) {
    i == 0 ? (i = sets.length - 1) : i--;
  } else {
    i < sets.length - 1 ? i++ : (i = 0);
  }
  title.textContent = sets[i].title;
  window.screen.width === 375
    ? (bg.src = `./images/mobile-image-hero-${sets[i].img}.jpg`)
    : (bg.src = `./images/desktop-image-hero-${sets[i].img}.jpg`);
  text.textContent = sets[i].text;
});

window.addEventListener("load", () => {
  if (window.screen.width <= 375) {
    bg.src = `./images/mobile-image-hero-1.jpg`;
    hamburger.addEventListener("click", () => {
      menu.classList.toggle("menu--mobile");
      menuList.classList.toggle("menu__list--mobile");
      menu.classList.contains("menu--mobile")
        ? (hamburger.src = "./images/icon-close.svg")
        : (hamburger.src = "./images/icon-hamburger.svg");
    });
  } else {
    bg.src = `./images/desktop-image-hero-1.jpg`;
    hamburger.style.display = "none";
  }
});

//replace icon menu
//remove class menu--moblie & menu__list--mobile
