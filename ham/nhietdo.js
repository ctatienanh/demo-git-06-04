function doinhietdo() {
     let dof = document.getElementById("f").value;
     let doc = (dof - 32)/1.8 ;
     document.getElementById("kq").innerHTML = doc;
}