document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.querySelector("input[type='text']");
  const cards = document.querySelectorAll(".card");

  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();

    cards.forEach((card) => {
      const title = card.querySelector("h2").textContent.toLowerCase();
      // se o título do card contém o texto digitado, mostra
      if (title.includes(query)) {
        card.style.display = "flex";
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
