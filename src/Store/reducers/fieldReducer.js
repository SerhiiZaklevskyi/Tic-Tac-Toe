export default function fieldReducer() {
  return {
    changeCell: (payload, state) => ({
      ...state,
      cells: payload
    }),

    switchPlayer: (payload, state) => ({
      ...state,
      firstPlayerMove: payload
    }),

    firstPlayerChoseX: (payload, state) => ({
      ...state,
      firstPlayerX: payload
    })
  };
}
