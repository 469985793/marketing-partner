const express = require("express");
const app = express();
  app.all("/api/demo/demo2",function (req,res) {
    // res.header("Access-Control-Allow-Origin", "*");
    // res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    // res.header("Access-Control-Allow-Headers", "X-Requested-With");
    // res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.json({
      a:"aaaaa"
    })
  });
  app.listen(3338);

