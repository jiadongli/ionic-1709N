/**
 * Created by web-01 on 2018/2/8.
 */

const express = require('express');

let app = new express();

app.get('/', (req, res) => {
  // req = request
  // res = response
  // ...
  res.end('It works.')
});

app.get('/signUp', (req, res) => {
  let email = req.query.email;
  res.end(`email: ${email}`);
});

app.listen(3000);

// Alt + Shift + F10

// E_ADDR_IN_USE:::3000