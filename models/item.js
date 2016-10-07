var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Mongoose Model
module.exports = mongoose.model('Item', new Schema({
  name: String,
  type: String,
  desc: String,
  price: Number,
  image: String,
  modifiers:
    [{
      name: String,
      color: String,
      val: Number
    }],
  date: { type: Date, default: Date.now}
}), 'items');

// {
//     "name":"Black Coffee",
//     "type": "coffee",
//     "desc": "Pure, simple, black coffee",
//     "price": 1.00,
//     "image": "assets/images/items/item.coffee.black.svg",
//     "modifiers":
//     [
//         {
//             "label":"Flavoring",
//             "mode":"add",
//             "option":[{
//                 "name": "Vanilla",
//                 "color": "#fff9c4",
//                 "val": 0.50
//             },{
//                 "name": "Hazelnut",
//                 "color": "#795548",
//                 "val": 0.50
//             },{
//                 "name": "Pumpkin Pie",
//                 "color": "#ef6c00",
//                 "val": 0.50
//             },{
//                 "name": "Other",
//                 "color": "#bdbdbd",
//                 "val": 0.50
//             }]
//         },{
//             "label":"Size",
//             "mode":"multiply",
//             "option":[{
//                 "name": "Small",
//                 "color": "#388e3c",
//                 "val": 1
//             },{
//                 "name": "Medium",
//                 "color": "#2e7d32",
//                 "val": 1.5
//             },{
//                 "name": "Large",
//                 "color": "##1b5e20",
//                 "val": 2
//             }]
//         }
//     ]
// }
