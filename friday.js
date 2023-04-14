let correct = 0;
let catnumber = 0;
let breeds; 
let answer = null;

const buttonNext = document.getElementById("next")
const buttons = []
buttons.push(document.getElementById("0"))
buttons.push(document.getElementById("1"))
buttons.push(document.getElementById("2"))
buttons.push(document.getElementById("3"))
const image = document.querySelector("img");
const header = document.querySelector("h2");


// Breed Setup
fetch("https://api.thecatapi.com/v1/breeds")
.then(response => response.json())
.then(data => {
    breeds = data.map(i => i.name)
    
    LoadNewCat()
})

function LoadNewCat() {
    buttonNext.disabled = true;
    for (let i = 0; i < 4; i++){
        buttons[i].setAttribute("selected",false)
    }
    answer = null;
    catnumber += 1;
    fetch("https://api.thecatapi.com/v1/images/search?limit=1&has_breeds=1&api_key=live_6VYyViO9I0aSOjCWZO93qXQe3FPSJ5yVdOjzcloanMqVMmpMH6PivTly9gd8pLv9")
    .then(response => response.json())
    .then(data => {
        header.innerText = `Question: ${catnumber} (${correct} Correct)`
        image.src = data[0].url
        answer = data[0].breeds[0].name
        
        let real = Math.floor(Math.random()*4)
        buttons[real].innerText = answer;

        for (let i = 0; i < 4; i++){
            if (i != real){
                buttons[i].innerText = breeds[Math.floor(Math.random()*breeds.length)]
            }
        }
    })
}

function Answer(e){
    e.preventDefault();
    for (let i = 0; i < 4; i++){
        buttons[i].setAttribute("selected",false)
    }
    e.target.setAttribute("selected",true)
    buttonNext.disabled = false;
}

function Submit(e){
    let selected = null;
    for (let i = 0; i < 4; i++){
        if (buttons[i].getAttribute("selected")){
            selected = buttons[i]
            break;
        }
    }
    if (selected.innerText == answer){
        correct++;
    }
    LoadNewCat()
}