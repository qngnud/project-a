function getConnection() {
    let admin = require('firebase-admin');

    admin.initializeApp({
        credential: admin.credential.applicationDefault(),
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