var db = require("../models");


//retrieving product based on part of face clicked 
app.get("/api/face/:product", function (req, res) {
    db.face.findOne({
      where: {
        productName: params.body.productName
      }
    }).then(function (dbProduct) {
      console.log(dbProduct);
      res.json(dbProduct);
    });
  });

