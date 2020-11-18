import React from 'react'

import db from '../firebase'

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
    snapshot.forEach(function (childSnapshot) {
      const childData = childSnapshot.val()
      jsonexport(childData, function (err, csv) {
        if (err) return console.error(err)
        console.log(csv)
      })
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
