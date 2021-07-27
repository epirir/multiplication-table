const fs = require("fs");
const colors = require("colors");

const fileCreate = async (base, list = false, far = 10) => {
  try {
    let result,
      term = "";

    for (let i = 1; i <= far; i++) {
      result += `${base}  x ${i} = ${base * i}\n`;
      term += `${base} ${"x".green} ${i} ${"=".america} ${base * i}\n`;
    }

    if (list) {
      console.log(term);
    }

    fs.writeFileSync(`./results/tabla-${base}.txt`, result);

    return `tabla ${base}`;
  } catch (err) {
    throw err.message;
  }
};

module.exports = {
  fileCreate,
};
