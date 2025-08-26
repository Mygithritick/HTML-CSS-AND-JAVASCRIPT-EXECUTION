// let java=document.querySelector(".list-item:nth-child(1)");
// console.log(java);
// java.addEventListener("click",()=>
// {
//     java.style.backgroundColor="red";
// })
// let python=document.querySelector(".list-item:nth-child(2)");
// python.addEventListener("click",()=>
// {
//     python.style.backgroundColor="red";
// })
// let react=document.querySelector(".list-item:nth-child(3)");
// react.addEventListener("click",()=>
// {
//     react.style.backgroundColor="red";
// })
// let li=document.createElement("li");
// let ul=document.querySelector("ul");
// ul.append(li);

// li.innerText="web";
// li.style.listStyleType="none";
// li.setAttribute("class","list-item");

//Event delegation
let ul=document.querySelector("ul");
ul.addEventListener("click",(e)=>{
    if(e.target.matches("li")){
        e.target.style.backgroundColor="red";
    }
})
let li=document.createElement("li");
ul.appendChild("li");
li.innerText="web";
li.style.listStyleType="none";
li.setAttribute("class","list-item");