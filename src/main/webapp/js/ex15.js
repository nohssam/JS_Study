/*
function showDetail(){
  document.querySelector("#desc").style.display="block";
  document.querySelector("#open").style.display="none";	
}

function hideDetail(){
  document.querySelector("#desc").style.display="none";
  document.querySelector("#open").style.display="block";	
}
*/
const open1 = document.querySelector("#open");
const close1 = document.querySelector("#close");

open1.addEventListener("click",()=>{
  document.querySelector("#desc").style.display="block";
  document.querySelector("#open").style.display="none";	
});


close1.addEventListener("click",()=>{
  document.querySelector("#desc").style.display="none";
  document.querySelector("#open").style.display="block";	
});

const plus = document.querySelector("#btnPlus");
plus.addEventListener("click",()=>{
   // document.querySelector("#res").innerHTML++ ;
   
    let k = document.querySelector("#res").innerHTML;
    k++;
    document.querySelector("#res").innerHTML = k  ;
});

const minus = document.querySelector("#btnMinus");
minus.addEventListener("click",()=>{
   document.querySelector("#res").innerHTML-- ;
  
});











