let body = document.querySelector("body")
let tab = document.querySelector("table")
let inp = document.querySelector("input")
let th = document.querySelector("th")
let tr = document.querySelector("tr")
document.querySelector("button").onclick=()=>{
    fetch("https://api.disneyapi.dev/characters")
    
    .then(function(res){
        return res.json()
    }).then(function(ace){
        let num = 0
        do{
        bot = document.getElementById("bot")
        bot.style.visibility="hidden"
        let h1=document.createElement("h1")
        h1.setAttribute("id", "frases")
        h1.append(document.createTextNode((ace["data"][num]["name"])))
        body.append(h1)
        let img=document.createElement("img")
        img.setAttribute("id", "imagens")
        img.src = ace["data"][num]["imageUrl"]
        body.append(img)
        num++
        }while(num>0)
    })
}
document.getElementById("add").onclick = adic
function adic(){
    inp=document.getElementById("per").value
	tr=document.createElement("tr")
    tr.append(inp)
    tab.append(tr)
    document.getElementById("per").value=""
}