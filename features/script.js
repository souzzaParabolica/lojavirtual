document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.querySelector("input[type='text']");
  const cards = document.querySelectorAll(
    ".card, .card-descubra, .card-descubra-M"
  );

  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();

    cards.forEach((card) => {
      // tenta pegar título em h2 ou h3
      const titleEl = card.querySelector("h2, h3");
      const title = titleEl ? titleEl.textContent.toLowerCase() : "";

      // se o título contém o texto digitado, mostra
      if (title.includes(query)) {
        card.style.display = "flex";
        card.style.opacity = "1";
      } else {
        card.style.display = "none";
      }
    });
  });
});

const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu-nav");
const items = document.getElementById("menu-items");

btn.addEventListener("click", () => {
  // anima a largura do nav
  if (nav.classList.contains("w-[40px]")) {
    nav.classList.remove("w-[40px]");
    nav.classList.add("w-[90%]");
  } else {
    nav.classList.remove("w-[90%]");
    nav.classList.add("w-[40px]");
  }

  // mostra/esconde os itens com delay
  setTimeout(() => {
    items.classList.toggle("hidden");
    items.classList.toggle("flex");
    items.classList.toggle("flex-col");
  }, 200); // espera o nav expandir/fechar um pouco
});

const backToTopBtn = document.getElementById("back-to-top");

// Mostrar/ocultar botão ao rolar
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    gsap.to(backToTopBtn, {
      opacity: 1,
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  } else {
    gsap.to(backToTopBtn, {
      opacity: 0,
      scale: 0.9,
      duration: 0.3,
      ease: "power2.out",
    });
  }
});

// Voltar ao topo com animação suave
backToTopBtn.addEventListener("click", () => {
  gsap.to(window, {
    scrollTo: 0,
    duration: 0.8,
    ease: "power2.out",
  });
});

// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
  console.log(e);
});