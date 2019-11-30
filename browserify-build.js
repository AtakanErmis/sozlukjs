const fs = require("fs");
const browserify = require("browserify");
const b = browserify();

const file = fs.createWriteStream("./bundle.js");

b.require("./index.js", {expose: "sozluk"})
b.bundle().pipe(file);