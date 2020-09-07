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
        <p>{this.props.url}</p>
        <p>{this.props.description}</p>
        <DescriptionCharCount />
        <button>Save Meta Data</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    title: state.title,
    description: state.description,
    url: state.url
  }
}

export default connect(mapStateToProps)(Preview)
