    /* Gsap Animation */
    const conHeader = document.querySelector("#contact-header");
 /*    const conIntroduction = document.querySelector("#con-introductionBg");
    const conIntroductionAddition = document.querySelector(
      "#con-introductionBgAddition"
    ); */
    const bigText = document.querySelector("h1");
    const addText = document.querySelector("#contact-text");
    const bigText1 = document.querySelector("#contact-heading");
    const bigText2 = document.querySelectorAll(".sm-heading");


    const contactTL = gsap.timeline();

    contactTL 
      .from(conHeader, {
        delay: -0.8,
        x: 55,
        opacity: 0,
        duration: 1.8,
        ease: "power3.inOut",
      })
      .from([bigText, addText], {
        delay: -0.4,
        y: -40,
        duration: 0.8,
        opacity: 0,
        ease: "power3.inOut",
        stagger: {
          amount: 0.2,
        },
      })
      .from(bigText2, {
        delay: -0.6,
        y: 85,
        opacity: 0,
        duration: 1.7,
        ease: "power3.inOut",
        stagger: {
          amount: 0.2,
        },
      })
      .from(bigText1, {
        delay: 1.9,
        y: 85,
        opacity: 0,
        duration: 1.7,
        ease: "power3.inOut",
        stagger: {
          amount: 0.2,
        },
      });