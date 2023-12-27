//old way of importing in node (CommonJS)
// const c = require('./script2.js');

import { largeNumber } from './script2.mjs'; //make sure that this says .mjs if not updating the JSON file

// const a = c.largeNumber;
const a = largeNumber;
const b = 5;

console.log(a + b);

//when running got Warning: To load an ES module, set "type": "module" in
// the package.json or use the .mjs extension.

//go to https://nodejs.org/api/esm.html#enabling

// answer:
// If the nearest parent package.json lacks a "type" field, or contains "type": "commonjs", .js files are treated as CommonJS. If the volume root is reached and no package.json is found, .js files are treated as CommonJS.
// import statements of .js files are treated as ES modules if the nearest parent package.json contains "type": "module".

// my-app.js, part of the same example as above
//import './startup.js';  Loaded as ES module because of package.json

//Changed script.js to script.mjs and script2.js to script2.mjs

//to Update the JSON file...
//revert all mjs to js and in the terminal npm init -y which will create the JSON file.
//in package.json add the line:
// "type": module,
//I would put it somewhere above the scripts near the block that has name version description
