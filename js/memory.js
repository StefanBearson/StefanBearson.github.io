let output = document.getElementById('output');
let html = "";

let memoryArray = ["11","12","21","22","31","32","41","42","51","52","61","62"];
let picks = 0;
let first;
let second;
let par;
let nummerAvPar = 0;
let shuffleArray = shuffle(memoryArray);

for (card of shuffleArray){
    let bild;
    let temp = card.toString().charAt(0);

    switch (temp) {
        case "1": bild = '<i class="fas fa-address-card"></i>'; break;
        case "2": bild = '<i class="fab fa-affiliatetheme"></i>'; break;
        case "3": bild = '<i class="fas fa-anchor"></i>'; break;
        case "4": bild = '<i class="fas fa-archway"></i>'; break;
        case "5": bild = '<i class="fab fa-angellist"></i>'; break;
        case "6": bild = '<i class=\"fab fa-accessible-icon\"></i>'; break;
        default: break;
    }
    html += '<div id="test" class="col-3" onclick="show('+card+')"><div class="card m-1" style="height: 120px;"><div id="'+ card +'" style="visibility: hidden; font-size: 5em; text-align: center; margin: auto 0;">' + bild + '</div></div></div>'
}

function remove() {
    for (let x = 0; x < 12; x++){
        document.getElementById("test").remove();
    }


}

function newGame(){
    let output = document.getElementById('output');
    let html = "";

    let memoryArray = ["11","12","21","22","31","32","41","42","51","52","61","62"];
    let picks = 0;
    let first;
    let second;
    let par;
    let nummerAvPar = 0;
    let shuffleArray = shuffle(memoryArray);

    for (card of shuffleArray){
        let bild;
        let temp = card.toString().charAt(0);

        switch (temp) {
            case "1": bild = '<i class="fas fa-address-card"></i>'; break;
            case "2": bild = '<i class="fab fa-affiliatetheme"></i>'; break;
            case "3": bild = '<i class="fas fa-anchor"></i>'; break;
            case "4": bild = '<i class="fas fa-archway"></i>'; break;
            case "5": bild = '<i class="fab fa-angellist"></i>'; break;
            case "6": bild = '<i class=\"fab fa-accessible-icon\"></i>'; break;
            default: break;
        }
        html += '<div id="test" class="col-3" onclick="show('+card+')"><div class="card m-1" style="height: 120px;"><div id="'+ card +'" style="visibility: hidden; font-size: 5em; text-align: center; margin: auto 0;">' + bild + '</div></div></div>'
    }

    output.innerHTML = html;
}
function show(card){
    if(nummerAvPar === 6){
        console.log("vinnare!");
        nummerAvPar = 0;
        remove();
        newGame();
    }
    if(picks == 0){
        first = card;
        document.getElementById(card).style.visibility = "visible";
        picks++;
    }else if(picks == 1){
        second = card;
        document.getElementById(card).style.visibility = "visible";
        a = first.toString().charAt(0);
        b = second.toString().charAt(0);

        if(a == b){
            console.log("par");
            par = true
        }
        picks++

    }else if(picks == 2){
        if(par){
            document.getElementById(first).style.backgroundColor = "gray";
            document.getElementById(second).style.backgroundColor = "gray";
            nummerAvPar++;
            first = "";
            second = "";
            picks = "";
            par = false;
        }else {
            document.getElementById(first).style.visibility = "hidden";
            document.getElementById(second).style.visibility = "hidden";
            first = "";
            second = "";
            picks = "";
            par = false;
        }
    }

}
output.innerHTML = html;

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}