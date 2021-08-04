const express = require("express");
const app = express();
const PORT =  process.env.port || 8080;
const path = require('path');
app.use(express.static('./'));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get('/', function(req, res){
  return res.render("calculator");
})

app.listen(PORT, () => {
  console.log('Server is running on '+  PORT);
});
