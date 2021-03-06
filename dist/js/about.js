/* Introductory animation */
const bioImage = document.querySelector(".section-img");
const aboutText = document.querySelector("#about-txt");
const myBackground = document.querySelector("#my-background");
/* const bigText2 = document.querySelectorAll(".sm-heading"); */


const introaboutTL = gsap.timeline();

introaboutTL 
  .from(bioImage, {
    delay: -0.8,
    x: 55,
    opacity: 0,
    duration: 1.8,
    ease: "power3.inOut",
  })
  .from([aboutText, myBackground], {
    delay: -0.4,
    y: -40,
    duration: 0.8,
    opacity: 0,
    ease: "power3.inOut",
    stagger: {
      amount: 0.2,
    },
  })





/* about animation */
const tl = new TimelineMax({ onUpate: updatePercentage });
const tl2 = new TimelineMax();

const controller = new ScrollMagic.Controller();

tl.from("blockquote", 0.5, { x: 200, opacity: 0 });
tl.from(".first", 1, { x: -200, opacity: 0}, "=-.5");
tl.from(".next",1, { x: 200, opacity: 0}, "=-.5");
tl.from(".next1",1, { x: -100, opacity: 0}, "=-.5");
tl.from(".next2",1, { x: 300, opacity: 0}, "=-.5");


tl.from("#spanny",1, { width:0}, "=-.5");

/* animmation as element triggers from an element in view instead of scrolling */
tl2.from("#animate_hub", 1, { x: -700, opacity: 0 });
tl2.to("#animate_hub", .5, {
     left: "30%", 
     scale: 1.2,
     borderColor: "gray",
     borderWdith: 12,
     boxShadow: "1px 1px 0px 0px rgba(0,0,0,.8)",
     zIndex: -1   
    }); 

const scene = new ScrollMagic.Scene({
  triggerElement: ".sticky",
  triggerHook: "onLeave",
  duration: "100%",
})

  .setPin(".sticky")
  .setTween(tl)
  .addTo(controller);

  const scene2 = new ScrollMagic.Scene({
    triggerElement: "blockquote",
  })
    .setTween(tl2)
    .addTo(controller);
  

function updatePercentage() {
  tl.progress();
  console.log(tl.progress());
}

