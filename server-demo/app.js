/**
 * Created by web-01 on 2018/2/9.
 */

const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

let pool = mysql.createPool({
  user: 'root'
});

let app = new express();

// Express 中间件 middleware 的配置
// app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.post('/signUp', (req, res) => {
  let user = req.body.user;

  // check email
  let sql = 'SELECT * FROM db.user WHERE email = ?';
  pool.query(sql, [user.email], (err, results) => {
    if(err) throw err;
    if (results.length === 1) {
      res.send({"status": "exist"});
    }
  });

  sql = 'INSERT INTO db.user VALUE(NULL, ?, ?, ?, ?, ?, ?)';

  pool.query(sql, [
    user.email,
    user.username,
    user.password,
    user.gender,
    user.age,
    user.city
  ], (err, results) => {
    if (err) throw err;
    if (results.affectedRows === 1) {
      // sign up success
      res.send({"status": "ok"});
    } else {
      // sign up failed 很少发生
      res.send({"status": "err"});
    }
  });
});

app.post('/signIn', (req, res) => {
  let user = req.body.user;

  let sql = 'SELECT * FROM db.user WHERE email = ? AND password = ?';
  pool.query(sql, [user.email, user.password], (err, results) => {
    if (err) throw err;
    // Ctrl + Alt + T
    if (results.length === 1) {
      // sign in successful
      res.send({"status": "ok"});
    } else {
      // sign in failed
      res.send({"status": "err"});
    }
  });
});

app.get('/products/:page', (req, res) => {
  let page = req.params.page;
  const pageSize = 20; // 每页记录数量
  let sql = `SELECT *
                FROM db.product 
                LIMIT ${pageSize} 
                OFFSET ?`;

  // 数据库视图 View v_product product.* + totalRow

  pool.query(sql, [pageSize * (page - 1)], (err, results) => {
    if (err) throw err;
    res.send(results);
  })
});

app.get('/product/:productId', (req, res) => {
  let productId = req.params.productId;

  // 这里是一个关联查询，查询商品的所有详情信息
  let sql =`SELECT p1.*, p2.name
            FROM
            db.product AS p1
            LEFT OUTER JOIN
            db.picture AS p2
            ON p1.id = p2.productId
            WHERE p1.id = ?`;

  pool.query(sql, [productId], (err, results) => {
    if (err) throw err;
    /*
        {
          "status":"ok",
          "data": []
        }
     */
    res.send(results);
  })
});

app.listen(3000);