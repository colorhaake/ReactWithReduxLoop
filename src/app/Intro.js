import { connect } from 'react-redux'
import IntroContent from './IntroContent'
import { onClickButton } from '../actions'
import { createResponseSelector } from '../selectors'
import './style/index.css';

const mapStateToProps = (state, props) => {
  const getReponse = createResponseSelector()
  return {
    response: getReponse(state, props)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      dispatch(onClickButton())
    }
  }
}

const Intro = connect(
  mapStateToProps,
  mapDispatchToProps
)(IntroContent)

export default Intro
