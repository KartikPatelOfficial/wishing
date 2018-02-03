var express = require('express')
var app = express()

var ob = {
    type : "Republic Day",
    quote : "Our life is full of colors.I hope this 26th january will add more colors to your life.Happy Republic Day!"
}

app.use(express.static('public'));
app.set('view engine', 'ejs')

app.get('/:type/:name', function (req, res) {

    var newType = checkType(req.params.type) 
    var name = req.params.name

    res.render('republic', { name: name ,type: newType.type ,quote : newType.quote })
})

app.get('/', function (req, res) {
    res.render('start')

})

app.listen(8080, function () {
    console.log(__dirname)
})

function checkType(tp){
    var returnable;

    switch(tp){
        case "0":{
            returnable = ob;
        }break;

        case "1":{
            ob.quote = "saf"
            ob.type = "Mahasivratri"
            returnable = ob;
        }break;

        case "2":{
            ob.quote = "saf"
            ob.type = "Mahasivratri"
            returnable = ob;        
        }break;

        case "3":{
            ob.quote = "saf"
            ob.type = "Mahasivratri"
            returnable = ob;        
        }break;

        default:{
            returnable = ob;
        }

    }

    return returnable

}