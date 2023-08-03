let fsc=10
let ssc=20
let sum=fsc+ssc
let hasbj=false
let alive=true
let message=""
let messageEl = document.getElementById("message-el")
//console.log(messageEl)
let sumEl = document.getElementById("sum-el")
function stgame(){
    sumEl.textContent = "Sum: " + sum
    if(sum<21){
        
        message="draw again"
    }
    else if(sum===21){
       
        hasbj=true
        message="won"
    }
    else {
        console.log("Lost")
        alive=false
        message="Lost"
    }
   messageEl.textContent = message
}