let express = require('express');
var admin = require('firebase-admin');
let b = require('./model/Brand');

admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL: 'https://project-a-firebase.firebaseio.com'
});
let fs = admin.firestore();
const settings = {timestampsInSnapshots: true};
fs.settings(settings);

let app = express();
app.get('/',function (req, res) {
    // res.send("Hello the world");
    let obj = new b.Brand(1,"2","3","4","5","6");
    let obj2 = new b.Brand(2,"3","4","5","6","7");
    let arr = [obj,obj2];
    res.json(arr);
});
app.listen(3000);