const express = require('express');

const cors = require('cors');

const app = express();



const connectDB = require("./config/db");

connectDB();


const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: false }));
 
app.use(bodyParser.json());





app.use(cors());

app.get("/", (req, res) => res.send("EVERYWHERE STEW"));
app.post("/input", require("./routes/validation"));
app.get("/removeone", require("./routes/validation"));




const port = process.env.PORT || 3338;
// ...
app.listen(port, () => {
  console.log(`Listening on ${port}`);
});