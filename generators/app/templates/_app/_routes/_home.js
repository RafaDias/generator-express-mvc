module.exports = function (app) {
  app.route('/')
    .get(app.controllers.home.index);
};
