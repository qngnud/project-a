let express = require('express');
let fs = require('./firestoreConnection');
const NUMBER_PER_PAGE = 12;

let app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/getBrands',async function (req, res, next) {
    let pageNumber = req.query.page;
    console.log('getHere');
    let data = await fs.getAllWithPaging('brand','id',pageNumber,NUMBER_PER_PAGE);
    await res.json(data);
    res.end();
});

app.get('/getTags',async function (req, res, next) {
    let pageNumber = req.query.page;
    let data = await fs.getAllWithPaging('tag','id',pageNumber,NUMBER_PER_PAGE);
    await res.json(data);
    res.end();
});

app.get('/getBrandsByTag',async function (req, res, next) {
    let arr = [];
    let pageNumber = req.query.page;
    let tag = req.query.tag;
    let data = await fs.getSatisfiedResultWithPaging('brand','id',pageNumber,NUMBER_PER_PAGE,'tag','==',tag);
    await res.json(data);
    res.end();
});

app.listen(3000);