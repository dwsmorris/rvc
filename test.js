/*globals require, window*/

require.config({
	baseUrl: "./",
	paths: {
		"ramda": "./dependencies/ramda/dist/ramda",
		"lodash": "./dependencies/lodash/lodash",
		"jasmine": "./dependencies/jasmine/lib/jasmine-core/jasmine",
		"jasmine-html": "./dependencies/jasmine/lib/jasmine-core/jasmine-html",
		"boot": "./dependencies/jasmine/lib/jasmine-core/boot",
		"ractive": "./dependencies/ractive/perf/old-versions/0.7.2/ractive-legacy",
		"rvc": "dist/rvc",

		"1": "./jys/html/1"
	},
	shim: {
		'jasmine': {
			exports: 'window'
		},
		'jasmine-html': {
			deps: ['jasmine'],
			exports: 'jasmine'
		},
		'boot': {
			deps: ['jasmine-html'],
			exports: 'jasmine'
		}
	}
});

// Load Jasmine - This will still create all of the normal Jasmine browser globals unless `boot.js` is re-written to use the
// AMD or UMD specs. `boot.js` will do a bunch of configuration and attach it's initializers to `window.onload()`. Because
// we are using RequireJS `window.onload()` has already been triggered so we have to manually call it again. This will
// initialize the HTML Reporter and execute the environment.
require(["./config"], function (config) {

	require.config(config);

	// Load the specs
	require(['boot'], function (
    ) {
		require([
			"./jys/spec/1-spec"
		], function (
		) {
			// Initialize the HTML Reporter and execute the environment (setup by `boot.js`)
			window.onload();
		});
	});

});
