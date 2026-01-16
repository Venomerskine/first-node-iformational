var express = require('express')
var app = express()
const path = require('path')

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'home.html'))
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'about.html'))
})

app.get('/contact-me', (req, res) => {
    res.sendFile(path.join(__dirname, 'contact-me.html'))
})

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, '404.html'))
})

app.listen(8080, () => {
    console.log('Example app listening on port 3000')
})