/**
 * Created by flammenmensch on 26.05.14.
 */
(function () {
	var source = [ 1, 2, 3 ];

	asyncTest('asyncForEach item test', function () {
		expect(4);

		Lib.asyncForEach(source, function (item, index, next) {
			ok(true, 'Passed for item at index ' + index);

			next();
		}, function () {
			ok(true, 'Passed for all items');
		});
	})
} ());