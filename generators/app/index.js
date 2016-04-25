'use strict';
//Require dependencies
var generators = require('yeoman-generator');
var _ = require('lodash');
var userAnswers;

module.exports = generators.Base.extend({

	initializing: function(){
		console.log('Creating new component...');
	},
	prompting: function(){
		var done = this.async();
	    this.prompt({
	      	type    : 'input',
	      	name    : 'appname',
	      	message : 'Your app\'s name:',
	      	default : this.appname, // Default to current folder name
	      	store 	: true
	    }, function (answers) {
	    	userAnswers = answers;
	      	done();
	    }.bind(this));
	},
	configuring: function() {
		
	},
	default: function() {
		
	},
	writing: function() {
		this.fs.copyTpl(
	    	this.templatePath('*'),
	    	this.destinationPath('components/'+userAnswers.appname),
	    	{ 	title: 		userAnswers.appname,
	    		appName: 	userAnswers.appname
	    	}
	    );
	    /* Gruntjs
	    | grunt or gulp can be created here, best approach
	    | might be to have a sub-generator for the 
	    | whole project.
	    */
	    // this.gruntfile.insertConfig("compass", "{ watch: { watch: true } }");
	    // this.gruntfile.registerTask('build', 'compass');
	    // this.gruntfile.registerTask('build', ['compass', 'uglify']);

	},
	conflicts: function() {
		// console.log('conflicts');
	},
	install: function() { // Here we install some dependencies
		// console.log('Installing lodash & bower');
		// this.npmInstall(['lodash','bower'], { 'saveDev': true });
	},
	end: function() {
		console.log('The new component \''+userAnswers.appname+'\' has been successfully created.');
	}
});