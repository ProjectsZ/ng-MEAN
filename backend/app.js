
const express = require('express');

const app = express();

app.use((req, res, next) => {
        console.log('Primera middleware.');
        next();
      });

app.use((req, res, next) =>{
        res.send('Express !! ...');
      });

module.exports = app;
