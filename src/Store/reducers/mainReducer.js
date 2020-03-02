export default function createReducers() {
  return {
    addPlayerOne: (payload, state) => ({
      ...state,
      playerOne: payload
    }),

    addPlayerTwo: (payload, state) => ({
      ...state,
      playerTwo: payload
    }),

    changeCell: (payload, state) => ({
      ...state,
      cells: payload
    }),

    switchPlayer: (payload, state) => ({
      ...state,
      firstPlayerMove: payload
    }),

    resetGame: (payload, state) => ({
      ...state,
      firstPlayerMove: payload.value,
      firstPlayerX: payload.value,
      cells: payload.cells
    }),

    getCounterOne: (payload, state) => ({
      ...state,
      counterOne: payload
    }),

    getCounterTwo: (payload, state) => ({
      ...state,
      counterTwo: payload
    }),

    restartGame: (payload, state) => ({
      ...state,
      playerOne: "PlayerOne",
      playerTwo: "PlayerTwo",
      cells: payload,
      firstPlayerMove: true,
      counterOne: 0,
      counterTwo: 0
    }),

    firstPlayerChoseX: (payload, state) => ({
      ...state,
      firstPlayerX: payload
    }),
    changeCounterOne: (payload, state) => ({
      ...state,
      counterOne: state.counterOne + payload
    }),
    changeCounterTwo: (payload, state) => ({
      ...state,
      counterTwo: state.counterTwo + payload
    })
  };
}
