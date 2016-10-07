var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('Order', new Schema({
  date: { type: Date, default: Date.now},
  completed: Boolean,
  room: String,
  student: String,
  pickup: Boolean,
  items:
    [{
      name: String,
      modifier: String,
      amount: Number
    }]
}), 'orders');
