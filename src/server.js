const express = require('express');
const server = express();

server.get('/', (req, res) =>{
    return res.send('novas')
})

server.listen(5500)