const handleCellsView = (cell, index) =>
  `<p class="cell" id="${index}">${cell || ""}</p>`;

export default handleCellsView;
