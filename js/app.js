/*-------------------------------- Constants --------------------------------*/

//* const for reset button - hide him!

//* console.log()

/*---------------------------- Variables (state) ----------------------------*/

let board, turn, winner


/*------------------------ Cached Element References ------------------------*/

const squareEls = document.querySelector('section')
console.log(squareEls);

const messageEl = document.querySelector('#message')
console.log(messageEl);

/*----------------------------- Event Listeners -----------------------------*/

//* event listener for clicking the reset button

//* event listener for clicking each square - parseInt(evt.target.id.replace('sq', '')) bubble!

//* console.log()

/*-------------------------------- Functions --------------------------------*/

//* init function - what happens when the game first loads? 

function init () {
    board = [null, null, null, null, null, null, null, null, null]
    turn = 1
    winner = null
    messageEl.textContent = `Start the game`
    render (init)
}

console.log(init)


function render() {
    board.forEach(function(element, idx){
        if (turn === 1) {
            messageEl.textContent = `X's turn!`
        } else {
            messageEl.textContent = `O's turn!`
        }
    })
    if (winner = null) {
        messageEl.textContent = `Player ${turn}'s turn`
    } else if (winner === 'T') {
        messageEl.textContent = `It's a tie! Rematch?`
    } else {
        messageEl.textContent = `Player ${winner} is our winner!`
    }
}


// FROM LECTURE:
// function handleClick(evt) {
//     board[parseInt(evt.target.id.replace('sq', ''))] = turn
//     turn *= -1
// console.log(board)
// }

//* getWinner

//* console.log()


//* hide and unhide your reset button

//* square clicked?

//* three in a row? 

//* turn
//* player O will be -1, player X will be 1. Multiply turn by -1 and it will flip back and forth

//* winner -- null

//* console.log()