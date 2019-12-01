const fs = require("fs");
const browserify = require("browserify");
const b = browserify();

const file = fs.createWriteStream("./bundle.js");

b.add("./index.js");
b.require("./index.js", {expose: "sozlukjs"});
b.bundle().pipe(file);