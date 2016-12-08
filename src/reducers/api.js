import { loop, Effects } from 'redux-loop'

export const handleCallApiSuccess = (state = [], action) => {
  return loop(
    {...state, response: 'cdefg'},
    Effects.none()
  )
}
