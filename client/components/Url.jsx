import React from 'react'
import { connect } from 'react-redux'
import { collectUrl } from '../actions'

function handleChange (e, dispatch) {
  dispatch(collectUrl(e.target.value))
}

class Url extends React.Component {
  render () {
    return (
      <div>
        <p className="url-label">URL</p>
        <input
          type="text"
          id="url"
          className="url-input"
          placeholder="Write Your URL Here"
          onChange={e => handleChange(e, this.props.dispatch)}
        >
        </input>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    url: state.url
  }
}

export default connect(mapStateToProps)(Url)
