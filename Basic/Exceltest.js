var excel=require('xlsx');
var workbook= excel.readFile('test.xlsx');

// var firstsheet="LoginTest";//workbook.SheetNames[0];
    // var addressOfCell='A2';
var worksheet=workbook.Sheets["LoginTest"];
var desiredcell=worksheet['A2'];

var desiredvalue=desiredcell.v;
console.log(desiredvalue);
