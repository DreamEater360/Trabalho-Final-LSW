import { Settings } from "../components/Settings.js"
import { Calculator } from "../components/Calculator.js"
import { Appbar } from "../components/Appbar.js"
import { Shell } from "../components/Shell.js"
import { Synet } from "../components/Synet.js"
import { Explorer } from "../components/file-explorer.js"

import { close } from "../components/crutch.js"


// Fechar apps ao clicar no main
const main = document.getElementById("main")
main.addEventListener('dblclick', close)

//options
const title_hidden = document.getElementById("title-hidden")
const title = document.querySelector("header")
const title_show = document.getElementById("title-show")
const settings = new Settings("main")
const settings_b = document.getElementById("settings")

settings_b.addEventListener('click', ()=>{
    settings.show()
})

title_hidden.addEventListener('click', ()=>{
    title.style.display = "none"
    title_show.style.display = "flex"
    main.style.height = "calc(100vh - 80px)"
})

title_show.addEventListener('click', ()=>{
    title.style.display = "flex"
    title_show.style.display = "none"
    main.style.height = "calc(90vh - 80px)"
})

// Calculadora
const calculator = new Calculator("main") // Objeto calculadora
const calculator_b = document.getElementById("calc") // Botão para interagir com o objeto
calculator_b.addEventListener('click',()=>{
    calculator.show()
})

// Explorador de arquivos
const explorer = new Explorer("main") // Objeto calculadora
const explorer_b = document.getElementById("files") // Botão para interagir com o objeto
explorer_b.addEventListener('click',()=>{
    explorer.show()
})

// Menu de applicativos
const app_bar = new Appbar("main") // Objeto barra de aplicativos
const app_bar_b = document.getElementById("apps") // Botão para interagir com o objeto
app_bar_b.addEventListener('click',()=>{
    app_bar.show()
})

// Terminal / shell de comandos
const shell = new Shell("main")
const shell_b = document.getElementById("terminal")
shell_b.addEventListener('click',()=>{
    shell.show()
})

// Função para carregar os objetos
window.onload = function load() {
    settings.init()
    calculator.init()
    app_bar.init()
    shell.init()
    explorer.init()
    
    /* apps do menu de aplicativos */
    
    // Buscador 
    const synet = new Synet("main")
    const synet_b = document.getElementById("easynetb")
    synet_b.addEventListener('click', ()=>{
        app_bar.show()
        synet.show()
    })
    
    synet.init()
}