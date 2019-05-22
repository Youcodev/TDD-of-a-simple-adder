# TDD-of-a-simple-adder
Test-Driven Development with Mocha of an addition app that simply adds integers together  
Input numbers are entered as a string and separated by commas, but other delimiters can be used  
To change a delimiter, the input must start with "//[newDelimiter]\n". For example, "//;\n1;2;3" should return 6  
A new line (\n) is accepted instead of a comma, so it's possible to mix commas and new lines  
For a single input number, the app returns this number and in case of an empty input, it returns 0   
To run the tests, type 'mocha test.js' in the command line
