const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/test') // Here when we connect to the database, we need to specify the database name. And Whenever we connect the mongoose it return a promise because database can take time to connect so we need to handle that promise.Using then() method we can handle that promise.
//   .then(() => console.log('Connected!')); 

connect().then((res) => {
  console.log('Connected!');
}).catch((err) => {
  console.log('Error:', err);
});

async function connect() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Backend');
}

// SCHEMA DEFINES THE SHAPE OF THE DOCUMENTS WITHIN A COLLECTION

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

// MODEL IS A CLASS THAT IS USED TO CREATE DOCUMENTS

const User = mongoose.model('User', userSchema); // 1ST ARGUMENT IS THE NAME OF THE COLLECTION AND 2ND ARGUMENT IS THE SCHEMA.

// NOW TO CREATE A DOCUMENT WE NEED TO CREATE AN OBJECT OF THE MODEL

// const user1 = new User({ name: 'John', email: 'John@gmail.com', age: 25 });

// user1.save(); // save() METHOD IS USED TO SAVE THE DOCUMENT TO THE DATABASE.

// const user2 = new User({ name: 'Doe', email: 'Doegmail.com', age: 20 });

// user2.save().then((res) => {
//   console.log(res); // IT WILL PRINT THE DOCUMENT THAT WE HAVE SAVED.
// }).catch((err) => {
//   console.log(err);
// });

// TO INSERT MULTIPLE DOCUMENTS AT ONCE WE CAN USE insertMany() METHOD

// User.insertMany([
//   { name: 'Jane', email: 'Jane@gamil.com', age: 20 },
//   { name: 'Doa', email: 'Doa@gmail.com', age: 23 },
//   { name: 'Tony', email: 'Tony@gmail.com', age: 24 },
// ]).then((res) => {
//   console.log(res);
// }).catch((err) => {
//   console.log(err);
// });

// OBJECT BUFFERING IS USED IN MONGOOSE WHICH HELP US TO USE THE MODEL BEFORE CONNECTING TO THE DATABASE.

// TO FIND THE DOCUMENTS WE CAN USE find() METHOD

// User.find({age: {$gt:21}}).then((res) => { // find() METHOD RETURNS A MONGOOSE QUERY WHICH HAS A then() METHOD.
//   console.log(res);
// }).catch((err) => {
//   console.log(err);
// });

// TO FIND ONE DOCUMENT WE CAN USE findOne() METHOD

User.findOne({ age: { $gt: 21 } }).then((res) => { // find() METHOD RETURNS A MONGOOSE QUERY WHICH HAS A then() METHOD.
  console.log(res);
}).catch((err) => {
  console.log(err);
});

// to FIND BY ID WE CAN USE findById() METHOD 

User.findById('67671a050438a97f06e97d6e').then((res) => {
  console.log(res);
}).catch((err) => {
  console.log(err);
});

// TO UPDATE THE DOCUMENT WE CAN USE updateOne() METHOD

User.updateOne({ _id: '67671a050438a97f06e97d6e' }, { name: 'John Doe' })  //1ST ARGUMENT IS THE ID OF THE DOCUMENT THAT WE WANT TO UPDATE AND 2ND ARGUMENT IS THE OBJECT THAT WE WANT TO UPDATE.
  .then((res) => {
    console.log(res);
  }).catch((err) => {
    console.log(err);
  });  // IT WILL UPDATE THE DOCUMENT WITH THE GIVEN ID.

// TO UPDATE MULTIPLE DOCUMENTS WE CAN USE updateMany() METHOD

User.updateMany({ age: { $gt: 21 } }, { age: 29 })
  .then((res) => {
    console.log(res);
  }).catch((err) => {
    console.log(err);
  });

// TO DELETE THE DOCUMENT WE CAN USE deleteOne() METHOD

User.deleteOne({ _id: '67671a050438a97f06e97d6e' })
  .then((res) => {
    console.log(res);
  }).catch((err) => {
    console.log(err);
  });