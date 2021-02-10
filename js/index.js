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
    duration: 0.6,
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
    opacity: 1,
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
