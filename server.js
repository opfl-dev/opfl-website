const express = require('express')
const app = express()
const process = require('process');

const port = process.env.PORT

app.use(express.static('public'))
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))