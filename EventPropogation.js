let a=document.querySelector("#a");
let b=document.querySelector("#b");
let c=document.querySelector("#c");

a.addEventListener("click",()=>{
    console.log("grand parent");
    
},true);
b.addEventListener("click",(e)=>
{
    console.log("parent");
    e.stopPropagation();

    
},true);
c.addEventListener("click",()=>
{
    console.log("child");
    
},true);

