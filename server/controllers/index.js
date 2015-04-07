var models = require('../models');
var bluebird = require('bluebird');
var db = require('../db')



module.exports = {
  markers: {
    get: function (req, res) {
      models.markers.get(function(result){
        console.log("result from controllers ", result);
        //if (err){console.log("messages.get error")};
        // res.json(result)
      });
    }, // a function which handles a get request for all messages
    // post: function (req, res) {
    //   var message = req.body.message;
    //   var roomname= req.body.roomname;
    //   var username = req.body.username;
    //   models.messages.post(message, roomname, username, function(err, result){
    //     res.json(result)
    //   })
    //  // a function which handles posting a message to the database
    // }
  }

  // users: {
  //   // Ditto as above
  //   get: function (req, res) {
  //     models.users.get(function(err, result){
  //       if (err){console.log("users.get error")};
  //       res.json(result)
  //     });
  //   },
  //   post: function (req, res) {
  //     //console.log("inside controllers users.post")
  //     models.users.post(req.body.username, function(err, result){
  //       res.json(result)        
  //     })
  //   }
  // }
}

