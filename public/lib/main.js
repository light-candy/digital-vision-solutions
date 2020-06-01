'use strict';

document.addEventListener('DOMContentLoaded', function () {
  console.log('Hello Bulma!');
});
function myFunction() {
  var x = document.getElementById("menu-mob");
  var y = document.getElementById("hamburg");
  y.classList.toggle('is-active');
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
};

function myFunctionTwo() {
  var x = document.getElementById("menu-mob");
  x.style.display = "none";
  var y = document.getElementById("hamburg");
  y.classList.remove('is-active');
};