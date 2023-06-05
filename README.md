# cross-js-base (2018)

This project includes some very generic tools for front-end use I wanted to write myself.
I'm not trying to replace Lodash or other battle-tested libraries. I just sometimes write vanilla JS like this for practice.  Everything is Babel-transpiled into `"browsers": "> 0.25%, not dead"`.


## Retrospect in 2023

I hardly remember my methods and motives of 2018, but I think in this project I just intended to collect various scripts common to my projects. I'm fairly certain I thought I would end up putting more scripts in this than what you see.

I have updated this package (as of 2023) so that it builds and all tests pass. It is still very much JavaScrip written in the style of its time, circa 2018. I have not attempted to modernize it. I simply updated the dependencies so you can install it in a dev environment with 0 vulnerabilities reported (at least on my machine, using Windows 11 and Node v18.16.0 in June 2023). My goal was just to make this package something I'm slightly less embarrassed of, but that does not mean this is code like what I would write today.

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
// for obvious reasons, the build method does not
// overwrite the existing content defined at the key
// "my-unique-index"; it creates a new data structure 
// if necessary.  The value of assigned to 
// "my-unique-index" in localStorage should be a 
// JSON-formated array or null.  That is: it should be a 
// string that JSON.parse can parse into a JavaScript
// array or it should be null.   If the existing 
// data is anything else, the build method will throw
// an error.
localStore.addItem("apple", "1");
// for most predictable results, both key and value
// should be strings because that is how browser
// local storage works.  This tool will not 
// fail elegantly if you use it incorrectly
localStore.addItem("pear", "2");
localStore.getItem("apple"); // returns "1"
localStore.getItem("bear"); // on unknown key returns null
localStore.getIndex(); // returns array: ["apple", "pear"]
// the index is not guaranteed to be returned
// in any particular order
localStore.removeItem("apple");
localStore.getIndex(); // returns array: ["pear"]
localStore.removeItem("apple"); // does nothing; no error
localStore.addItem("pear", "5"); // no error, just updates value
// addItem is the way to update the value associated 
// to a key; there is no separate method for that

```

### StringHash

```import {StringHash} from "cross-js-base"```

```let hash = StringHash.hash("apple");```
