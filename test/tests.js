/**
 * Created by flammenmensch on 26.05.14.
 */
(function () {
	var source = [ 0, 1, 2, 3 ];

	asyncTest('asyncForEach test', function () {
		expect(5);

		Lib.asyncForEach(source, function (item, index, next) {
			next();
			equal(item, index, 'Item equals index');
		}, function () {
			ok(true, 'Passed for all items');
			start();
		});
	})
} ());