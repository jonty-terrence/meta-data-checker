import React from 'react'
import { connect } from 'react-redux'

import TitleCharCount from './TitleCharCount'
import DescriptionCharCount from './DescriptionCharCount'

class Preview extends React.Component {
  render () {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <TitleCharCount />
        <p>{this.props.description}</p>
        <DescriptionCharCount />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    title: state.title,
    description: state.description
  }
}

export default connect(mapStateToProps)(Preview)
