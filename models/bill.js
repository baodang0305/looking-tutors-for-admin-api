const mongoose = require('mongoose');
const Schema = mongoose.Schema;


var bill = new Schema({
    email: String,
    amount: String,
    month: String,
    year: String
});



const getSumMoney = async (res) => {
    await userModel.find({'role': 'teacher'})
    .then(user => {
        return res.status(200).json({user});
    })
    .catch(error => console.log(error));
  };
const list = mongoose.model('buills', bill);