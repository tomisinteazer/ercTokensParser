let valid = require("./valid.json");
async function addNewToken(data) {
  let r = await fetch("https://nest-tokens-api.herokuapp.com/erc-tokens", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  });
  let res = await r.json();
  console.log(res);
}
valid.forEach((e) => addNewToken(e));
