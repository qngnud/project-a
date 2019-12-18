let express = require('express');
let fs = require('./firestoreConnection').getConnection();
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/postFeedback', (req, res) => {
    req.body.receiveTime = (new Date()).getTime();
    let addFeedback = fs.collection('feedback').add(req.body)
    console.log('Got body:', req.body);
    res.sendStatus(200);
});

app.listen(20001);