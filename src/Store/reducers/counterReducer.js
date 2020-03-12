export default function counterReducer() {
  return {
    getCounterOne: (payload, state) => ({
      ...state,
      counterOne: payload
    }),

    getCounterTwo: (payload, state) => ({
      ...state,
      counterTwo: payload
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
