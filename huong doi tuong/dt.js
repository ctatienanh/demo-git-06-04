class sanpham {
    name;
    anh;
    constructor(ten, img) {
        this.name = ten;
        this.anh = img;
    }
}
  let product= [];
function add() {
    let a= document.getElementById("add").value;
    let b = document.getElementById("addimg").value;
     product.push(new sanpham(a,b));
    show();
}

function show(){
    let str = "";
        str += `<tr>`
        str += `<td> ${"stt"}  </td>`
        str += `<td> ${"Name"} </td>`
        str += `<td> ${"img"} </td>`

        str += `<tr>`
    for(let i=0 ; i<product.length ; i++){
        str += "<tr>"
        str += `<td> ${i +1} </td>`
        str += `<td> ${product[i].name}</td>`
        str += `<td> <img src= ${product[i].anh} >  </td>`
        str += `<td><input type="button" value="EDIT">  </td>`
        str += `<td><input type="button" value="DELET" > </td>`
        str += "<tr>"
    }
   document.getElementById("hienthi").innerHTML = str;
}  

    function showedit(index) {
        
    }