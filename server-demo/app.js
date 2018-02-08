/**
 * Created by web-01 on 2018/2/8.
 */

const express = require('express');
const bodyParser = require('body-parser');

let app = new express();

// 配置中间件 middleware
app.use(bodyParser.urlencoded({extended: true}));

app.post('/signUp', (req, res) => {
  // let email = req.query.email; // GET
  let email = req.body.email;
  let password = req.body.password;

  // todo MySQL

  res.end(`email: ${email}, password: ${password}`);
});

app.listen(3000);

// Alt + Shift + F10

// E_ADDR_IN_USE:::3000