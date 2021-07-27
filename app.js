const { fileCreate } = require("./helpers/multiply");
const argv = require("./config/yargs");
const colors = require("colors");

fileCreate(argv.b, argv.l, argv.h)
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
