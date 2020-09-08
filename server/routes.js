const fs = require('fs')
const express = require('express')

const router = express.Router()

router.post('/', (req, res) => {
  const { url, title, description } = req.body
  const newData = {
    url: url,
    title: title,
    description: description
  }
  return fs.appendFile('./metaData.json', newData, (err) => {
    if (err) throw err
    console.log('Added to file successfully')
  })
})

module.exports = router
