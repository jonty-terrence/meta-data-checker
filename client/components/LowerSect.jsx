import React from 'react'

import db from '../firebase'

const deleteButton = () => {
  deleteUserData()
}

function deleteUserData () {
  db.database().ref('metaData').set(null)
}

class LowerSect extends React.Component {
  render () {
    return (
      <div className="lower-sect">
        <button className="delete-button" onClick={() => deleteButton()}>Clear data</button>
        <button className="download-button">Download data</button>
      </div>
    )
  }
}

export default LowerSect
