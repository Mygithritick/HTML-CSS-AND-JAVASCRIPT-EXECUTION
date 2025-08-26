localStorage.setItem("id",100);
localStorage.setItem("name","ram");
localStorage.setItem("address","kolkata");

console.log(localStorage.getItem("id"));
console.log(localStorage.getItem("address"));

localStorage.removeItem("address");

console.log(localStorage.length);

localStorage.clear();


sessionStorage.setItem("id",100);
sessionStorage.setItem("name","ram");
sessionStorage.setItem("address","kolkata");

console.log(sessionStorage.getItem("id"));
console.log(sessionStorage.getItem("address"));

sessionStorage.removeItem("address");

console.log(sessionStorage.length);

sessionStorage.clear();
