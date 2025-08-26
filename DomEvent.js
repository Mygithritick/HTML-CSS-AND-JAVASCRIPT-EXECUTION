// ==============================
// DOM Event Demonstrations
// ==============================

// -------- Div B : Double Click Event --------

// Get button #btn inside div#b
const btn = document.getElementById("btn");

// Double-click event -> changes button's own background color
btn.addEventListener("dblclick", () => {
  btn.style.backgroundColor = "red";
});


// -------- Div C : Mouse Events --------

// Get div#c and button#btn1
const c = document.getElementById("c");
const btn1 = document.getElementById("btn1");

// Mouse over event -> changes parent div#c background to blue
btn1.addEventListener("mouseover", () => {
  c.style.backgroundColor = "blue";
});

// Mouse out event -> changes parent div#c background to aqua
btn1.addEventListener("mouseout", () => {
  c.style.backgroundColor = "aqua";
});


// -------- Extra Example : Keyboard Event --------

// Listen for any key press on the whole document
document.addEventListener("keydown", (event) => {
  console.log("Key pressed:", event.key);

  // Example effect: change body background if "Enter" is pressed
  if (event.key === "Enter") {
    document.body.style.backgroundColor = "lightgreen";
    alert("You pressed Enter!");
  }
});
