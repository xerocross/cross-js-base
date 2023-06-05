# cross-js-base (2018)

This project includes some very generic tools for front-end use I wanted to write myself.
I'm not trying to replace Lodash or other battle-tested libraries. I just sometimes write vanilla JS like this for practice.  Everything is Babel-transpiled into es2015 and minified.  The built
cross-js-base.js file will always include all of its dependencies (if any). 

This project is **no longer maintained**. See the Retrospect in 2023.

## Retrospect in 2023

I hardly remember my methods and motives of 2018, but I think in this project I just intended to collect various scripts common to my projects. I'm fairly certain I thought I would end up putting more scripts in this than what you see.

### Known Issues

I can see several noteworthy mistakes I made in writing this project&mdash;not problems in functionality, but in the dev environment. One of them is that I included many dev dependencies in the general dependencies section in my package.json file. I think when I set up those dependencies I just borrowed a list wholesale from another project, including some that I did not actually need for this project. I did not fully understant how to correctly configure a package.json file at the time, and I didn't really understand which dependencies I needed.

Unless and until I repair this project and modernize it, it remains outdated and has flaws. Fixing this is not high on my list of priorities. The code here **does not represent how I would create an npm package today**.

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
