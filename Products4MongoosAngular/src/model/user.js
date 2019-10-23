const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://azar:azar@cluster0-bi2on.mongodb.net/test?retryWrites=true&w=majority');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    email: String,
    mobilenumber: String,
    password: String,
    adhar:String,
    requestflag:String,
    votedflag:String,
});

module.exports = mongoose.model('user', userSchema, 'users');