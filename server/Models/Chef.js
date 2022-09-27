const {model, Schema} = require('mongoose');

const chefSchema = new Schema({
    username:String,
    companyname:String,
    password:String,
    email:String,
    address:String,
    rcNumber:Number,
    createdAt:String,

});

module.exports = model('Chef', chefSchema);