const btnInfo = document.querySelector(".card");
const telaDeInfos = document.querySelector(".telaDeInformacoes");

telaDeInfos.style.visibility = "hidden";

function informacoes() {
    telaDeInfos.style.visibility = "visible";
}
btnInfo.addEventListener("click", informacoes)