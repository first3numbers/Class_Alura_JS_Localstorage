import botaoConclui from "./concluiTarefa.js";
import botaoDeleta from "./deletaTarefa.js";


const criarTarefa = (evento) => {

    //prevents page reload when form is sent
    evento.preventDefault();

    //checks for the current data in the list and gets the value inputted in the form
    const lista = document.querySelector("[data-list]")
    const input = document.querySelector("[data-form-input]")
    const valor = input.value

    //creates a new entry on the list, adds a CSS class to it
    const tarefa = document.createElement("li")
    tarefa.classList.add("task")

    //template that adds text content to the created table element and also adds the typed input into the HTML
    const conteudo = `<p class = "content">${valor}</p>`

    tarefa.innerHTML = conteudo

    tarefa.appendChild(botaoConclui())
    tarefa.appendChild(botaoDeleta())
    lista.appendChild(tarefa)
    input.value = ""
}

//event listener that reacts to the form being sent and activates main function, which activates subsequent anonymous functions

const novaTarefa = document.querySelector("[data-form-button]")

novaTarefa.addEventListener("click", criarTarefa)

