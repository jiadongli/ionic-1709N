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
// 15:35
app.listen(3000);

// Alt + Shift + F10

// E_ADDR_IN_USE:::3000