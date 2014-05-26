/**
 * Created by flammenmensch on 26.05.14.
 */
window.Lib = (function () {
	return {
		/**
		 * Anynchronous forEach
		 * @param {Array} source
		 * @param {Function} fn
		 * @param {Function} done
		 */
		asyncForEach: function (source, fn, done) {
			source = source.slice(0);
			source.reverse();

			var index = 0;

			var advance = function () {
				if (source.length > 0) {
					setTimeout(process, 0);
				} else {
					if (done) {
						setTimeout(done, 0);
					}
				}
			};

			var process = function () {
				var item = source.pop();

				if (!fn) {
					advance();
				} else {
					fn(item, index, function next() {
						advance();
					});
				}

				index++;
			};

			advance();
		}
	};
} ());