import React from 'react'
import './style/index.css';

const IntroContent = ({response, onClick}) => {
  return (
    <div className="App">
      <p className="App-intro">
        Click button will call api, and shows response.
      </p>
      <button type="button" onClick={onClick}>Click Me!</button>
      <p className="App-intro">
        {response}
      </p>
    </div>
  )
}

export default IntroContent
