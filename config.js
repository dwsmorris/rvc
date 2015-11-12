/*globals define*/

define([
	"require",
	"ramda",
	"./dependencies/joyscript/config"
], function (
	require,
	R,
	jys_config
) {
	return R.merge(jys_config, {
		//paths: { // TODO: pull request
		//}
	});
});
