const parsedCookies = {}
for (c of document.cookie.split("; ")){
    let keyValue = c.split("=")
    parsedCookies[keyValue[0]] = keyValue[1]
}

if (parsedCookies.con){
    document.getElementById("con").value = parsedCookies.con;
}

if (parsedCookies.cod){
    document.getElementById("cod").value = parsedCookies.cod;
}

const local = localStorage.getItem("ls")
const session = sessionStorage.getItem("ss")

if (local) {
    document.getElementById("ls").value = local;
}

if (session) {
    document.getElementById("ss").value = session;
}

function cookiesNoDate(event){
    document.cookie = "con="+event.target.value
}

let expire = new Date();
expire.setTime(expire.getTime() + 5*60*60*24*1000)
function cookiesWithDate(event){
    document.cookie = "cod="+event.target.value+"; expires="+expire.toUTCString();
}

function storageLocal(event){
    localStorage.setItem("ls", event.target.value)
}

function storageSession(event){
    sessionStorage.setItem("ss", event.target.value)
}