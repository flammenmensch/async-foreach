/**
 * Created by flammenmensch on 26.05.14.
 */
window.Lib = (function () {
	return {
		/**
		 * Anynchronous forEach
		 * @param source
		 * @param fn
		 * @param done
		 */
		asyncForEach: function (source, fn, done) {
			source = source.slice(0);
			source.reverse();

			var index = 0;

			var advance = function () {
				setTimeout(source.length > 0 ? process : done, 0);
			};

			var process = function () {
				var item = source.pop();

				fn(item, index, function next() {
					index++;
					advance();
				});
			};

			advance();
		}
	};
} ());