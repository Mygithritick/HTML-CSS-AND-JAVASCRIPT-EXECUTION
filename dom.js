let head = document.getElementById("head");
console.log(head);
head.style.color = "hotpink";

let list = document.getElementsByClassName("list-item");
console.log(list);

// Convert HTMLCollection → Array
let list1 = Array.from(list);
list1.map((x) => {
    x.style.color = "orange";
});

list[0].style.color = "blue";
list[1].style.co
lor = "pink";
list[2].style.color = "red";
list[3].style.color = "green";

// Looping with for
for (let i = 0; i < list.length; i++) {
    list[i].style.backgroundColor = "yellow";
}

// By tag name
let tag = document.getElementsByTagName("li");
let tagArr = Array.from(tag);
tagArr.forEach((x) => (x.style.color = "tomato"));

// querySelector
let q = document.querySelector("#head");
q.style.color = "red";

// querySelectorAll (NodeList supports forEach)
let qs = document.querySelectorAll(".list-item");
qs.forEach((x) => {
    x.style.backgroundColor = "aqua";
});

//createElement
let li=document.createElement("li");
console.log(li);
let ul=document.querySelector("ul");
console.log(ul);
ul.append(li);

// li.textContent="hii baby";
// li.innerText="hiii";
li.innerHTML=`<h1>Ruby</h1>`;
li.style.listStyleType="none";

