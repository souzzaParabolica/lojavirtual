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
