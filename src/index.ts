#!/usr/bin/env node

import * as fs from "fs";
import * as path from "path";

const text = fs.readFile(
  path.join(__dirname, "./asciiArt.txt"),
  "utf8",
  (error, data) => {
    console.log(typeof(data));
  }
);
