const Item = require("../models/item");

module.exports.getItems = function (req, res) {
  Item.find({}, function (err, result) {
      res.send(result);
  })
}
module.exports.getItem = function (req, res) {
  var id= req.params.id;
  console.log(id);
  Item.findOne({"_id":id}, function (err, result) {
      res.send(result);
      console.log(result);
  })
}
