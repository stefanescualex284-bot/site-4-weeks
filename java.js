

const cards = document.querySelectorAll(".portfolio-card");

function reveal() {
  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      card.classList.add("show");
    }
  });
}

window.addEventListener("scroll", reveal);
reveal();