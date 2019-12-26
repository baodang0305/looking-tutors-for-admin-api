const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const user = new Schema({
    fullName: String,
    email: String,
    password: String,
    userImg: {
        type: String,
        default: ''
    },
    role: String,
    address: {
        type: String,
        default: ''
    },
    phoneNumber: {
        type: String,
        default: ''
    },
    discribe: {
        type: String,
        default: ''
    },
    salary: {
        type: Number,
        default: 0
    },
    skills: [],
    typeAccount:{
        type: String,
        default: 'Normal'
    },
    active:{
        type: Boolean,
        default: false
    }
}, { collection: 'user'});

const list = mongoose.model('userModel', user);

const getListAccountUser = async (res) => {
    await userModel.find({'role': 'teacher'})
    .then(user => {
        return res.status(200).json({user});
    })
    .catch(error => console.log(error));
  };

  module.exports = {
      list,
      getListAccountUser
  }
