var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const plm = require('passport-local-mongoose');
/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
mongoose.connect('mongodb://localhost:27017/pinterest', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});

// Define the schema
const userSchema = new mongoose.Schema({
  username: {
    type: String
  },
  password: {
    type: String
  },
  posts: [{
    type: mongoose.Schema.Types.ObjectId, // Reference to the posts created by the user
    ref: 'Post',
  }],
  displayPicture: {
    type: String, // URL or path to the display picture
    default: ''
  },
  email: {
    type: String,
    unique: true,
  },
  fullName: {
    type: String,
  }
}); // Automatically adds createdAt and updatedAt fields

userSchema.plugin(plm);
// Create the model
const User = mongoose.model('User', userSchema);

module.exports = User;
