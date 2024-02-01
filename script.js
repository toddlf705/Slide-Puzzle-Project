let rows = 3
let columns = 3

let currTile
let otherTile

let turns = 0

const startOver = document.querySelector("#refresh")

let imgOrder = ["8", "2", "5", "4", "1", "3", "7", "9", "6"]


window.onload = playgame

function playgame () {
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {

            let tile = document.createElement("img")
            tile.id = r.toString() + "-" + c.toString()
            tile.src = imgOrder.shift() + ".png"

            document.getElementById("board").appendChild(tile)

            tile.addEventListener("dragstart", dragStart)
            tile.addEventListener("dragover", dragOver)
            tile.addEventListener("dragenter", dragEnter)
            tile.addEventListener("dragleave", dragLeave)
            tile.addEventListener("drop", dragDrop)
            tile.addEventListener("dragend", dragEnd)
        
        } 
    }
}

function dragStart() {
    currTile = this
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
}

function dragLeave () {

}

function dragDrop() {
    otherTile = this
}

function dragEnd() { 
    if(!otherTile.src.includes("6.png")){
        return
    }

    let currgrid = currTile.id.split("-")
    let r = parseInt(currgrid[0])
    let c = parseInt(currgrid[1])

    let othergrid = otherTile.id.split("-")
    let r2 = parseInt(othergrid[0])
    let c2 = parseInt(othergrid[1])

    let moveLeft = r == r2 && c2 == c -1
    let moveRight = r == r2 && c2 == c+1
    let moveUp = c == c2 && r2 == r-1
    let moveDown = c == c2 & r2 == r+1
    let Adjacent = moveLeft || moveRight || moveUp || moveDown

    if (Adjacent){
    let currImg = currTile.src
    let otherImg = otherTile.src

    currTile.src = otherImg
    otherTile.src = currImg

    turns += 1
    document.querySelector("#turns").innerText = turns
    }
}
