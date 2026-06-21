// JS to JSON conversion

// JS
const j1 = {
    name: "Nishant",
    age: 22,
    address: "patna",
}

// convert to json
const jsonFormat = JSON.stringify(j1);
console.log(jsonFormat);


// JSON to JS conversion

// JSON
const json = `{
    "name": "nishant",
    "age": 22,
    "address": "patna"
}`;

// convert to java script object
const jsObject = JSON.parse(json);
console.log(jsObject);
