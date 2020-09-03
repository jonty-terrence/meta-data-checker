import React from 'react'
import { connect } from 'react-redux'

class TitleCharCount extends React.Component {
  render () {
    return (
      <div>
        {this.props.titleCharacters}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    titleCharacters: state.titleCharacters
  }
}

export default connect(mapStateToProps)(TitleCharCount)
