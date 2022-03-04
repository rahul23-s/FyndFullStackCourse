const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  first_name: {
    type: String,
    required: true,
  },
  last_name: String,
  email: {
    type: String,
    require: true,
    unique: true,
    match:
      /[a-z0-9!#$%&'+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'+/=?^_`{|}~-]+)@(?:[a-z0-9](?:[a-z0-9-][a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
  },
  password: {
    type: String,
    required: true,
  },
  accesLevel: {
    type: String,
    default: "user",
  },
});

module.exports = mongoose.model("User", userSchema);
