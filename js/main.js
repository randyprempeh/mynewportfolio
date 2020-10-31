
/* DOM variables */
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");

/* initial state */
let menuShow = false;

menuBtn.addEventListener("click", revealMenu);

function revealMenu() {
  if (!menuShow) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach((item) => item.classList.add("show"));

    /* set state */
    menuShow = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach((item) => item.classList.remove("show"));

    /* reset state */
    menuShow = false;
  }
}

/* scroll animation fade*/
let aboutHead = document.getElementById("about-heading");
let workHead = document.getElementById("work-heading");
let contactHead = document.getElementById("contact-heading");

/* console.log(aboutHead.getBoundingClientRect()); */

function inView(element) {
  let elementBox = element.getBoundingClientRect();
  let distanceFromTop = -200;

  if (elementBox.top - window.innerHeight < distanceFromTop) {
    return true;
  } else {
    return false;
  }
}

function showScroll() {
  let divList = document.querySelectorAll(".hidden");
  divList.forEach(function (div) {
    if (inView(div)) {
      div.classList.remove("hidden");
    }
  });
}

document.addEventListener("scroll", _.throttle(showScroll, 200));

let contactBody = document.getElementById("contact-body");
function fadeinDetails() {
  const personalDetails = document.querySelectorAll(".boxes");
  for (let i = 0; i < personalDetails.length; i++) {
    setTimeout(function () {
      personalDetails[i].classList.add("personal-infobox");
    }, 1000);
  }
}

contactBody = window.onload = function () {
  fadeinDetails();
};


/* Homepage animation */
const header = document.querySelector("#header");
const introduction = document.querySelector("#introductionBg");
const introductionAddition = document.querySelector("#introductionBgAddition");
const H1line = document.querySelectorAll(".line span");
const cParagraph = document.querySelector(".content-inner p");
const aboutButton = document.querySelector(".content-inner .btn-row");
const smSection = document.querySelector(".social-media");
const smIcons = document.querySelectorAll(".social-media .icons");
const profileImg = document.querySelectorAll("#profile-img");

const introductionTL = gsap.timeline();

introductionTL
  .from([introductionAddition, introduction], {
    duration: 1.2,
    width: 0,
    skewX: 4,
    ease: "power3.inOut",
    stagger: {
      amount: 0.2,
    },
  })
  .from(header, {
    delay: -0.2,
    y: 15,
    opacity: 0,
    duration: 0.8,
    ease: "power3.inOut",
  })
  .from(H1line, {
    delay: -0.4,
    y: 80,
    duration: 0.9,
    ease: "power3.inOut",
    stagger: {
      amount: 0.2,
    },
  })
  .from([cParagraph, aboutButton], {
    delay: -0.6,
    y: -40,
    duration: 0.2,
    opacity: 0,
    ease: "power3.inOut",
    stagger: {
      amount: 0.2,
    },
  })
  .to([smSection, smIcons], {
    delay: -0.8,
    x: 40,
    /*  y: 40, */
    skewX: 1,
    opacity: .7,
    duration: 1,
    ease: "power3.inOut",
    stagger: {
      amount: 0.2,
    },
  });

gsap.from(profileImg, {
  delay: 2.7,
  x: 80,
  skewX: 2,
  duration: 0.8,
  opacity: 0,
  ease: "power3.out",
});





