
let product = [[],[]];
let i=0;
let j=0;
function add() {
     let neww = document.getElementById("nhap").value
     let newwanh = document.getElementById("nanh").value
     product[i][j] = neww;
     j++
    product[i][j] = newwanh;
     i++
    j--
    show();
    document.getElementById("nhap").value = ""
    console.log(product);
}
function show() {
    let a = ""
    for (i=0; i < product.length; i++)
    {

        for (j=0; j<product[i].length; j++){
            a+= "<tr>"
            a+=`<td> ${[i]}</td>`
            a+=`<td> ${product[i][j]}</td>`
            a+=`<td><img src="${product[i][j]}"></td>`
            a+=`<td><input type="button" value="Edit" onclick="showedit(${i})" > </td>`
            a+=`<td><input type="button" value="Delete" onclick="xoa(${i})"> </td>`
            a+="</tr>"
        }
    }
    document.getElementById("display").innerHTML = a;
}
function xoa(index)
{
  product.splice(index,1);
  x--
  show()
}

let v= -1;
function showedit(index)
{
  document.getElementById("nhap").value = product[index];
  v = index;
}
function saveedit()
{
 product[v] = document.getElementById("nhap").value
 v=-1;
 show()
}

