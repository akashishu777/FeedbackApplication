// Action
export const increaseAction = { type: 'increase' }

export const decreaseAction = { type: 'decrease' }

export const inputAction = text => ({
  type: 'input',
  payload: text
})
