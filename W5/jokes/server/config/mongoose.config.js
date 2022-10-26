const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/21027', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something sent wrong when connecting to the database", err));