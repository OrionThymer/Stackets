var db = require('../config/db.js');



module.exports = {

  post: function(req, res) {
    var params = {
      email: req.body.email
    };

    // tags: { '1': true, '3': true, 9': true }
    // We only want the keys, and in number format
    // var tags = Object.keys(req.body.tags).map(Number);

    db.User.create(params)
    .then(function (data) {
      console.log('we added to the user table in the db: ', data);
      res.status(201);
    });
      // .then(function (data) {
        // tags.forEach(function(item) {
        //   db.SnippetTag.create({
        //     "SnippetId": data.id,
        //     "TagId": item
        //   });
        // });

      // });
  }
};