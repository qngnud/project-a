let express = require('express');
let fs = require('./firestoreConnection').getConnection();

let app = express();
app.get('/homepage',async function (req, res) {
    let arr = [];
    let pageNumber = req.query.pageno;
    if (pageNumber==null) pageNumber=0;
    console.log("page: " + pageNumber);
    let brandList = await fs.collection('brand').orderBy('id').startAt(pageNumber*9).limit(9).get()
        .then(snapshot => {
            snapshot.forEach(doc => {
                console.log(doc.id, '=>', doc.data());
                arr.push(doc.data());
            })
        });
    let data = {Data: arr}
    await res.json(data);
    res.end();
});
app.listen(3000);