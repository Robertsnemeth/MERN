const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8000;

app.use(express.json(), express.urlencoded({extensions: true}));
app.use(cors());

require('./routes/author.routes')(app)
require('./config/mongoose.config');

app.listen(PORT, () => console.log(`ITS OVER ${PORT}`));