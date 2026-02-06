const btn = document.querySelectorAll(".card");
const overlay = document.querySelector(".telaDeInformacoes");


btn.forEach(botao => {
    botao.addEventListener("click", () => {
        overlay.style.display = "flex";
    });
});


overlay.addEventListener("click", () => {
    overlay.style.display = "none";
});