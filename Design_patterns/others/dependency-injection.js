//1. Give you the control of methods to the unknown libraries
//2. remove all the 'require's

const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.get('/', get(axios));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
