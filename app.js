/*-------------------------------- Constants --------------------------------*/

const calculator = document.querySelector('#calculator')
const numButton = document.querySelectorAll(`.number`);
const operateButton = document.querySelectorAll(`.operator`);
const equalsButton = document.querySelector(`.equals`);
const display = document.querySelector(`.display`)



/*-------------------------------- Variables --------------------------------*/



/*------------------------ Cached Element References ------------------------*/



/*-------------------------------- Functions --------------------------------*/

const appendNumOp = () => {
    display.innerText += event.target.innerText
};

const clearDisplay = () => {
    display.innerText = ''

};

const calculate = () => {
    display.innerText = eval(display.innerText); 
};
// Evalute function simplifying the backend math for calculator
/*----------------------------- Event Listeners -----------------------------*/
numButton.forEach((button) => {
button.addEventListener('click', (event) => {
    appendNumOp()
    // console.log(`this is a Num`);
    });
});

operateButton.forEach((button) => {
button.addEventListener('click', (event) => {

    if (event.target.innerText === 'C'){
        clearDisplay()
    } else {
        appendNumOp()
    }
    // console.log(`This is an operation`)
    });
});

equalsButton.addEventListener('click', () => {
    calculate()
    // console.log(`This equals something`)
});


//notes to self, querySelectorALL puts all class tagets into an array.




