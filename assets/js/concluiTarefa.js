const botaoConclui = () => {
    //anonymous function linked to main function

    const botaoConclui = document.createElement("button")

    botaoConclui.classList.add("check-button")
    botaoConclui.innerText = "concluir"

    botaoConclui.addEventListener("click", concluirTarefa)

    return botaoConclui

}

const concluirTarefa = (evento) => {

    //anonymous function linked to <botaoconclui> 

    const botaoConclui = evento.target

    const tarefaCompleta = botaoConclui.parentElement

    //toggle method = it adds and removes a class if you toggle it on and off

    tarefaCompleta.classList.toggle("done")

}

export default botaoConclui