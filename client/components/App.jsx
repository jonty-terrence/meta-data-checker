import React from 'react'

import Header from './Header'
import Url from './Url'
import Title from './Title'
import Description from './Description'
import Preview from './Preview'
import TitleCharCount from './TitleCharCount'
import DescriptionCharCount from './DescriptionCharCount'
import PopUp from './PopUp'

class App extends React.Component {
  render () {
    return (
      <div className="main-container">
        <Header />
        <div className="body-container">
          <div className="input-container">
            <h1>Enter your meta tags here</h1>
            <Url />
            <Title />
            <Description />
            <PopUp />
          </div>
          <Preview />
          <div className="count-container">
            <TitleCharCount />
            <DescriptionCharCount />
          </div>
        </div>
      </div>
    )
  }
}

export default App
