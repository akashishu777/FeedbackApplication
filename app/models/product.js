/*
  Description: file responsible for 'product' model handling
  Author: Vitor Veras
  Creation date:  02/12/2017
*/
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
/*
* Product
*
* Id: int
* Name: String
* Amount: int
* Description: String
* */
var ProductSchema = new Schema({
    name: String,
    amount: Number,
    description: String
});
module.exports = mongoose.model('product', ProductSchema);

