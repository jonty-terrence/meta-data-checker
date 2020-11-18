import React from 'react'

import Header from './Header'
import Url from './Url'
import Title from './Title'
import Description from './Description'
import Preview from './Preview'
import PopUp from './PopUp'
import LowerSect from './LowerSect'

class App extends React.Component {
  render () {
    return (
      <div className="main-container">
        <PopUp />
        <Header />
        <div className="input-container">
          <h2>Enter your meta tags here</h2>
          <Url />
          <Title />
          <Description />
        </div>
        <Preview />
        <LowerSect />
      </div>
    )
  }
}

export default App
