let express = require('express');
let admin = require('firebase-admin');

admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL: 'https://project-a-firebase.firebaseio.com'
});
let fs = admin.firestore();
const settings = {timestampsInSnapshots: true};
fs.settings(settings);

let app = express();
app.get('/',async function (req, res) {
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
    await res.json(arr);
    res.end();
});
app.listen(3000);