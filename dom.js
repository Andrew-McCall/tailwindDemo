console.log("Hello World!")

const divElement = document.createElement("div")
divElement.id = "i can change id"
divElement.className = "active"

const h1Element =document.createElement("h1")
h1Element.innerHTML = "Helo World!"
h1Element.style= "color:white;"
divElement.appendChild(h1Element)

document.body.appendChild(divElement)
document.querySelector("div").className = "bg-slate-600";

const button = document.createElement("button")
button.textContent = "Click Me!"
document.body.appendChild(button);

let count = 0;
button.addEventListener("click", e => button.textContent= `Count: ${count++}`)
