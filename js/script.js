// window.onload = function () {
//     printall();
//
// };
function start(){
    printall();
}


let dataindex;
let dataindex2;


//Alla
function printall() {
    data = kurser;

    data2temp = kommandekurser;
    datasort = data2temp.sort(function (a, b) {
        return a.avklarat - b.avklarat;
    });
    data2 = datasort.reverse();

    dataindex = 0;
    dataindex2 = 0;
    var output = document.getElementById("list");
    let html = "";
    for (let x = 0; data.length > x; x++) {
        html += '<div class="card bg-secondary m-2" style="width: 20rem;">';
        html += '<div class="card-header" style="height: 70px; background-color: #a8caa9"><h6><a href="' + data[x].länkkurs + '">' + data[x].kurs + '</a> </h6></div>';
        html += '<div class="card-body">';
        html += '<h5 class="card-title">' + data[x].plats + '</h5>';
        html += '<p class="card-text" style="color: #898989">' + data[x].längd + '</p>';
        // html += '<p class="card-text">' + data[x].beskrivning +'</p>';
        html += '</div>';
        html += '<div class="card-footer text-right"><a href="' + data[x].länklärare + '">' + "Lärare: " + data[x].lärare + '</a>';
        html += '</div>';
        html += '<button type="button" class="btn btn-primary merinfo" data-toggle="modal" data-target="#exampleModal' + dataindex + '">Mer info</button>';
        html += '</div>';
        html += '<div class="modal fade" id="exampleModal' + dataindex + '" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true"><div class="modal-dialog" role="document"><div class="modal-content"><img src="images/' + data[dataindex].id + '.jpg" style="width: 100%"><div class="modal-header"><h5 class="modal-title" id="exampleModalLabel">' + data[dataindex].kurs + '</h5><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="modal-body">' + data[dataindex].beskrivning + '</div><div class="modal-footer"><button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button></div></div></div></div>';
        dataindex++
    }

    for (let x = 0; data2.length > x; x++) {
        html += '<div class="card border-secondary m-2" style="width: 20rem;">';
        html += '<div class="card-header" style="height: 70px;background-color: rgba(168,202,169,0.33)"><h6><a href="' + data2[x].länkkurs + '">' + data2[x].kurs + ' (ej klar)</a> </h6></div>';
        html += '<div class="card-body">';
        html += '<h5 class="card-title">' + data2[x].plats + '</h5>';
        html += '<p class="card-text" style="color: #898989">' + data2[x].längd + '</p>';
        if (data2[x].avklarat === "0") {
            html += '<div class="progress" style="height: 20px;"><div class="progress-bar" role="progressbar" style="color: blue;width: ' + data2[x].avklarat + '%; margin: 0 3px" aria-valuenow="' + data2[x].avklarat + '" aria-valuemin="0" aria-valuemax="100">Ej påbörjad</div></div>';
        } else {
            html += '<div class="progress" style="height: 20px;"><div class="progress-bar" role="progressbar" style="width: ' + data2[x].avklarat + '%" aria-valuenow="' + data2[x].avklarat + '" aria-valuemin="0" aria-valuemax="100">klart: ' + data2[x].avklarat + '%</div></div>';
        }

        // html += '<p class="card-text">' + data2[x].beskrivning +'</p>';
        html += '</div>';
        html += '<div class="card-footer text-right"><a href="' + data2[x].länklärare + '">' + "Lärare: " + data2[x].lärare + '</a>';
        html += '</div>';
        html += '<button type="button" class="btn btn-primary merinfo" data-toggle="modal" data-target="#exampleModalb' + dataindex2 + '">Mer info</button>';
        html += '</div>';
        html += '<div class="modal fade" id="exampleModalb' + dataindex2 + '" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><h5 class="modal-title" id="exampleModalLabel">' + data2[dataindex2].kurs + '</h5><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="modal-body">' + data2[dataindex2].beskrivning + '</div><div class="modal-footer"><button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button></div></div></div></div>';

        dataindex2++
    }
    output.innerHTML = html;
}

//endast avslutade
function printdone() {
    data = kurser;

    dataindex = 0;
    dataindex2 = 0;
    var output = document.getElementById("list");
    let html = "";
    for (let x = 0; data.length > x; x++) {
        html += '<div class="card bg-secondary m-2 justify-content-center" style="width: 20rem;">';
        html += '<div class="card-header" style="height: 70px;background-color: #a8caa9""><h6><a href="' + data[x].länkkurs + '">' + data[x].kurs + '</a> </h6></div>';
        html += '<div class="card-body">';
        html += '<h5 class="card-title">' + data[x].plats + '</h5>';
        console.log(data[x].plats);
        
        html += '<p class="card-text" style="color: #898989">' + data[x].längd + '</p>';
        // html += '<p class="card-text">' + data[x].beskrivning +'</p>';
        html += '</div>';
        html += '<div class="card-footer text-right"><a href="' + data[x].länklärare + '">' + "Lärare: " + data[x].lärare + '</a>';
        html += '</div>';
        html += '<button type="button" class="btn btn-primary merinfo" data-toggle="modal" data-target="#exampleModal' + dataindex + '">Mer info</button>';
        html += '</div>';
        html += '<div class="modal fade" id="exampleModal' + dataindex + '" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true"><div class="modal-dialog" role="document"><div class="modal-content"><img src="images/' + data[dataindex].id + '.jpg" style="width: 100%"><div class="modal-header"><h5 class="modal-title" id="exampleModalLabel">' + data[dataindex].kurs + '</h5><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="modal-body">' + data[dataindex].beskrivning + '</div><div class="modal-footer"><button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button></div></div></div></div>';
        dataindex++
    }

    output.innerHTML = html;
}

//endast pågående
function printongoing() {
    data = kurser;

    dataindex = 0;
    dataindex2 = 0;
    var output = document.getElementById("list");
    let html = "";
    data2temp = kommandekurser;
    datasort = data2temp.sort(function (a, b) {
        return a.avklarat - b.avklarat;
    });
    data2 = datasort.reverse();

    for (let x = 0; data2.length > x; x++) {

        html += '<div class="card border-secondary m-2" style="width: 20rem;">';
        html += '<div class="card-header" style="height: 70px;background-color: rgba(168,202,169,0.33)"><h6><a href="' + data2[x].länkkurs + '">' + data2[x].kurs + ' (ej klar)</a> </h6></div>';
        html += '<div class="card-body">';
        html += '<h5 class="card-title">' + data2[x].plats + '</h5>';
        html += '<p class="card-text" style="color: #898989">' + data2[x].längd + '</p>';
        if (data2[x].avklarat === "0") {
            html += '<div class="progress" style="height: 20px;"><div class="progress-bar" role="progressbar" style="color: blue;width: ' + data2[x].avklarat + '%; margin: 0 3px" aria-valuenow="' + data2[x].avklarat + '" aria-valuemin="0" aria-valuemax="100">Ej påbörjad</div></div>';
        } else {
            html += '<div class="progress" style="height: 20px;"><div class="progress-bar" role="progressbar" style="width: ' + data2[x].avklarat + '%" aria-valuenow="' + data2[x].avklarat + '" aria-valuemin="0" aria-valuemax="100">klart: ' + data2[x].avklarat + '%</div></div>';
        }
        // html += '<p class="card-text">' + data2[x].beskrivning +'</p>';
        html += '</div>';
        html += '<div class="card-footer text-right"><a href="' + data2[x].länklärare + '">' + "Lärare: " + data2[x].lärare + '</a>';
        html += '</div>';
        html += '<button type="button" class="btn btn-primary merinfo" data-toggle="modal" data-target="#exampleModalb' + dataindex2 + '">Mer info</button>';
        html += '</div>';
        html += '<div class="modal fade" id="exampleModalb' + dataindex2 + '" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><h5 class="modal-title" id="exampleModalLabel">' + data2[dataindex2].kurs + '</h5><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="modal-body">' + data2[dataindex2].beskrivning + '</div><div class="modal-footer"><button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button></div></div></div></div>';

        dataindex2++
    }
    output.innerHTML = html;
}