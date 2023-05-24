const fs = require("fs");
const XLSX = require("xlsx");

let workBook = XLSX.readFile("data_staff.xlsx");
let xldata = XLSX.utils.sheet_to_json(workBook.Sheets["crud"]);
console.log(xldata);
