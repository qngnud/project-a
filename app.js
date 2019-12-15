let express = require('express')
let b = require('./model/Brand')
let app = express();
app.get('/',function (req, res) {
    // res.send("Hello the world");
    let obj = new b.Brand(1,"2","3","4","5","6");
    let obj2 = new b.Brand(2,"3","4","5","6","7");
    let arr = [obj,obj2];
    res.json(arr);
});
app.listen(3000);