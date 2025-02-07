# MongoDB $inc Operator Error with String Value

This repository demonstrates an uncommon error in MongoDB when using the `$inc` operator with a string field.  The `$inc` operator is designed to increment numeric values, and attempting to use it with a string will cause an error.

## Bug
The `bug.js` file contains the erroneous code that attempts to increment a string field using `$inc`.

## Solution
The `bugSolution.js` file shows the correct way to handle this situation; ensure the field is a number before incrementing using `$inc`, or use `$set` to update the value properly if string is the correct field type.