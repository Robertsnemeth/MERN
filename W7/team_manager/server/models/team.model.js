const mongoose = require('mongoose');

const TeamSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is requred"],
        minLength: [2, "Name must be at least 2 characters long"]
    },
    position: {
        type: String,
    }}, 
    {timestamps: true});

    module.exports = mongoose.model("Team", TeamSchema);