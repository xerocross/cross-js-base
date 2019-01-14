# cross-js-base

Some very generic tools for front-end use I wanted to just write myself.
I'm not trying to replace Lodash.  I just sometimes don't want to use 
Lodash.

## Installation

There's an npm package, so you can install it as

```npm install cross-js-base```

or 

```yarn add cross-js-base```

Then to use the individual tools import them by writing, for 
example

```import { StoreLocal } from "cross-js-base"```

## Testing

Testing is written using Jest.  After doing a full ``yarn install`` run

```yarn run test```

## Tools

### StoreLocal

```import { StoreLocal } from "cross-js-base"```

StoreLocal is a small convenience wrapper around the browser
localStorage object.

```
let localStore = StoreLocal.build("my-unique-index");
localStore.addItem("apple", "1");
// for most predictable results, both key and value
// should be strings because that is how browser
// local storage works.  This tool will not 
// fail elegantly if you use it incorrectly
localStore.addItem("pear", "2");
localStore.getItem("apple"); // returns "1"
localStore.getIndex(); // returns array: ["apple", "pear"]
// the index is not guaranteed to be returned
// in any particular order
localStore.removeItem("apple");
localStore.addItem("pear", "5"); // no error, just updates

```


