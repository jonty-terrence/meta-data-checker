import React from 'react'
import { connect } from 'react-redux'

const start = 'Be sure to keep your titles within 50-60 characters.'
const warning = 'Be sure to keep your titles within 50-60 characters. Currently it is:'
const perfect = 'Great work, your title is the ideal length!'

let characterCount = ''
let textColor = 'defaultColor'
let text = start

class TitleCharCount extends React.Component {
  render () {
    if (this.props.title) {
      characterCount = this.props.title.length
    } else {
      characterCount = 0
    }

    if (characterCount === 0) {
      textColor = 'defaultColor'
      text = start
    } else if (characterCount < 50 || characterCount > 60) {
      textColor = 'warningColor'
      text = warning
    } else if (characterCount > 50 || characterCount < 60) {
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
    title: state.title
  }
}

export default connect(mapStateToProps)(TitleCharCount)
