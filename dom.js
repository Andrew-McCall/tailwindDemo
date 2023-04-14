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
divElement.appendChild(button);

let count = 0;

const updateButton = (e, value, message) => {
    e.target.innerHTML= `${message}: ${value}`
}
button.addEventListener("click", (e) => {
    updateButton(e, (count++)*10 , "count")
})

divElement.onclick = (e) => console.log(count*2)
button.onclick = (e) => console.log(count)



const takesTime = (message) => new Promise( (res, err) => {
    setTimeout(() => {
        res(message)
    }, 3000)
})

takesTime(".then").then((result) => console.log(result))

async function asyncowner(){
    const result = await takesTime("async await");
    console.log(result)
}
asyncowner()
// RESTFUL - data is json

// get -- get
// post -- create
// put -- replay
// patch -- partial update
// delete -- delete
const req = new XMLHttpRequest();

req.onload = () => { //result
    if (req.status === 200 && req.readyState == 4) {
      if (req.getResponseHeader("Content-Type").startsWith("application/json")) {
        console.log(JSON.parse(req.responseText));
      } else {
        console.log(
          "Looks like its not JSON but lets see what it is... " + req.responseText
        );
      }
    } else {
      console.log("Oh no... handle error");
    }
  };

req.open("GET", "https://reqres.in/api/users/3")
req.send();

fetch("https://reqres.in/api/users/3", {
    method:"get",
    headers:{"Content-Type": "application/json"}
})
.then((res) => res.json())
.then(body => console.log(body.data)).catch(console.log)

async function asyncOwner() {
    const result = await fetch("https://reqres.in/api/users/3", {
        method:"get",
        headers:{"Content-Type": "application/json"}
    })
    console.log(result)
}
asyncOwner()