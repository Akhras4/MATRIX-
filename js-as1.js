function dialog_open(){
    dialog=document.getElementById("dialog-url");
    dialog.showModal()
}
function dialog_close(){
    dialog=document.getElementById("dialog-url");
    dialog.close()
}
function read() {
    var firstname = document.getElementsByTagName("input")[0].value;
    var lastname = document.getElementsByTagName("input")[1].value;
    var email = document.getElementsByTagName("input")[2].value;
    console.log(email);
    Writetable(firstname, lastname, email);
}

function Writetable(first, last, email) {
    var table = document.getElementById("data-table").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.rows.length);
    var n = newRow.insertCell(0);
    var m = newRow.insertCell(1);
    var z = newRow.insertCell(2);
    n.innerHTML = first;
    m.innerHTML = last;
    z.innerHTML = email;
    console.log(first);
}

document.getElementById("user-add").addEventListener("submit", readsubmit) 
function readsubmit(){
    event.preventDefault(); 
    read(); 
};