'use strict';
// Require dependencies
var yeoman = require('yeoman-generator');

module.exports = yeoman.Base.extend({
  prompting: function () {
    var done = this.async();
    this.prompt({
      type: 'input',
      name: 'name',
      message: 'Your project name',
      // Defaults to the project's folder name if the input is skipped
      default: this.appname
    }, function (answers) {
      this.props = answers;
      this.log(answers.name);
      done();
    }.bind(this));
  },
  writing: {
  // Copy the configuration files
    config: function () {
      this.fs.copyTpl(
          this.templatePath('_package.json'),
          this.destinationPath('package.json'), {
            name: this.props.name
          }
      );
      this.fs.copyTpl(
          this.templatePath('_bower.json'),
          this.destinationPath('bower.json'), {
            name: this.props.name
          }
      );
      this.fs.copy(
        this.templatePath('bowerrc'),
        this.destinationPath('.bowerrc')
      );
    },
    // Copy application files
    app: function () {
      // Server file
      this.fs.copyTpl(
        this.templatePath('_server.js'),
        this.destinationPath('server.js'));

      // Configuration file
      this.fs.copy(
        this.templatePath('_config/_express.js'),
        this.destinationPath('config/express.js'));

      // MVC Folder structure - Controller
      this.fs.copy(
        this.templatePath('_app/_controllers/_home.js'),
        this.destinationPath('app/controllers/home.js'));
      // MVC Folder structure - Models
      this.fs.copyTpl(
        this.templatePath('_app/_models/_model.js'),
        this.destinationPath('app/models/model.js'), {
          name: this.props.name
        }
      );
      // MVC Folder structure - Views
      this.fs.copyTpl(
        this.templatePath('_app/_views/_home.ejs'),
        this.destinationPath('app/views/home.ejs'), {
          name: this.props.name
        }
      );
      // Routes
      this.fs.copyTpl(
        this.templatePath('_app/_routes/_home.js'),
        this.destinationPath('app/routes/home.js'), {
          name: this.props.name
        }
      );
      // Public/
      this.fs.copy(
        this.templatePath('_public/_css/_app.css'),
        this.destinationPath('public/css/app.css')
      );
      this.fs.copy(
        this.templatePath('_public/_js/_app.js'),
        this.destinationPath('public/js/app.js')
      );
    },
    // Install Dependencies
    install: function () {
      this.installDependencies();
    }
  }
});
