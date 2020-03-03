export default function resetReducer() {
  return {
    resetGame: (payload, state) => ({
      ...state,
      firstPlayerMove: payload.value,
      firstPlayerX: payload.value,
      cells: payload.cells
    }),

    restartGame: (payload, state) => ({
      ...state,
      playerOne: "PlayerOne",
      playerTwo: "PlayerTwo",
      cells: payload,
      firstPlayerMove: true,
      counterOne: 0,
      counterTwo: 0
    })
  };
}
