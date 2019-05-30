const mongoose = require("mongoose");

let userInfo = new mongoose.Schema({
  username: {
    type: String
  },
  password: {
    type: String
  },
  email: {
    type: String
  },
});

mongoose.model("users", userInfo);
