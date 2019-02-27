const mongoose = require("mongoose");
const UserModel = require("./userModel");
mongoose.connect("mongodb://localhost/userdb", { useNewUrlParser: true });

const user = new UserModel({
    _id: "910CC215CbNLRyEghyglpQLm1Dt1",
    password: "sickomode",
    email: "jordans@gmail.com"
});
// then when you save the user it'll have the id
user.save();

module.exports = {
  User: require("./userModel"),
  Product: require("./product")
};