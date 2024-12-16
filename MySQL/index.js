const { faker } = require('@faker-js/faker'); // FAKER IS USED TO GENERATE THE FAKE DATA FOR THE DATABASES. 
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'backend',
    password: 'Jayesh@1904'
});

let query = 'insert into user(userId ,username ,email ,password) values (?,?,?,?)';

try {
    connection.query("SHOW TABLES", (err, result) => {
        if (err) throw err;
        console.log(result);
    });
} catch (err) {
    console.log(err);
}

let getRandomUser = () => {
    return {
        userId: faker.string.uuid(),
        username: faker.internet.username(), // before version 9.1.0, use userName()
        email: faker.internet.email(),
        password: faker.internet.password(),
    };
}

console.log(getRandomUser());