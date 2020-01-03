const bodyParser = require('body-parser');
const NUMBER_PER_PAGE = 12;
let express = require('express');
let fsConnection = require('./firestoreConnection');

let app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/getBrands', async function (req, res, next) {
    let pageNumber = req.query.page;
    console.log('getHere');
    let data = await fsConnection.getAllWithPaging('brand','id',pageNumber,NUMBER_PER_PAGE);
    await res.json(data);
    res.end();
});

app.get('/getTags',async function (req, res, next) {
    let pageNumber = req.query.page;
    let data = await fsConnection.getAllWithPaging('tag','id',pageNumber,NUMBER_PER_PAGE);
    await res.json(data);
    res.end();
});

app.get('/getBrandsByTag',async function (req, res, next) {
    let arr = [];
    let pageNumber = req.query.page;
    let tag = req.query.tag;
    let data = await fsConnection.getSatisfiedResultWithPaging('brand','id',pageNumber,NUMBER_PER_PAGE,'tag','==',tag);
    await res.json(data);
    res.end();
});

app.get('/getBrandsByInfo',async function (req, res, next) {
    let arr = [];
    let pageNumber = req.query.page;
    let tag = req.query.tag;
    let data = await fsConnection.getSatisfiedResultWithPaging('brand','id',pageNumber,NUMBER_PER_PAGE,'name','==',tag);
    await res.json(data);
    res.end();
});

app.post('/postFeedback', (req, res) => {
    req.body.receiveTime = (new Date()).getTime();
    let addFeedback = fsConnection.addData('feedback',req.body);
    console.log('Got body:', req.body);
    res.sendStatus(200);
});

app.listen(3000);