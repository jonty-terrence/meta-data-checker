import React from 'react'
import { connect } from 'react-redux'

let characterCount = ''

class TitleCharCount extends React.Component {
  render () {
      if (this.props.title) {
          characterCount = this.props.title.length
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
    title: state.title,
    titleChar: state.titleChar
  }
}

export default connect(mapStateToProps)(TitleCharCount)
