const remove = value => localStorage.removeItem(value);

function clearCells() {
  remove("cellOne");
  remove("cellTwo");
  remove("cellThree");
  remove("cellFour");
  remove("cellFive");
  remove("cellSix");
  remove("cellSeven");
  remove("cellEight");
  remove("cellNine");
}

export default clearCells;
