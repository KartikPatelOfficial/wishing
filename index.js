var express = require('express')
var app = express()

app.use(express.static('public'));
app.set('view engine', 'ejs')

app.get('/name/:name', function (req, res) {
    var name = req.params.name
    res.render('main', { name: name })
})


app.listen(8080, function () {
    console.log(__dirname)
})