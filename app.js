const express = require("express");
const cors = require("cors");
const path = require("path");

const { connection } = require("./database/db");

const { auth } = require("./middleware/auth.middleware");

const { loginRouter } = require("./routes/login.routes");
const { registerRouter } = require("./routes/register.routes");

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "views", "public")));

app.use("/register", registerRouter);
app.use("/login", loginRouter);
app.use(auth);

app.get("/", (req, res) => {
    try {
        res.status(200).json({status : "success", authenticated : true});
    } catch (error) {
        res.status(400).json({ message: "not getting" });
    }
});

app.listen(3000, async () => {
  try {
    console.log("server is running...");
    await connection;
    console.log("DB connected...");
} catch (error) {
    console.log("DB not connected...");
    console.log("server is not running...");
  }
});
