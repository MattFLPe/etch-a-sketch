let board = document.querySelector('.board')

//Make 16 cols/rows, and each col/row will have a width of 1/16 of the container
board.style.gridTemplateColumns = 'repeat(16, 1fr)'
board.style.gridTemplateRows = 'repeat(16, 1fr)'

//for loop to make all of the divs;
for(let i = 0; i < 256; i++){
   let square = document.createElement('div')
    square.style.backgroundColor = 'blue'
    board.insertAdjacentElement("beforeend", square)
}
