const mongoose = require('mongoose');

// Define the schema for posts
const postSchema = new mongoose.Schema({
    imageText: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        type: String
    },
    user: {
        type: mongoose.Schema.Types.ObjectId, // Reference to the user who created the post\
        ref: 'User',
    },
    date: {
        type: Date,
        default: Date.now, // Automatically sets the current date
    },
    time: {
        type: String,
        default: function () {
            const now = new Date();
            return now.toLocaleTimeString(); // Automatically sets the current time
        }
    },
    likes: {
        type: Array,
        default: 0, // Default to 0 likes initially
    }
}, { timestamps: true }); // Adds createdAt and updatedAt fields

// Create the model
const Post = mongoose.model('Post', postSchema);

module.exports = Post;
