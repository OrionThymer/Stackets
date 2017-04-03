//require each controller, will refer to each controller in the routes
var snippetsController = require('../controllers/snippets-controller.js');
var tagsController = require('../controllers/tags-controller.js');
var topicController = require('../controllers/topics-controller.js');
var languageController = require('../controllers/languages-controller.js');
var snippetTagsController = require('../controllers/snippet-tags-controller.js');
var usersController = require('../controllers/users-controller.js');


module.exports = function(app, express) {
  //get all the snippets
  app.get('/api/snippets', snippetsController.get);
  //get the most recent snippets
  app.get('/api/snippets/recent', snippetsController.getMostRecent);
  //get a snippet by its id
  app.get('/api/snippets/:id', snippetsController.getById);
  //create a new snippet
  app.post('/api/snippets', snippetsController.post);
  //create a new user
  app.post('/api/users', usersController.post);
  //get all the tags
  app.get('/api/tags', tagsController.get);
  //get all the topics
  app.get('/api/topics', topicController.get);
  //get all the languages
  app.get('/api/languages', languageController.get);
  //get the table data when tags belong to snippets and snippets belong to tags (snippets and tag join table)
  app.get('/api/SnippetTags', snippetTagsController.get);

  //direct to about page
  app.get('/about', function(req, res) {
    res.redirect('/');
  });
  //direct to search page
  app.get('/search', function(req, res) {
    res.redirect('/');
  });
  //direct to page wher a user can add a snippet
  app.get('/add', function(req, res) {
    res.redirect('/');
  });
  //redirect to the home page
  app.get('/*', function(req, res) {
    res.redirect('/');
  });

  //delete a snippet by id
  app.delete('/api/snippets/:id', snippetsController.delete);

  //edit a prexisting snippet by id
  app.put('/api/snippets/:id/edit', snippetsController.edit);

};
