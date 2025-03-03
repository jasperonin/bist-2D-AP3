const selectSeat = document.getElementById("select-seat");
let seats = [];
// function to generate seat number set this to 12 4x3 grid
const generateSeatNumber = () => {
  const randomSeat = document.getElementById("random-seat");
  for (let index = 0; index < 12; index++) {
    const generateOptions = document.createElement("option");
    generateOptions.className = `selected`;
    generateOptions.innerHTML = `${seats.push(index)}`;

    selectSeat.appendChild(generateOptions);
  }
  const gridCells = [];
  for (let i = 0; i < 12; i++) {
    const gridItem = document.createElement("div");
    gridItem.className = "grid-item";
    gridItem.dataset.index = i; // Store the index for reference
    grid.appendChild(gridItem);
    gridCells.push(gridItem);
  }
  // handle changes when selecting an option
  selectSeat.addEventListener("change", (e) => {
    const selected = e.target.value;
    const emptySlot = gridCells.find((cell) => cell.innerHTML === "");
    if (emptySlot) {
      emptySlot.innerHTML = `Seat ${selected}`;
    } else {
      alert("No empty slots left in the grid!");
    }
  });

  randomSeat.addEventListener("click", (e) => {
    e.preventDefault();

    if (seats.length === 0) {
        alert("No more available seats!");
        return;
    }
    const randomizeNum = Math.floor(Math.random() * seats.length);
    const randomSeatNumber = seats[randomizeNum];
    seats.splice(randomizeNum, 1); 


    const emptySlot = gridCells.find(cell => cell.innerHTML === "");
    if (emptySlot) {
        emptySlot.innerHTML = `Seat ${randomSeatNumber}`;
    } else {
        alert("Grid is full!");
    }
});

  const generateGrid = () => {};

  const handleAssign = () => {
    const randomSeat = document.getElementById("random-seat");
    let seats = [];

    for (let index = 0; index < 10; index++) {
      seats.push(index);
    }

  };
};

generateSeatNumber();
