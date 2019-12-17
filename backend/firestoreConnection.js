function getConnection() {
    let admin = require('firebase-admin');
    var serviceAccount = require("../credential/cf");

    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: 'https://project-a-firebase.firebaseio.com'
    });
    let fs = admin.firestore();
    const settings = {timestampsInSnapshots: true};
    fs.settings(settings);
    return fs;
}

module.exports = {
    getConnection: getConnection,
};