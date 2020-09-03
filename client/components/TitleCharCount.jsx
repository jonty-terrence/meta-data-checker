import React from 'react'
import { connect } from 'react-redux'

let characterCount = ''
let textColor = 'defaultColor'

class TitleCharCount extends React.Component {
  render () {
    if (this.props.title) {
      characterCount = this.props.title.length
    } else {
      characterCount = 0
    }

    if (characterCount === 0) {
      textColor = 'defaultColor'
    } else if (characterCount < 50 || characterCount > 60) {
      textColor = 'warningColor'
    } else if (characterCount > 50 || characterCount < 60) {
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
    title: state.title
  }
}

export default connect(mapStateToProps)(TitleCharCount)
