var express = require('express')
var app = express()

var ob = {
    type : "Republic Day",
    quote : "Our life is full of colors.I hope this 26th january will add more colors to your life.Happy Republic Day!",
    timetill : "Jan 01, 2019 00:00:00"
}

app.use(express.static('public'));
app.set('view engine', 'ejs')

app.get('/:type/:name', function (req, res) {

    var newType = checkType(req.params.type) 
    var name = req.params.name

    res.render('republic', { name: name ,type: newType.type ,quote : newType.quote, timetill : newType.timetill })
})

app.get('/', function (req, res) { 
    res.status(200)   
    res.render('start')
})

app.listen(8080)

function checkType(tp){
    var returnable;

    switch(tp){
        case "0":{
            returnable = ob;
        }break;

        case "1":{
            ob.quote = "On this pious occasion of Mahashivaratri, many many greetings to all of you. May Lord Shiva shower on you his blessings with happiness, prosperity & peace."
            ob.type = "Mahasivratri"
            ob.timetill = "Jan 26, 2019 00:00:00"
            returnable = ob;
        }break;

        case "2":{
            ob.quote = "Love is in playing Holi together; that warmth and feel is adrenaline on steroids."
            ob.type = "Holi"
            ob.timetill = "Mar 20, 2018 00:00:00"
            returnable = ob;        
        }break;

        case "3":{
            ob.quote = "Dear brother, even though I am far away from you, but you will always be there in my heart. Happy Raksha Bandhan."
            ob.type = "Raksha Bandhan"
            ob.timetill = "Jan 26, 2019 00:00:00"
            returnable = ob;        
        }break;

        case "4":{
            ob.quote = "Diwali is a magical time to celebrate with loved ones. May you get to create special memories with the ones you love, this Diwali. Best wishes!"
            ob.type = "Diwali"
            ob.timetill = "Jan 26, 2019 00:00:00"
            returnable = ob;        
        }break;

        case "5":{
            ob.quote = "Thanks for all the fun, and lovely moments we shared.May we have lots more in the glorious New Year."
            ob.type = "New Year"
            ob.timetill = "Jan 26, 2019 00:00:00"
            returnable = ob;        
        }break;

        default:{
            returnable = ob;
        }

    }

    return returnable

}