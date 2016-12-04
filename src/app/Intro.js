import React from 'react'
import { connect } from 'react-redux'
import IntroContent from './IntroContent'
import { onClickButton } from '../actions'
import './style/index.css';

const mapStateToProps = (state) => {
  return {
    response: state.buttons && state.buttons.response
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
