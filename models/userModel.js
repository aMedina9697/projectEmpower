var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  /** 
   * LOOK HERE - we've added our own ID key. There's a second change you can do, too.
   */
  _id: String,
  /*
   * 2: password: A string that will be required, trimmed, and at least 6 characters.
   */
  password: {
    type: String,
    trim: true,
    required: true,
    validate: [
      input => input.length >= 6, "Password must be at least 6 chars"
    ]
  },
  /*
  * 3: email: A string that must be a valid email address and unique in our collection.
  */
  email: {
    type: String,
    match: [/.+\@.+\..+/, "Must be a valid email"],
    unique: true,
    required: true,
    trim: true
  },

  /*
  * 4: userCreated: A date that will default to the current date.
  */
  userCreated: {
    type: Date,
    default: Date.now
  }

}, { _id: false });

// This creates our model from the above schema, using mongoose's model method
var User = mongoose.model("User", UserSchema);

// Export the User model
module.exports = User;