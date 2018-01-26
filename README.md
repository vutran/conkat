# conkat

> Merge arrays, objects, maps, and sets

## Install

```
$ npm i -S conkat
```

## Usage

### Merge Arrays

```js
import merge from 'conkat';

const a = [1, 2, 3];
const b = [4, 5, 6];

console.log(conkat(a, b));

// -> [1, 2, 3, 4, 5, 6]
```

### Merge Objects

```js
const a = {
  first_name: 'Vu',
}

const b = {
  last_name: 'Tran',
}

console.log(conkat(a, b));

// -> { first_name: 'Vu', last_name: 'Vu' }
```

### Merge ES2015 Sets

```js
const a = new Set();
a.add('foo');
a.add('bar');

const b = new Set();
b.add('baz');
b.add('qux');

console.log(conkat(a, b));

// -> Set { 'foo', 'bar', 'baz', 'qux' }
```

### Merge ES2015 Maps

```js
const a = new Map();
a.set('one', 1);
a.set('two', 2);

const b = new Map();
a.set('three', 3);

console.log(conkat(a, b));

// -> Map { 'one' => 1, 'two' => 2, 'three' => 3 }
```

## License

MIT © [Vu Tran](https://github.com/vutran/conkat)
