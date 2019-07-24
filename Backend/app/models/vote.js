/*
  Description: file responsible for 'product' model handling
  Author: Akash vishwakarma
  Creation date:  23/07/2019
*/
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var VoteSchema = new Schema({
    ip: String,
    vote: Boolean
});

module.exports = mongoose.model('vote', VoteSchema);
