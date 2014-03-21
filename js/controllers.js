'use strict';

/* Controllers */

angular.module('myApp.controllers', ['ngRoute']).
  controller('MyCtrl1', [ "$scope", "$http", function(scope, http) {
  		console.log(scope);
  		scope.adjectives = [];
  		scope.nouns = [];
		scope.noun = "pickle";
		scope.adjective = "smelly";

		http.get('data/adjectives.json')
		  .then(function(result) {
		    scope.adjectives = result.data.adjectives;
		    scope.adjective = result.data.adjectives[Math.floor(Math.random()*result.data.adjectives.length)];
		});

		http.get('data/nouns.json')
		  .then(function(result) {
		    scope.nouns = result.data.nouns;
		    scope.noun = result.data.nouns[Math.floor(Math.random()*result.data.nouns.length)];	
		});
  }]);

/*
  'use strict';



angular.module('myApp.controllers', []).
  controller('MyCtrl1', [function() {

  }])
  .controller('MyCtrl2', [function() {

  }]);*/