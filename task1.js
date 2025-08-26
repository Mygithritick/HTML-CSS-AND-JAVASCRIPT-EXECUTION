let h1=document.querySelector("h1");
let inc=document.querySelector("#inc");
let res=document.querySelector("#res");
let dec=document.querySelector("#decr");
let counter=0;
inc.addEventListener("click",()=>
{
    counter++;
    h1.innerText=counter;
})
function decrement()
{
    counter--;
    h1.innerText=counter;
}
function reset()
{
    counter=0;
    h1.innerText=counter;
}
dec.addEventListener("click",decrement)
res.addEventListener("click",reset);