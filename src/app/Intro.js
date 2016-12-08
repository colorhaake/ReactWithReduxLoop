import { connect } from 'react-redux'
import IntroContent from './IntroContent'
import { onClickButton } from '../actions'
import './style/index.css';

const mapStateToProps = (state) => {
  // TODO: use reselect library to reduce duplicated state updated
  // https://github.com/reactjs/reselect
  return {
    response: state && state.response
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
