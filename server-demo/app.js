/**
 * Created by web-01 on 2018/2/9.
 */

const express = require('express');
const bodyParser = require('body-parser');

let app = new express();

app.use(bodyParser.urlencoded({extended:true}));

app.post('/signUp', (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  res.end(`username: ${username}, password: ${password}`);
});


app.listen(3000);