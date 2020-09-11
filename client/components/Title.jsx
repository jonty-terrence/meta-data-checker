import React from 'react'
import { connect } from 'react-redux'
import { collectTitle } from '../actions'

function handleChange (e, dispatch) {
  dispatch(collectTitle(e.target.value))
}

class Title extends React.Component {
  render () {
    return (
      <div>
        <p className="title-label">Title</p>
        <input
          type="text"
          id="title"
          className="title-input"
          placeholder="Meta Data Checker | Write Your Title Here"
          onChange={e => handleChange(e, this.props.dispatch)}
        >
        </input>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    title: state.title
  }
}

export default connect(mapStateToProps)(Title)
