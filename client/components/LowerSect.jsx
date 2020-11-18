import React from 'react'

import db from '../firebase'
import { downloadFile } from 'download-csv'

import jsonexport from 'jsonexport'

const deleteButton = () => {
  deleteUserData()
}

function deleteUserData () {
  db.database().ref('metaData').set(null)
}

function downloadData () {
  const leadsRef = db.database().ref('metaData')
  leadsRef.on('value', function (snapshot) {
    let childData = snapshot.val()
    jsonexport(childData, function (err, csv) {
      if (err) return console.error(err)
      downloadFile(csv, 'meta-data')
    })
  })
}

class LowerSect extends React.Component {
  render () {
    return (
      <div className="lower-sect">
        <button className="delete-button" onClick={() => deleteButton()}>Clear data</button>
        <button className="download-button" onClick={() => downloadData()}>Download data</button>
      </div>
    )
  }
}

export default LowerSect
