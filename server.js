const express = require('express');
const path = require('path')
const app = express();
const port = 1234;


app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res)=>{
    res.send('hello world')
})

app.listen(port, ()=>{
    console.log(`Server ejecutado en http://localhost:9999`);
})