export default function playersReducer() {
  return {
    addPlayerOne: (payload, state) => ({
      ...state,
      playerOne: payload
    }),

    addPlayerTwo: (payload, state) => ({
      ...state,
      playerTwo: payload
    })
  };
}
