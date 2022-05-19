const botaoDeleta = () => {
    const botaoDeleta = document.createElement("button")

    botaoDeleta.innerText = 'deletar'
    botaoDeleta.addEventListener("click", deletarTarefa)

    return botaoDeleta
}

const deletarTarefa = (evento) => {
    const botaoDeleta = evento.target

    // selects parent element of the button, in this case, the li

    const tarefaCompleta = botaoDeleta.parentElement

    tarefaCompleta.remove();


    return botaoDeleta
}

export default botaoDeleta
