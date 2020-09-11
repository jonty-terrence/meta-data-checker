import React from 'react'

import Url from './Url'
import Title from './Title'
import Description from './Description'
import Preview from './Preview'
import TitleCharCount from './TitleCharCount'
import DescriptionCharCount from './DescriptionCharCount'

class App extends React.Component {
  render () {
    return (
      <div className="body-container">
        <div className="input-container">
          <Url />
          <Title />
          <Description />
        </div>
        <Preview />
        <div className="count-container">
          <TitleCharCount />
          <DescriptionCharCount />
        </div>
      </div>
    )
  }
}

export default App
