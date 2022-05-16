var express = require('express') //引入express

var app = express()
    // app.engine('html',require('express'))

app.get('/', function(req, res) {
    res.send("hello node")

    // res.render('index.html')
})
app.listen(3000) //设置端口号