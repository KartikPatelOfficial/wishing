var express = require('express')
var app = express()

app.use(express.static('public'));
app.set('view engine', 'ejs')



app.get('/republic/:name', function (req, res) {
    var name = req.params.name
    res.render('republic', { name: name })
})

app.get('/', function (req, res) {
    res.render('start')

})

app.listen(8080, function () {
    console.log(__dirname)
})