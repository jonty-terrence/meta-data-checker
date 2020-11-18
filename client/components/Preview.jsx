import React from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { connect } from 'react-redux'
import db from '../firebase'

import TitleCharCount from './TitleCharCount'
import DescriptionCharCount from './DescriptionCharCount'

const carryInfo = (data) => {
  writeUserData(data.url, data.title, data.description)
}

function writeUserData (url, title, description) {
  db.database().ref('metaData/' + url).set({
    title: title,
    description: description,
    url: url
  })
}

class Preview extends React.Component {
  render () {
    return (
      <div className="preview-container">
        <h2>Preview of Your Meta Data</h2>
        <div className="google-preview">
          <h3 className="preview-title">{this.props.title}</h3>
          <p className="preview-url">{this.props.url}</p>
          <p className="preview-description">{this.props.description}</p>
        </div>
        <div className="buttons">
          <CopyToClipboard text={this.props.title} onCopy={this.onCopy}>
            <button>Copy Title</button>
          </CopyToClipboard>
          <CopyToClipboard text={this.props.description} onCopy={this.onCopy}>
            <button>Copy Description</button>
          </CopyToClipboard>
          <button onClick={() => carryInfo(this.props)} className="save-button">Save</button>
        </div>
        <div className="count-container">
          <TitleCharCount />
          <DescriptionCharCount />
        </div>
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
