import React from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { connect } from 'react-redux'
import firebase from 'firebase'

import TitleCharCount from './TitleCharCount'
import DescriptionCharCount from './DescriptionCharCount'

const carryInfo = (data) => {
  writeUserData(data.url, data.title, data.description)
}

const firebaseConfig = {
  apiKey: 'AIzaSyDlvYyJk13Oa2dIb5TlmuFRvTyfTZ6b-44',
  authDomain: 'meta-data-checker.firebaseapp.com',
  databaseURL: 'https://meta-data-checker.firebaseio.com',
  projectId: 'meta-data-checker',
  storageBucket: 'meta-data-checker.appspot.com',
  messagingSenderId: '275652737293',
  appId: '1:275652737293:web:e32267586219ff64bb1844',
  measurementId: 'G-BP0VV7EMG4'
}

firebase.initializeApp(firebaseConfig)

function writeUserData (url, title, description) {
  firebase.database().ref('metaData/' + url).set({
    title: title,
    description: description,
    url: url
  })
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
