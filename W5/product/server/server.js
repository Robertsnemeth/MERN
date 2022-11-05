const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8000;

app.use(express.json(), express.urlencoded({extended: true}));
app.use(cors());

require("./routes/product.routes")(app);
require("./config/mongoose.config");

app.listen(PORT, () => console.log(`ITS OVER ${PORT}`));