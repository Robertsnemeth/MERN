const mongoose = require('mongoose');

const PersonSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First Name is required"],
        minLength: [3, "First Name must have at least 3 characters"]
    },
    lastName: {
        type: String,
        required: [true, "Last Name is required"],
        minLength: [3, "Last Name must have at least 3 characters"]
    },},
    {timestamps: true}
);
module.exports = mongoose.model('Person', PersonSchema);