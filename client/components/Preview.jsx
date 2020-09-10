import React from 'react'
import { connect } from 'react-redux'

import { addToFile } from '../api/metaData.js'

import TitleCharCount from './TitleCharCount'
import DescriptionCharCount from './DescriptionCharCount'

const carryInfo = (data) => {
  addToFile(data)
}

class Preview extends React.Component {
  render () {
    return (
      <div className="preview-container">
        <h3 className="preview-title">{this.props.title}</h3>
        <TitleCharCount />
        <p className="preview-url">{this.props.url}</p>
        <p className="preview-description">{this.props.description}</p>
        <DescriptionCharCount />
        <button onClick={() => carryInfo(this.props)}>Save Meta Data</button>
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
