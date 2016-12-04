
const createActionCreator = (type) => (payload) => {
  return { type, payload }
}

export const onClickButton = createActionCreator('CLICK_BUTTON')
