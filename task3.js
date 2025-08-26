let h1=document.querySelector("h1");
let name1=document.querySelector("#name");

name1.addEventListener("input",(e)=>
{
    h1.innerText=e.target.value;
    
});