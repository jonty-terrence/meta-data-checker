import React from 'react'
import { connect } from 'react-redux'

const start = 'Be sure to keep your descriptions within 120-158 characters.'
const warning = 'Be sure to keep your descriptions within 120-158 characters. Currently it is:'
const perfect = 'Great work, your description is the ideal length!'

let characterCount = ''
let textColor = 'defaultColor'
let text = ''

class DescriptionCharCount extends React.Component {
  render () {
    if (this.props.description) {
      characterCount = this.props.description.length
    } else {
      characterCount = 0
    }

    if (characterCount === 0) {
      textColor = 'defaultColor'
      text = start
    } else if (characterCount < 120 || characterCount > 158) {
      textColor = 'warningColor'
      text = warning
    } else {
      textColor = 'optimalColor'
      text = perfect
    }
    return (
      <div>
        <p className={textColor}>{text} {characterCount} characters</p>
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
