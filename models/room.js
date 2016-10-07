var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('Room', new Schema({
  room: String,
  status: Boolean
}), 'rooms');
