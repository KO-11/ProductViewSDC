require('newrelic');
const express = require('express');
const router = require('./router.js');
const path = require('path');
const morgan = require('morgan');
const port = 3005;
const bodyparser = require('body-parser');
const app = express();

app.use(bodyparser.json());
app.use(morgan('dev'));
//dirname is global but path goes based on relative files.
//it was routing to the old path.
app.use(express.static(path.join(__dirname, '..','client', 'dist')));
app.use('/api', router);
app.use('/loaderio-817b869e5e1cbfc2d59c8b264868440f.txt', function(req, res){
  res.send('loaderio-817b869e5e1cbfc2d59c8b264868440f')
})

app.listen(port, () => console.log(`Listening on ${port}`));