// Detecta se é mobile pela largura da tela
const isMobile = window.matchMedia("(max-width: 768px)").matches;

// Hero shrink no scroll
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

// Timeline de animação inicial
const tl = gsap.timeline();

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

// Título animado no scroll
gsap.from(".display .titulo", {
  opacity: 0,
  y: 50,
  scrollTrigger: {
    trigger: isMobile ? ".titulo" : ".display",
    start: isMobile ? "top 95%" : "top 60%",
    end: isMobile ? "top 70%" : "top 50%",
    markers: false,
  },
});

if (isMobile) {
  // Seleciona todos os cards
  document.querySelectorAll(".display .card").forEach((card, i) => {
    gsap.from(card, {
      opacity: 0,
      y: 10,
      duration: 0.6,
      scrollTrigger: {
        trigger: card, // cada card vira seu próprio trigger
        start: "top 95%", // quando o card chega perto do viewport
        end: "top 70%",
       markers: true, // ativa se quiser debugar
      },
    });
  });
} else {
  // Desktop: todos juntos de uma vez
  gsap.from(".display .card", {
    opacity: 0,
    y: 50,
    duration: 0.6,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".display",
      start: "top 50%",
      end: "top 30%",
      toggleActions: "play none none reverse",
      // markers: true,
    },
  });
}