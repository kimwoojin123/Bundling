const a = require("./a.js");
const b = require("./b.js");

const c = {id: a, location: b};

const name = document.getElementById("name");
const location = document.getElementById("location");
const obj = document.getElementById("obj");

name.innerHTML = a;
location.innerHTML = b;
obj.innerHTML = c.id;
