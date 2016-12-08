import { loop, Effects } from 'redux-loop'
import { callApiSuccess } from '../actions'

export const handleClickButton = (state = [], action) => {
  return loop(
    {...state, response: 'abcdefg'},
    Effects.constant(callApiSuccess('cdefg'))
  )
}
