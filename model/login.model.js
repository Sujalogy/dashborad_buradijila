const mongoose = require('mongoose');

const loginSchema = mongoose.Schema({
    username : {type: String, required : true},
    password : {type: String, required : true}
})

const LoginModel = mongoose.model("authority", loginSchema);

module.exports = {
    LoginModel
}