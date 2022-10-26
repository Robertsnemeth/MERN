const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8000;


app.use(express.json(), express.urlencoded({extended: true}));
app.use(cors());
// TODO: all my routes go here
require("./routes/person.routes")(app);
require("./config/mongoose.config");
// const AllMyPersonRoutes = require("./routes/person.routes");
// AllMyPersonRoutes(app);

app.listen(PORT, () => console.log(`ITS OVER ${PORT}!`));