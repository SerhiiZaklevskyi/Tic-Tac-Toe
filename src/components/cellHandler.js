export const cellHandler = new Map([
    [1, (value) => {
      store.dispatch('changeCellOne', value)
      localStorage.setItem('cellOne', value)
    }]
    [2, (value) => {
      store.dispatch('changeCellTwo', value)
      localStorage.setItem('cellTwo', value)
    }]
    [3, (value) => {
      store.dispatch('changeCellThree', value)
      localStorage.setItem('cellThree', value)
    }],
    [4, (value) => {
      store.dispatch('changeCellFour', value)
      localStorage.setItem('cellFour', value)
    }],
    [5, (value) => {
      store.dispatch('changeCellFive', value)
      localStorage.setItem('cellFive', value)
    }],
    [6, (value) => {
      store.dispatch('changeCellSix', value)
      localStorage.setItem('cellSix', value)
    }],
    [7, (value) => {
      store.dispatch('changeCellSeven', value)
      localStorage.setItem('cellSeven', value)
    }],
    [8, (value) => {
      store.dispatch('changeCellEight', value)
      localStorage.setItem('cellEight', value)
    }],
    [9, (value) => {
      store.dispatch('changeCellNine', value)
      localStorage.setItem('cellNine', value)
    }]
])