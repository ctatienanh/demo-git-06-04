let doi_dau = false;
let str_kq= '';
let phim_moi='';

function clickButton(obj){
    let ketQua = document.getElementById("result_input");
    let type = obj.innerHTML;
    str_kq = ketQua.value;
    if( str_kq=='' && phim_moi==''){
        str_kq = ketQua.value;
    }
    if(str_kq=='0'){
        str_kq='';
    }

    if(
        type == '1' ||
        type == '2' ||
        type == '3' ||
        type == '4' ||
        type == '5' ||
        type == '6' ||
        type == '7' ||
        type == '8' ||
        type == '9' ||
        type == '+/-' ||
        type =="."
    ){
        if(type=='+/-'){
            if(doi_dau){
                doi_dau=false;
                phim_moi =phim_moi.substring(1);
            }
            else{
                doi_dau = true;
                phim_moi ='-'+phim_moi;
            }
        }
        else{
            phim_moi +=type;

        }
        ketQua.value = phim_moi;

    }
}