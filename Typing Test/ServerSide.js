const fs = require('fs')
const express = require('express')
const app = express()


app.use(express.static('./'));

const server = app.listen(3100, function() {
    const host = server.address().address
    const port = server.address().port
    console.log("app listening at http://%s:%s", host, port)
})