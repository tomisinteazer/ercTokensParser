let fs = require("fs");
let data = require("./erc20.json");
let valid = data.filter((e) => e.image != "");
let invalid = data.filter((e) => e.image === "");
fs.writeFileSync("valid.json", JSON.stringify(valid), () => {
  console.log("done chief");
});
fs.writeFileSync("invalid.json", JSON.stringify(invalid), () => {
  console.log("done chief");
});
