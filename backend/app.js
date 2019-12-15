let express = require('express');
let admin = require('firebase-admin');
let b = require('./model/Brand');

admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL: 'https://project-a-firebase.firebaseio.com'
});
let fs = admin.firestore();
const settings = {timestampsInSnapshots: true};
fs.settings(settings);

let app = express();
app.get('/',async function (req, res) {
    // let arr=[];
    // let brandList = fs.collection('brand');
    // let feedbackList = await brandList.get()
    //     .then(snapshot => {
    //         snapshot.forEach(doc => {
    //             console.log(doc.id, '=>', doc.data());
    //             arr.push(doc.data());
    //         });
    //     })
    //     .catch(err => {
    //         console.log("gi do");
    //     });
    // await res.json(arr);
    // res.end();

    // let arr=[];
    // for(let i=0; i<1000; i++) {
    //     let obj = b.Brand(i,'name'+i, 'image'+i, 'sound'+i, 'bg'+i,'detail'+i);
    //     // arr.push(b);
    //     let addDoc = fs.collection('brand').add(obj).then(ref => {
    //         console.log('id = ', ref.id);
    //     });
    // }
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