let express = require('express');
let fs = require('./firestoreConnection').getConnection();
const NUMBER_PER_PAGE = 12;

let app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:8080"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/app',async function (req, res, next) {
    let arr = [];
    let pageNumber = req.query.page;
    if (pageNumber==null) pageNumber=1;
    pageNumber--;
    await fs.collection('brand').orderBy('id').startAt(pageNumber*NUMBER_PER_PAGE+1).limit(NUMBER_PER_PAGE).get()
        .then(snapshot => {
            snapshot.forEach(doc => {
                console.log(doc.id, '=>', doc.data());
                arr.push(doc.data());
            })
        });
    let data = {Data: arr};
    await res.json(data);
    res.end();
});
app.listen(3000);