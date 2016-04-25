'use strict';

var APP = window.APP = window.APP || {};

APP.<%= appName %> = (function(){



	function bindEventsToUI(){
		console.log('Binding events to UI');
	}
	
	function init(){
		bindEventsToUI();
	}

	return {
		init:init
	}

})();