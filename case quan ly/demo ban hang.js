
let arr = ["sl1.webp","sl2.webp"];
let arr1 = ["sl3.webp","sl4.webp"];
let i=0;
let j=0;
function loadanh() {
    document.getElementById("imgtop").src = arr[i];
    i++
    if (i==arr.length){
        i=0;
    }
    setTimeout("loadanh()",2000);
}
function loadanh1() {
    document.getElementById("imgtop1").src = arr1[j];
    j++
    if (j==arr.length){
        j=0;
    }
    setTimeout("loadanh1()",1500);
}
function  showModal(){
    let modalAdd = document.getElementById('modal_add')
    modalAdd.style.display='flex'
}
function highmodal() {
    let modalAdd = document.getElementById('modal_add')
    modalAdd.style.display='none'
}

function showmodal1() {
    let modalla = document.getElementById("modal_add1")
    modalla.style.display="flex"
}
function highmodal1() {
    let modalla = document.getElementById("modal_add1")
    modalla.style.display="none"
}

function showdn() {
 document.getElementById("modal_add3").style.display = "flex"
}
function highdn() {
    document.getElementById("modal_add3").style.display = "none"
}


