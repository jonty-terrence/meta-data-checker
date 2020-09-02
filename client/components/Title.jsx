import React from 'react'
import { connect } from 'react-redux'

class App extends React.Component {
  render () {
    return (
      <div>
        <input 
        type="text"
        id="title"
        className="title-input"
        placeholder="Meta Data Checker | Write Your Title Here"
        >
        </input>
      </div>
    )
  }
}

export default App