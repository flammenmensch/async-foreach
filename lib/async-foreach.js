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
			var count = source.length;
			var index = -1;

			var advance = function advance() {
				index++;

				if (index < count) {
					setTimeout(process, 0);
				} else {
					if (done) {
						setTimeout(done, 0);
					}
				}
			};

			var process = function process() {
				var item = source[index];

				if (!fn) {
					advance();
				} else {
					fn(item, index, function next() {
						advance();
					});
				}
			};

			advance();
		}
	};
} ());