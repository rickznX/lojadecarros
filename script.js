document.addEventListener("DOMContentLoaded", function() {
    console.log("Página carregada com sucesso!");

    const cards = document.querySelectorAll(".card");
    cards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.boxShadow = "0px 5px 15px rgba(0, 0, 0, 0.3)";
        });
        card.addEventListener("mouseleave", () => {
            card.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.2)";
        });
    });
});
