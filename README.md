# async-foreach

## Syntax
```javascript
Lib.asyncForEach(sourceArray, itemCallback, doneCallback);
```

## Example

```javascript
Lib.asyncForEach([ 1, 2, 3], function (item, index, next) {
	console.log('Processing item %s at %s', item, index);
	setTimeout(next, 10);
}, function () {
	console.log('Done');
});
```