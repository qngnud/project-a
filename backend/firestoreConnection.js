function getConnection() {
    let admin = require('firebase-admin');
    let serviceAccount = require("../credential/cf");

    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: 'https://project-a-firebase.firebaseio.com'
    });
    let fs = admin.firestore();
    const settings = {timestampsInSnapshots: true};
    fs.settings(settings);
    return fs;
}

let fs = getConnection();

async function readSnapshot(arr, query) {
    await query.get()
        .then(snapshot => {
            snapshot.forEach(doc => {
                console.log(doc.id, '=>', doc.data());
                arr.push(doc.data());
            })
        }).catch(err => {
            console.log('Error: ', err);
    });
}

async function getAllWithPaging(collectionName, columnToSort, pageNo, numberPerPage) {
    let arr = [];
    if (pageNo==null) pageNo=1;
    pageNo--;
    await readSnapshot(arr,fs.collection(collectionName).orderBy('id').startAt(pageNo*numberPerPage+1).limit(numberPerPage));
    return {Data: arr};
}

async function getSatisfiedResultWithPaging(collectionName, columnToSort, pageNo, numberPerPage, leftOperation, operator, rightOperation) {
    let arr = [];
    if (pageNo==null) pageNo=1;
    pageNo--;
    await readSnapshot(arr,fs.collection(collectionName).where(leftOperation,operator,rightOperation).orderBy('id').startAt(pageNo*numberPerPage+1).limit(numberPerPage));
    return {Data: arr};
}

module.exports = {
    getConnection: getConnection,
    getAllWithPaging: getAllWithPaging,
    getSatisfiedResultWithPaging: getSatisfiedResultWithPaging,
};