const gameBoard = document.querySelector('#gameboard')
const info = document.querySelector('#info')
const startCells = [
    "", "", "", "", "", "", "", "", ""
]
let go = "O"
info.textContent = "Círculo primeiro"

function createBoard(){
    startCells.forEach((_cell, index) =>{
        const cellElement = document.createElement('div')
        cellElement.classList.add('square')
        cellElement.id = index
        cellElement.addEventListener('click', addGo)
        gameBoard.append(cellElement)
    })
}

createBoard()

function addGo(e){
    const goDisplay = document.createElement('div')
    goDisplay.classList.add(go)
    e.target.append(goDisplay)
    go = go === "O" ? "X":"O"
    info.textContent = "Agora é a vez do " + go + " jogar."
    e.target.removeEventListener('click', addGo)
    checkScore()
}

function checkScore(){
    const allSquare = document.querySelectorAll(".square")
    const winnigCombos = [
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [2,4,6]
    ]
    
    winnigCombos.forEach(array => {
        let circleWins = array.every(cell => 
            allSquare[cell].firstChild?.classList.contains('O'))
            
            if(circleWins){
            info.textContent = "Círculo Venceu!"
            allSquare.forEach(square => square.replaceWith(square.cloneNode(true)))
            return
            }
        })

    winnigCombos.forEach(array => {
        let crossWins = array.every(cell => 
            allSquare[cell].firstChild?.classList.contains('X'))
            
            if(crossWins){
            info.textContent = "Xis Venceu!"
            allSquare.forEach(square => square.replaceWith(square.cloneNode(true)))
            return
            }
        })
}
    