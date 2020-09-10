import React from 'react'

import Url from './Url'
import Title from './Title'
import Description from './Description'
import Preview from './Preview'

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
      </div>
    )
  }
}

export default App
