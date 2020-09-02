import React from 'react'

import Title from './Title'
import Description from './Description'
import Preview from './Preview'

class App extends React.Component {
  render () {
    return (
      <div>
        <Title />
        <Description />
        <Preview />
      </div>
    )
  }
}

export default App
