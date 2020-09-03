import React from 'react'
import { connect } from 'react-redux'

let characterCount = ''

class DescriptionCharCount extends React.Component {
  render () {
    if (this.props.description) {
      characterCount = this.props.description.length
    } else {
      characterCount = 0
    }
    return (
      <div>
        <p>{characterCount}</p>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    description: state.description
  }
}

export default connect(mapStateToProps)(DescriptionCharCount)
