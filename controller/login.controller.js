const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const { LoginModel } = require("../model/login.model");

// const secretKey = ;

const loginUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await LoginModel.find({ username });
    if (user.length > 0) {
      bcrypt.compare(password, user[0].password, async (err, result) => {
        if (result) {
          const token = jwt.sign({ userID: user[0]._id }, "jaiShriRam", {
            expiresIn: "7d",
          });
          res
            .status(200)
            .json({
              status : true ,
              msg: "logged in successfully...",
              token: token,
              userID: user[0]._id,
            });
        } else {
          res.status(500).json({status : false , msg: "incorrect password..." });
        }
      });
    } else {
      res.status(500).json({status : false ,msg: "User Not Found..." });
    }
  } catch (error) {
    res.status(402).json({status : false , msg: "something went wrong", error: error.message });
  }
};

const registerUser = async (req, res) => {
    const {username, password} = req.body;
    try {
        const existingUser = await LoginModel.findOne({username});
        if(existingUser) {
            res.status(200).json({message : "User Already Exists...!"})
        } else {
            bcrypt.hash(password, 10, async (err, hash) => {
                if(err) res.status(400).json({err : "somethings wrong", err : err.message})
                else {
                    const newUser = new LoginModel({username, password : hash});
                    await newUser.save();
                    res.status(200).json({msg : "user has been added", user : newUser});
                }
            });
        }
    } catch (error) {
        res.status(400).json({error : error.message});
    }
}

module.exports = {
    loginUser, registerUser
}