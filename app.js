/*-------------------------------- Constants --------------------------------*/

// const calculator = document.querySelector('#calculator') //<<--- pointless code
const numButton = document.querySelectorAll(`.number`); //<<-- selects the all buttons with the .number class and puts them in an array
const operateButton = document.querySelectorAll(`.operator`); //--selectes the all buttons with the .operators class and puts them in an array
const equalsButton = document.querySelector(`.equals`); //<<--selects the button witht the .equals class
const display = document.querySelector(`.display`) //<<-- selects the div with the .display class



/*-------------------------------- Variables --------------------------------*/



/*------------------------ Cached Element References ------------------------*/



/*-------------------------------- Functions --------------------------------*/

const appendNumOp = () => {         //<<-- method to put the inner text value of the buttons in the display div
    display.innerText += event.target.innerText
};

const clearDisplay = () => {        //<<-- method clears the display div
    display.innerText = ''

};

const calculate = () => {       //<<-- methods calculates the total of the string in the display div
    display.innerText = eval(display.innerText); //<<--- learned about the amazing eval fuction on my own while doing some research refrence: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval
};

/*----------------------------- Event Listeners -----------------------------*/
numButton.forEach((button) => {
button.addEventListener('click', (event) => { //<<--- event listener to cycle through .number button array
    appendNumOp()   // method called to display the input
    // console.log(`this is a Num`);
    });
});

operateButton.forEach((button) => { //<<--event listener to cycle through the .operators array
button.addEventListener('click', (event) => {

    if (event.target.innerText === 'C'){  //<<-- if condition to target the 'C' operator button only
        clearDisplay() //<<-- method to clear display called
    } else {
        appendNumOp() //<<-- else method to display operators is called
    }
    // console.log(`This is an operation`)
    });
});

equalsButton.addEventListener('click', () => { //<<-- event listener used on the equals button
    calculate() //<<-- calculation method called to do the math inside the display div.
    // console.log(`This equals something`)
});


//notes to self, querySelectorALL puts all class tagets into an array.




