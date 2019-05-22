const add = function(numberString) {
	if (numberString == "")
	return 0;
let regex = /[,\n]/; //Default delimiter; numbers to add are separated by either comma or new line 
//Representing a pattern to use with default delimiter
//Pattern starts and ends with a number (which can be negative) and can have one or more numbers separated by either comma or new line
let pattern = /^(-{0,1}\d+)([,\n]-{0,1}\d+)*$/;
//Checking if a new delimiter is provided (no regex special characters such as "+" or "?")
//If special characters are to be allowed, they must be preceded by a double backslash (\\) in the delimiter
if(/^(\/\/\D+\n)/.test(numberString)) {
	let len = 0; //delimiter length (in case a set of characters is used)
    while(numberString[len] != "\n")
    len++;
let delimiter = numberString.substring(2,len); //Extracting the delimiter
regex = new RegExp(delimiter); //Creating a regex with this delimiter
numberString = numberString.substring(len+1); //Removing the first line from numberString (i.e. keeping the string without the new delimiter format)
pattern = /^(-{0,1}\d+)(\D+-{0,1}\d+)*$/; //Pattern to use if a new delimiter is provided
}
if(pattern.test(numberString)) { //Verifying that numberString matches the pattern
let sum = 0; 
const res = numberString.split(regex); //Numbers to add are separated by regex matches 
for (let i of res)
	sum += Number(i); //Adding/Subtracting numbers
return sum;
}
else
	return "Incorrect string format !"; 
}

module.exports = add;
