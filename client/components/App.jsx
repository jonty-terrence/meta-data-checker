import React from 'react'

import Header from './Header'
import Url from './Url'
import Title from './Title'
import Description from './Description'
import Preview from './Preview'
import PopUp from './PopUp'

class App extends React.Component {
  render () {
    return (
      <div className="main-container">
        <Header />
        <div className="input-container">
          <h1>Enter your meta tags here</h1>
          <Url />
          <Title />
          <Description />
          <PopUp />
        </div>
        <Preview />
      </div>
    )
  }
}

export default App
