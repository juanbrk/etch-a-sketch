const grid = document.querySelector('#container');
const clearBtn = document.querySelector('#clear')
let divs = document.getElementsByClassName('box');

// h & w of container
const WIDTH = 450;
const HEIGHT= 450;

populateContainer();
addSketchability();
clearBtn.addEventListener('click', () => clearBoxes());

/**
 * Sketchabilize every box
 * 
 * Source:
  * https://www.30secondsofcode.org/blog/s/javascript-arrow-function-event-listeners
  */
 function addSketchability(){
   for (var i = 0; i < divs.length; i++) {
     divs[i].addEventListener('mouseover', element => element.currentTarget.classList.toggle('sketched'));
     console.log(`added + ${i}`);
   }
}

function clearBoxes(){
  for (var i = 0; i < divs.length; i++) {
    divs[i].classList.remove('sketched');
  }
  
  let width = Number(window.prompt("Specify the width for the new canvas (10-100): ")); 
  let greaterThanAllowed = width > 100;

  if (greaterThanAllowed){
    alert("Please select a number between 10-100");
  } else {
    // set up new canvas 
    let amountOfNewBoxes = width * width;
    removeExistentBoxes();
    // populate grid with the inputed value
    populateContainer(amountOfNewBoxes);
    divs = document.getElementsByClassName('box');
    //change boxes length size
    resizeBoxes(width);
    addSketchability();

  }
}

//Clear all existent divs with id of box
function removeExistentBoxes(){
  let container = document.getElementById('container');
  while ( container.firstChild ) container.removeChild( container.firstChild );
}

// creates a n*n grid of boxes 
function populateContainer(n = undefined){
  
  if (n == undefined){
    //Initial population of container with 256 boxes
    n = 256
  }

  for (let i = 0; i < n; i++){
    const divvie = document.createElement('div');
    divvie.classList.add('box');
    grid.appendChild(divvie); 
  }
}

// Given the #of boxes, resize #box i/o to cover the entire container (450*450px)
function resizeBoxes(numberOfBoxes){
  let boxSizeLength = WIDTH / numberOfBoxes;
  for (var i = 0; i < divs.length; i++) {
    divs[i].style.width = boxSizeLength;
    divs[i].style.height = boxSizeLength;
  }
}

function sketchBox(){
  
}

