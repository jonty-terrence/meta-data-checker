import React from 'react'
import { connect } from 'react-redux'
import { collectDescription } from '../actions'

function handleChange (e, dispatch) {
  dispatch(collectDescription(e.target.value))
}

class Description extends React.Component {
  render () {
    return (
      <div className="description-input">
        <p className="description-label">Description</p>
        <input
          type="text"
          id="description"
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
