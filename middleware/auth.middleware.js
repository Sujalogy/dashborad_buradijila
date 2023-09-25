const jwt = require("jsonwebtoken");
const { isTokenBlacklisted } = require("../model/blacklisted.model");

const secretKey = "jaiShriRam";

const auth = async (req, res, next) => {
  const token = req.headers.authorization;
  
  if (!token) {
    return res.status(401).json({ error: "Authentication required...!!" });
  }
  
  if (await isTokenBlacklisted(token)) {
    return res.status(401).json({ message: "Please login again...!" });
  }
  
  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      console.error("JWT Verification Error:", err);
      return res.status(401).json({ message: "Authentication fails..." });
    }
    req.user = decoded;
    next();
  });
};

module.exports = {
  auth,
};
