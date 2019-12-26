const UserModel = require("../../models/user-model"),
  passport = require("passport"),
  jwt = require("jsonwebtoken");
const Busboy = require("busboy");

exports.get_list_account_user = async  (req, res) => {
    UserModel.getListAccountUser(res);
  };