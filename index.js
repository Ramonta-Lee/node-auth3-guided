/*require("dotenv").config({
  path: "full/custom/path/to/your/env/vars"
}); */
require("dotenv").config();

const server = require('./api/server.js');

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`\n** Running on port ${port} **\n`));


// nodemon looks for this file and then runs the server information