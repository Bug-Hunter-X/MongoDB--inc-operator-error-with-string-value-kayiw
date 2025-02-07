```javascript
// Incorrect usage of $inc operator with a string value
db.collection('myCollection').updateOne({ name: "John Doe" }, { $inc: { age: "1" } });
```