export function counterMinusAction(answer) {
  return dispatch => {
    dispatch({
      type: 'COUNTER_MINUS',
      answer
    })
  }
}


export function counterPlusAction(answer) {
  return dispatch => {
    dispatch({
      type: 'COUNTER_PLUS',
      answer
    })
  }
}
