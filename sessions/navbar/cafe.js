const btnInfo = document.querySelector(".info");
const telaDeInfos = document.querySelector(".telaDeInformacoes");

telaDeInfos.style.visibility = "hidden";

function informacoes() {
    telaDeInfos.style.visibility = "visible";
}
btnInfo.addEventListener("click", informacoes)