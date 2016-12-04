const buttons = (state = [], action) => {
  switch (action.type) {
    case 'CLICK_BUTTON':
      return {...state, response: 'abcdefg'}
    default:
      return state
  }
}

export default buttons
