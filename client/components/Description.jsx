import React from 'react'
import { connect } from 'react-redux'
import { collectDescription } from '../actions'

function handleChange (e, dispatch) {
  dispatch(collectDescription(e.target.value))
}

class Description extends React.Component {
  render () {
    return (
      <div>
        <p className="description-label">Description</p>
        <input 
          type="text"
          id="description"
          className="description-input"
          placeholder="Start writing your description here"
          onChange={e => handleChange(e, this.props.dispatch)}
        >
        </input>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    description: state.description
  }
}

export default connect(mapStateToProps)(Description)
