const isMobile =
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
// maskSize: isMobile ? "50vw" : "0vw", // 50vw se for mobile, 20vw se for desktop
gsap.to(".hero", {
  height: "50vh",

  scrollTrigger: {
    scrub: 1,
    trigger: "h1",
    start: "top 35%",
    end: "top -20%",
    markers: false,
  },
});

// Timeline de animação
const tl = gsap.timeline();

// Animações em sequência
tl.to(".animate-header", {
  opacity: 1,
  y: 0,
  duration: 0.8,
  ease: "power2.out",
})
  .to(
    ".animate-hero",
    {
      opacity: 1,
      scale: 1,
      duration: 1.2,
      ease: "power2.out",
    },
    "-=0.4"
  )
  .to(
    ".animate-title",
    {
      opacity: 1,
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      duration: 1,
      ease: "power2.out",
    },
    "-=0.8"
  )
  .to(
    ".animate-nav-item",
    {
      opacity: 1,
      y: 0,
      stagger: 0.1,
      duration: 0.5,
      ease: "back.out(1.7)",
    },
    "-=0.5"
  )
  .to(
    ".animate-search",
    {
      opacity: 1,
      scale: 1,
      duration: 0.7,
      ease: "elastic.out(1, 0.75)",
    },
    "-=0.3"
  )
  .to(
    ".animate-cart",
    {
      opacity: 1,
      x: 0,
      duration: 0.6,
      ease: "power2.out",
    },
    "-=0.2"
  );

gsap.from(".display .titulo", {
  opacity: 0,
  y: 50,
  scrollTrigger: {
    trigger: ".display",
    start: "top 60%",
    end: "top 50%",
    markers: false,
  },
});

gsap.from(".display .card", {
  opacity: 0,
  y: 50,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".display",
    start: "top 50%",
    end: "top 30%",
    markers: false,
  },
});
