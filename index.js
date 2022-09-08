const express = require("express");
const app = express();

const routes = require("./routes");

app.use(routes(express.Router()));

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Application listening on port ${port}`);
});
