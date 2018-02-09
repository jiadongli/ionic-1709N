/**
 * Created by web-01 on 2018/2/9.
 */

const express = require('express');
const bodyParser = require('body-parser');

let app = new express();

// Express 中间件 middleware 的配置
// app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.post('/signUp', (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  console.log(`email: ${email}, password: ${password}`);
  // todo MySQL
  res.send({"status":"ok"});
});

app.listen(3000);