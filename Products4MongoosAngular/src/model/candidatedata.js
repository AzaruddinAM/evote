const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://azar:azar@cluster0-bi2on.mongodb.net/test?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

var NewCandidateSchema = new Schema({
    
    candidatename : String,
    electionname: String,
    electionDate : String,
    description : String,
    imageUrl : String,
    votecount :Number,
    resultflag :String,
});

var candidatedata = mongoose.model('movies', NewCandidateSchema);                        //UserData is the model and NewBookData is the schema

module.exports = candidatedata;