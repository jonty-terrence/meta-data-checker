const fs = require('fs')
const express = require('express')

const path = require('path')

const router = express.Router()

const filePath = path.join(__dirname, './metaData.json')

function add (data, callback) {
    // console.log(lemon)
    // read the file
    fs.readFile(filePath, 'utf8', (err, contents) => {
        // handle file read error
        if(err) return callback(err)
        // JSON.parse the contents
        const lemons = JSON.parse(contents)
        // add the lemon (push)
        lemons.push(lemon)
        // stringify the array
        const newContents = JSON.stringify(lemons, null, 2)
        // save/write the file
        fs.writeFile(filePath, newContents, callback)
    })
}

router.post('/', (req, res) => {
    const { url, title, description } = req.body
    const lemon = { url, title, description }
    add(lemon, (err) => {
        // sending err.message is a bad security practice - should be sanitised
        if(err) return res.status(500).send(err.message)
        res.redirect('/')
    })
    fs.readFile(filePath, 'utf8', (err, contents) => {
    if (err) return res.status(500).send(err.message)
    console.log(JSON.parse(contents))
    })
})

module.exports = router
