class Qlsv {
    name;
    age;
    gioitinh;
    telephone;
    email;
    constructor(ten, tuoi,gt,sdt,mail) {
        this.name = ten;
        this.age = tuoi;
        this.gioitinh = gt;
        this.telephone = sdt;
        this.email = mail;
    }
}

product = [];
function add() {
    let a=document.getElementById("namep").value;
    let b=document.getElementById("tuoi").value;
    let c=document.getElementById("gt").value;
    let d=document.getElementById("dt").value;
    let g=document.getElementById("email").value;
    product.push(new Qlsv(a,b,c,d,g));
    show();
}

function show() {
    s ="";
    s+= "<tr>"
    s+=    `<td> ${"STT"}</td>`
    s+=    `<td> ${"Name"}</td>`
    s+=    `<td> ${"Tuoi"}</td>`
    s+=    `<td> ${"gioi tinh"} </td>`
    s+=    `<td> ${"SDT"}</td>`
    s+=    `<td> ${"Email"}</td>`
        s+= "</tr>"
    for (let i=0; i < product.length; i++){
        s += "<tr>"
        s += `<td> ${i+1} </td>`
        s +=`<td> ${product[i].name }</td>`
        s +=`<td> ${product[i].age} </td>`
        s +=`<td> ${product[i].gioitinh}</td>`
        s +=`<td> ${product[i].telephone}</td>`
        s +=`<td> ${product[i].email}</td>`
        s +=`<td><input type="button" value="EDIT" onclick="showedit(${i})"></td>`
        s +=`<td> <input type="button" value="DELETE" onclick="xoa(${i})"></td>`
        s += "<tr>"
    }
    document.getElementById("display").innerHTML = s;
}

function showedit(index) {
    product[index].name = prompt("nhap ten can sua");
    product[index].age = prompt("nhap tuoi can sua");
    product[index].gioitinh = prompt("nhap gioi tinh can sua");
    product[index].telephone = prompt("nhap sdt can sua");
    product[index].email = prompt(" nhap email can sua")
    show();
}

function xoa(index) {
    product.splice(index,1);
    show();
}