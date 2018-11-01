const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
var multer = require('multer');
var upload = multer();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(upload.array()); 
app.use(express.static('public'));

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'))

app.post('/', function (req, res) {
	res.send({ lastName: req.body.lastName + 'ster' })
})

app.listen(port, () => console.log(`listening on port ${port}`))