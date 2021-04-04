// Your code here

//first need grab the element and store in variable dodger.
const dodger = document.getElementById("dodger"); 


//build the moveDodgerLeft() function

        //create variable that uses string replace method to replace
        //CSS string value to 0. returns string
  
        //declare left variable that parses leftNumbers from string to number

        //now update the CSS value of left to be current value of left minus 1

//create an even listener that listens for the keydown, and executes function(e)
//if keydown happens function(e) code runs.
//if the keydown event is a "arrow left" then execute the move function

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  } 

  function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left < 360) {
      dodger.style.left = `${left + 1}px`;
    }
  } 

  
document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }else if(e.key === "ArrowRight"){
      moveDodgerRight();
    }
}); 

