import { create, clear } from "./crutch.js"
//import fs from "node:fs"


export class Explorer {
    constructor(id) {
        this.father = document.getElementById(id)
        this.element = create("div")
        this.element.id = "explorer"
    }

    show(){
        if(this.element.style.display == 'none'){
            clear(this.element.id)
            this.element.style.display = 'block'

        }
        else{
            this.element.style.display = 'none'

        }

    }

    init(){
        this.components()
        this.father.appendChild(this.element)
        this.element.style.display = 'none'
    }

    // Essa lista se refere somente aos botões do menu, e não aos itens em si
    components(){
        let usr_path
        let title_explorer = create("h3")
        // Carrega JSON para tratamento e visualização de dados
        fetch('http://localhost:3000/users')
        .then(response => response.json())
        .then(users => {
            users.forEach(user_c => {
                if(user_c.nome == "root"){
                    usr_path = user_c.storage
                    title_explorer.innerText = `${usr_path}`
                }
            })
        })

        let display = create("div")
        display.id = "display-explorer"

        let menu_up = create("div")
        menu_up.id = "up-menu-explorer"

        title_explorer.style.margin = "0"
        title_explorer.style.padding = "15px"
        menu_up.appendChild(title_explorer)

        let desc = create("ul")
        desc.classList.add("ul-file")

        let item = create("li")
        item.classList.add("item-file")
        let icon_item = create("img")
        let file_name = create("p")
        file_name.innerText = "test-file.txt"
        icon_item.src = "./archives/icons/document-text.svg"

        let item2 = create("li")
        item2.classList.add("item-file")
        let icon_item2 = create("img")
        let file_name2 = create("p")
        file_name2.innerText = "video.mp4"
        icon_item2.src = "./archives/icons/play.svg"

        item.appendChild(icon_item)
        item.appendChild(file_name)

        desc.appendChild(item)

        item2.appendChild(icon_item2)
        item2.appendChild(file_name2)

        desc.appendChild(item2)

        display.appendChild(menu_up)

        display.appendChild(desc)
        this.element.appendChild(display)
    }

}