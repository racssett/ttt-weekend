/*-------------------------------- Constants --------------------------------*/

const winningCombos = [
    [0, 1, 2], 
    [3, 4, 5], 
    [6, 7, 8], 
    [0, 3, 6], 
    [1, 4, 7], 
    [2, 5, 8], 
    [0, 4, 8], 
    [2, 4, 6]
]


/*---------------------------- Variables (state) ----------------------------*/

let board, turn, winner


/*------------------------ Cached Element References ------------------------*/

const squareEls = document.querySelectorAll('.square')
const messageEl = document.getElementById('message')

const squares = document.querySelector('.board')
// const resetBtn = document.querySelector('#reset-button')

/*----------------------------- Event Listeners -----------------------------*/

squares.addEventListener('click', handleClick)
// resetBtn.addEventListener('click', init)

/*-------------------------------- Functions --------------------------------*/

init()

function init () {
    board = [null, null, null, null, null, null, null, null, null]
    turn = 1
    winner = null
    render ()
}

function render() {
    board.forEach(function(value, idx){
        if (value === 1) {
            squareEls[idx].textContent = 'X'
        } if (value === -1) {
            squareEls[idx].textContent = 'O'
        } else if (value === null) {
            squareEls[idx].textContent = ''
        }
    })
    if (winner === null) {
        messageEl.textContent = `Player ${turn}'s turn`
    } else if (winner === 'T') {
        messageEl.textContent = `It's a tie! Rematch?`
        resetBtn.textContent = 'Rematch'
    } else {
        messageEl.textContent = `Player ${winner} is our winner!`
        resetBtn.textContent = 'Rematch'
    }
}

function handleClick(evt) {
    let sqIdx = parseInt(evt.target.id.replace('sq', ''))
    if (winner !== null){
        return
    } 
    if (board[sqIdx]){
        return
    }
    board[sqIdx] = turn
    turn *= -1
    render()
}




// FROM LECTURE:
// function handleClick(evt) {
//     board[parseInt(evt.target.id.replace('sq', ''))] = turn
//     turn *= -1
// console.log(board)
// }
