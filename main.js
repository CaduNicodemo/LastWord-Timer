function mudaTexto(text) {

    var mensagem = document.querySelector(".mensagem")

    mensagem.innerHTML = text;
}

function calculaTempo() {
    var timer = Math.floor(Math.random() * (75000 - 30000 + 1) + 30000);
    console.log(timer);

    setTimeout(function() {
        mudaTexto("Time's up!");
        document.querySelector(".timer__reset").classList.add("ativado");
        const alarm = new Audio('008724855-buzzer-game-show.m4a');
        alarm.play()
    }, timer);
}

calculaTempo()

function reseta() {
    mudaTexto("Last Word!")
    calculaTempo()
}

const reset = document.querySelector(".timer__reset");
reset.addEventListener('click', (e) => {
    reset.classList.remove("ativado");
    reseta()
});