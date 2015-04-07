var db = require('../db');


module.exports = {
  markers: function (zip, callback) {
      var queryString = "select restname, score, lat, longi from scores where zipcode = "+zip+";"
      console.log("querystring = ", querystring);
      db.dbConnection.query(queryString, function(err, result){
        if (err) throw err;
        callback(result)
      })


  // markers: {
  //   get: function (zip, callback) {
  //     var queryString = "select restname, score, lat, longi from scores where zipcode = "+zip+";"
  //     console.log("querystring = ", querystring);
  //     db.dbConnection.query(queryString, function(err, result){
  //       if (err) throw err;
  //       callback(result)
  //     })

    }
    // post: function (message, roomname, username, callback) {
    //   var params = [message, roomname, username]
    //   var queryString='INSERT INTO messages (text, roomname, user_id) VALUES (?,?,(SELECT id FROM users WHERE name = ?));'
    //   db.dbConnection.query(queryString, params,function(err, result){
    //     if (err) throw err;
    //     callback(result)
    //   })
    // }
  }

  // users: {
  //   get: function (callback) {
  //     db.dbConnection.query('SELECT * FROM users;', function(err, result){
  //       if (err) throw err;
  //       callback(result)
  //     })
  //   },
    // post: function (user, callback) {
    //   db.dbConnection.query('INSERT INTO users (name) VALUES (?);',[user], function(err, result, fields){
    //     if (err) throw err;
    //     callback(result)
    //   })
      
    // }
  // }
// };
