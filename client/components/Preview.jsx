import React from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { connect } from 'react-redux'

import { addToFile } from '../api/metaData.js'

const carryInfo = (data) => {
  addToFile(data)
}

class Preview extends React.Component {
  render () {
    return (
      <div className="preview-container">
        <h1>Preview of Your Meta Data</h1>
        <h3 className="preview-title">{this.props.title}</h3>
        <p className="preview-url">{this.props.url}</p>
        <p className="preview-description">{this.props.description}</p>
        <CopyToClipboard text={this.props.title} onCopy={this.onCopy}>
          <button>Copy Meta Title</button>
        </CopyToClipboard>
        <CopyToClipboard text={this.props.description} onCopy={this.onCopy}>
          <button>Copy Meta Description</button>
        </CopyToClipboard>
        <button onClick={() => carryInfo(this.props)} className="save-button">Save Meta Data</button>
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
