const btn = document.querySelectorAll(".card");
const overlay = document.querySelector(".telaDeInformacoes");


btn.forEach(botao => {
    botao.addEventListener("click", () => {
        overlay.classList.add("ative")
    });
});
function close() {
    overlay.classList.remove("ative")
}
overlay.addEventListener("click",close)
 
