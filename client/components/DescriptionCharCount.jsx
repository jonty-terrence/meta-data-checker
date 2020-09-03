import React from 'react'
import { connect } from 'react-redux'

let characterCount = ''
let textColor = 'defaultColor'

class DescriptionCharCount extends React.Component {
  render () {
    if (this.props.description) {
      characterCount = this.props.description.length
    } else {
      characterCount = 0
    }

    if (characterCount === 0) {
      textColor = 'defaultColor'
    } else if (characterCount < 120 || characterCount > 158) {
      textColor = 'warningColor'
    } else {
      textColor = 'optimalColor'
    }
    return (
      <div>
        <p className={textColor}>{characterCount}</p>
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
