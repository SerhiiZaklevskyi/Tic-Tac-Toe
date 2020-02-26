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

    changeCellOne: (payload,state) => ({
       ...state,
      cell1: payload
    }),

    changeCellTwo: (payload,state) => ({
       ...state,
      cell2: payload
    }),

    changeCellThree: (payload,state) => ({
       ...state,
      cell3: payload
    }),

    changeCellFour: (payload,state) => ({
      ...state,
      cell4: payload
    }),

    changeCellFive: (payload,state) => ({
      ...state,
      cell5: payload
    }),

    changeCellSix: (payload,state) => ({
      ...state,
      cell6: payload
    }),

    changeCellSeven: (payload,state) => ({
      ...state,
      cell7: payload
    }),

    changeCellEight: (payload,state) => ({
      ...state,
      cell8: payload
    }),

    changeCellNine: (payload,state) => ({
      ...state,
      cell9: payload
    }),

    switchPlayer: (payload, state) => ({
      ...state,
      firstPlayerMove: payload
    }),

    resetGame: (payload,state) => ({
      ...state,
      cell1: '',
      cell2: '',
      cell3: '',
      cell4: '',
      cell5: '',
      cell6: '',
      cell7: '',
      cell8: '',
      cell9: '',
      firstPlayerMove: payload,
      firstPlayerX: payload
    }),

    getCounterOne:(payload,state) => ({
      ...state,
      counterOne: payload
    }),

    getCounterTwo:(payload,state) => ({
      ...state,
      counterTwo: payload
    }),

    restartGame: (payload,state) => ({
      ...state,
      playerOne: "PlayerOne",
      playerTwo: "PlayerTwo",
      cell1: '',
      cell2: '',
      cell3: '',
      cell4: '',
      cell5: '',
      cell6: '',
      cell7: '',
      cell8: '',
      cell9: '',
      firstPlayerMove: true,
      counterOne: 0,
      counterTwo: 0,
    }),
    
    firstPlayerChoseX: (payload, state) => ({
      ...state,
      firstPlayerX: payload
    })
   }
}