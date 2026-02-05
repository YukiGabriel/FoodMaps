const btnInfo = document.querySelectorAll(".card");
const telaDeInfos = document.querySelector(".telaDeInformacoes");

telaDeInfos.style.visibility = "hidden";

function informacoes() {
    telaDeInfos.style.visibility = "visible";
}

btnInfo.forEach(card => {
    card.addEventListener("click", informacoes);
});
