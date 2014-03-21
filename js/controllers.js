'use strict';

/* Controllers */

angular.module('myApp.controllers', ['ngRoute']).
  controller('MyCtrl1', [ "$scope", "$http", function(scope, http) {
  		scope.adjectives = [];
  		scope.adjective = "";
  		scope.nouns = [];
		scope.noun = "";

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

		scope.refresh = function(){
			scope.adjective = scope.adjectives[Math.floor(Math.random()*scope.adjectives.length)];
			scope.noun = scope.nouns[Math.floor(Math.random()*scope.nouns.length)];	
		}  
		
  }]);

