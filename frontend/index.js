const canvas = document.querySelector("#canvas");

const manualRenderGrids = () => {
  canvas.innerHTML = ""; // clear the body

  /* Step 1: rendering manually using the dom and creating rows and cells by hand */
  let row1Element = document.createElement("div");
  let row2Element = document.createElement("div");
  row1Element.className = "row";
  row2Element.className = "row";

  canvas.append(row1Element, row2Element);

  // Row 1 (make 2 divs, grey and black and add them to the row)
  let cell1Element = document.createElement("div")
  let cell2Element = document.createElement("div")
  cell1Element.style.backgroundColor = 'grey';
  cell2Element.style.backgroundColor = 'black';
  row1Element.append(cell1Element, cell2Element);

  // Row 2 (make 2 divs, black then grey and add them to the row)
  let cell3Element = document.createElement("div")
  let cell4Element = document.createElement("div")
  cell3Element.style.backgroundColor = 'black';
  cell4Element.style.backgroundColor = 'grey';
  row2Element.append(cell3Element, cell4Element);


  /* Step 2: Use a matrix, a colors array, and iteration to generate rows and cells */
  let checkerMatrix = [
    [1, 0, 1, 0],
    [0, 1, 0, 1],
    [1, 0, 1, 0],
    [0, 1, 0, 1],
  ]
  let checkerColors = ['red', 'blue']

  for (let r = 0; r < checkerMatrix.length; r++) {
    // for each row in the matrix, create a row div in the canvas
    let newRowDiv = document.createElement("div");

    // for each cell value in the current row, AKA checkerMatrix[r], make a cell element with a color according to the checkerColors array
    for (let c = 0; c < checkerMatrix[r].length; c++) {
      // To access each cell value, use DOUBLE bracket notation <-------------------------------------
      const cellValue = checkerMatrix[r][c];

      let cellDiv = document.createElement("div")
      cellDiv.style.backgroundColor = checkerColors[cellValue];
      newRowDiv.append(cellDiv);
    }

    newRowDiv.className = 'row';
    canvas.append(newRowDiv);
  }
}


/* Step 3: Write a function to draw ANY matrix with colors */
const draw = (matrix, colors) => {
  canvas.innerHTML = ""; // clear the body

  for (let r = 0; r < matrix.length; r++) {
    // for each row in the matrix, create a row div in the canvas
    let newRowDiv = document.createElement("div");

    // for each cell value in the current row (aka matrix[r]), make a cell element with a color according to the colors array
    for (let c = 0; c < matrix[r].length; c++) {
      // To access each cell value, use DOUBLE bracket notation <-------------------------------------
      const cellValue = matrix[r][c];

      let cellDiv = document.createElement("div")
      cellDiv.style.backgroundColor = colors[cellValue];
      newRowDiv.append(cellDiv);
    }

    newRowDiv.className = 'row';
    canvas.append(newRowDiv);
  }
}

/* Step 4: Make some matrices! */
let apple = {
  matrix: [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 0, 1, 1, 1, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ],
  colors: ['white', 'red']
}


let pacman = {
  matrix: [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 2, 2, 2, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0],
    [0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0],
    [0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 0],
    [0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 0, 0],
    [0, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 0, 0, 0, 0],
    [0, 1, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 0, 0],
    [0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0],
    [0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0],
    [0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 2, 2, 2, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ],
  colors: ['white', 'black', 'yellow']
}

let mario = {
  matrix: [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 2, 2, 2, 3, 3, 3, 4, 3, 0, 0, 0, 0],
    [0, 0, 2, 3, 2, 3, 3, 3, 3, 4, 3, 3, 3, 0, 0],
    [0, 0, 2, 3, 2, 2, 3, 3, 3, 3, 4, 3, 3, 3, 0],
    [0, 0, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 0, 0],
    [0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0],
    [0, 0, 0, 1, 1, 5, 1, 1, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 5, 1, 1, 5, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 1, 1, 5, 5, 5, 5, 1, 1, 1, 1, 0, 0],
    [0, 3, 3, 1, 5, 6, 5, 5, 6, 5, 1, 3, 3, 0, 0],
    [0, 3, 3, 3, 5, 5, 5, 5, 5, 5, 3, 3, 3, 0, 0],
    [0, 3, 3, 5, 5, 5, 5, 5, 5, 5, 5, 3, 3, 0, 0],
    [0, 0, 0, 5, 5, 5, 0, 0, 5, 5, 5, 0, 0, 0, 0],
    [0, 0, 2, 2, 2, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0],
    [0, 2, 2, 2, 2, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ],
  colors: ['white', 'red', 'SaddleBrown', '#fabe8f', 'black', 'blue', 'yellow']
}


// Start by showing the grids

manualRenderGrids();

// Add Event Listeners
document.querySelector('#grids.btn').addEventListener('click', () => {
  manualRenderGrids();
})
document.querySelector('#apple.btn').addEventListener('click', () => {
  draw(apple.matrix, apple.colors);
})
document.querySelector('#pacman.btn').addEventListener('click', () => {
  draw(pacman.matrix, pacman.colors);
})
document.querySelector('#mario.btn').addEventListener('click', () => {
  draw(mario.matrix, mario.colors);
})