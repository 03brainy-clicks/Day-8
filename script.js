let count = document.querySelector("#counter");
let enteries = document.querySelector("#enteries");
let counter = 0;

// function for increment
function increment() {
  counter = counter + 1;
  count.innerText = counter;
}
// function for increment

// function to save enteries
function save() {
  let cstring = enteries.innerText + " " + counter + " - ";
  enteries.innerText = cstring;
  counter = 0;
  count.innerText = counter;
}
// function to save enteries
