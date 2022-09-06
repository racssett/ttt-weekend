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

const squareEls = document.querySelectorAll('.board > div')
const messageEl = document.getElementById('message')

const squares = document.querySelector('.board')
const resetBtn = document.querySelector('#reset-button')
const img = document.getElementById('photo')

/*----------------------------- Event Listeners -----------------------------*/

squares.addEventListener('click', handleClick)
resetBtn.addEventListener('click', init)

/*-------------------------------- Functions --------------------------------*/

init()

function init () {
    board = [null, null, null, null, null, null, null, null, null]
    turn = 1
    winner = null
    resetBtn.style.display = 'none'
    img.style.display = 'none'
    resetBtn.textContent = 'Reset'
    render ()
}



function handleClick(evt) {
    let sqIdx = parseInt(evt.target.id.replace('sq', ''))
    console.log(sqIdx)
    if (winner){
        return
    } 
    if (board[sqIdx]){
        return
    }
    if (isNaN(sqIdx)){
        return
    }
    board[sqIdx] = turn
    turn *= -1
    resetBtn.style.display = 'block'
    winner = getWinner()
    render()
}

function getWinner() {
    for(let i = 0; i < winningCombos.length; i++) {
    if (board[winningCombos[i][0]] + board[winningCombos[i][1]] + board[winningCombos[i][2]] === 3) {
        return 1
    } else if (board[winningCombos[i][0]] + board[winningCombos[i][1]] + board[winningCombos[i][2]] === -3) {
        return -1
    }
    }
    if (board.includes(null) === false) {
        return 'T'
    }
    return null
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
       if(turn === 1) {
        messageEl.textContent = "Player X's turn"
    } else {
        messageEl.textContent = "Player O's turn"
    } 
    } else if (winner === 'T') {
        messageEl.textContent = `It's a tie! Rematch?`
        resetBtn.textContent = 'Rematch'
    } else {
        messageEl.textContent = `Player ${winner} is our winner!`
        resetBtn.textContent = 'Rematch'
        img.style.display = 'block'
    }
}
