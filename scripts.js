let botonNetx = document.querySelector(".next")
let botonBack = document.querySelector(".back")

let contaner = document.querySelector(".contaner")
let list = document.querySelector(".contaner .list")
let thumb = document.querySelector(".contaner .thumb")


botonBack.onclick = () => moverItems("back")
botonNetx.onclick = () => moverItems("next")

function moverItems(type) {

    let listItems = document.querySelectorAll(".list .list-items")
    let thumbItems = document.querySelectorAll(".thumb .thumb-items")

    if (type === "next") {
        list.appendChild(listItems[0])
        thumb.appendChild(thumbItems[0])
        contaner.classList.add("next")
    }
    else {
        list.prepend(listItems[listItems.length - 1])
        thumb.prepend(thumbItems[thumbItems.length - 1])
        contaner.classList.add("back")
    }

    setTimeout(() => {
        contaner.classList.remove("next")
        contaner.classList.remove("back")
    }, 2000);

}



