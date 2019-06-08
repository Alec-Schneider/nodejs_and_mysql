// for(var i = 0; i < 500; i++) {
//     console.log("Hello world!");
// }
// Could use this to randomly insert users into database!

//console.log(faker.internet.email());
//console.log(faker.date.past());
//console.log(faker.address.city());



var faker = require("faker");
var mysql  = require("mysql");

var connection = mysql.createConnection({
    host : 'localhost',
    user : 'aschneid3',
    database : 'join_us'
});


// var q = 'SELECT COUNT(*) AS total FROM users ';

// connection.query(q, function (error, results, fields) {
//   if (error) throw error;
//   console.log(results[0].total);
// });

// connection.end();

//Insert data
// var y = 'INSERT INTO users(email) VALUES ("rusty@gmail.com")';

// connection.query(y, function (error, results, fields) {
//   if (error) throw error;
//   console.log(results);
// });



// Inserting data take 2
// for(var i = 0; i < 50; i++) {
// var person = {email: faker.internet.email()};
// connection.query('INSERT INTO users SET ?', person, function(err, result) {
//   if (err) throw err;
//   console.log(result);
// });
// }
// connection.end();


// Insert random dat as well
// need "yyyy-mm-dd hh:mm:ss"
// var person = {
//     email: faker.internet.email(),
//     created_at: faker.date.past()
// };

// var end_result = connection.query('INSERT INTO users SET ?', person, function(err, result) {
//   if (err) throw err;
//   console.log(result);
// });


// Insert lot of data
var data = [];
for(var i = 0; i < 500; i++){
data.push([
    faker.internet.email(),
    faker.date.past()
    ]);
}

var q = 'INSERT INTO users (email, created_at) VALUES ?';

connection.query(q, [data], function(err, result) {
  console.log(err);
  console.log(result);
});

connection.end();

//root user
//aschneid3

