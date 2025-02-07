```javascript
// Correct usage of $inc operator with a numeric value
db.collection('myCollection').updateOne({ name: "John Doe" }, { $inc: { age: 1 } });

//Alternative solution if age is initially a string
db.collection('myCollection').updateOne({ name: "John Doe" }, {$set: {age: parseInt(age) + 1}});
```