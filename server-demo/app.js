/**
 * Created by web-01 on 2018/2/9.
 */

const express = require('express');


let app = new express();

app.get('/', (req, res) => {
  let username = req.query.username;
   // ...
  res.end(`username: ${username}`);
});


app.listen(3000);