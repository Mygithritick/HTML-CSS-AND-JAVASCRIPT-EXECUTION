let div=document.querySelector("#a");
let btn=document.querySelector("#btn");
btn.addEventListener("click",()=>{
    let color="#";
    for(let i=0;i<6;i++)
    {
        color=color+parseInt(Math.random()*10);
    }
    div.style.backgroundColor=color;
})