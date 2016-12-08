import { loop, Effects } from 'redux-loop'
import { handleClickButton } from './buttons'
import { handleCallApiSuccess } from './api'

const update = {
  'CLICK_BUTTON': handleClickButton,
  'CALL_API_SUCCESS': handleCallApiSuccess,
}

const main = (state = [], action) => {
  const reducer = update[action.type]
  if (!!reducer) {
    return reducer(state, action)
  }

  console.warn(`Can not find reducer for action: ${action.type}`)
  return loop(
    state,
    Effects.none()
  )
}

export default main
