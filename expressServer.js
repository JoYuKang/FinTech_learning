const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/test', function (req, res) {
    res.send('test')
  })
 
app.listen(3000, function() {
    console.log("3000번 서버가 실행됩니다.")
})