const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    description: "base",
  })
  .option("f", {
    alias: "far",
    type: "number",
    default: 10,
    description: "far",
  })
  .option("l", {
    alias: "list",
    type: "boolean",
    default: false,
    description: "list",
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "Not number";
    }
    return true;
  }).argv;

module.exports = argv;
