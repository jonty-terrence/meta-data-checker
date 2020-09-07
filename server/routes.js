const fs = require('fs')


fs.appendFile('metaData.JSON', newData, (err) => {
  if (err) throw err
})
