const express = require('express');
const router = require('./router.js');
const path = require('path');
const morgan = require('morgan');
const port = 3006;
const bodyparser = require('body-parser');
const app = express();

app.use(bodyparser.json());
app.use(morgan('dev'));
//dirname is global but path goes based on relative files.
//it was routing to the old path.
app.use(express.static(path.join(__dirname, '..','client', 'dist')));
app.use('/api', router);

app.listen(port, () => console.log(`Listening on ${port}`));