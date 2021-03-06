/*
  Description: file responsible for 'product' model handling
  Author: Akash vishwakarma
  Creation date:  23/07/2019
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
    ip: String,
    vote: Boolean
});
module.exports = mongoose.model('product', ProductSchema);

