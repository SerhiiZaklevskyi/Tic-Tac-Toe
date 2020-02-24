export default function createReducers() {
    return {
        addPlayerOne: (payload, state) => ({
            ...state,
            playerOne: payload
    }),
    addPlayerTwo: (payload, state) => ({
        ...state,
        playerTwo: payload
})
 }
}