const Browser = require('zombie');
import StoreLocal from "./store-local.js";


// test("can get browser", function(done){
    
    
//     //let browser = new Browser();
//     //browser.visit("http://localhost:3000/test.html")

//     // .then(function() {
//     //     browser.window.localStorage.setItem("test", "apple");
//     //     expect(browser.window.localStorage.getItem("test")).toBe("pear");
//     //     done()
//     // })
//     // .catch(function(e){
//     //     browser.window.localStorage.setItem("test", "apple");
//     //     expect(browser.window.localStorage.getItem("test")).toBe("pear");
//     //     done();
//     // });
// })

test("can use localstorage mock",function() {
    let storeLocal = StoreLocal.build("test-key");
    expect(storeLocal).not.toBe(null);
});

test("can store a key,value and get it back",function() {
    let storeLocal = StoreLocal.build("test-key");
    storeLocal.addItem("apple", "4");
    expect(storeLocal.getItem("apple")).toBe("4");
});


test("can add two items and list they keys",function() {
    let storeLocal = StoreLocal.build("test-key");
    storeLocal.addItem("alpha", "4");
    storeLocal.addItem("beta", "5");
    let index = storeLocal.getIndex();
    let test = (index.indexOf("alpha") > -1) && (index.indexOf("beta") > -1) && (index.length  == 2);
    expect(test).toBe(true);
});


test("can add and remove an item",function() {
    let storeLocal = StoreLocal.build("test-key");
    storeLocal.addItem("alpha", "4");
    storeLocal.addItem("beta", "5");
    storeLocal.removeItem("alpha");
    expect(storeLocal.getIndex().indexOf("alpha")).toBe(-1);
});

test("removing a nonexistent key does nothing",function() {
    let storeLocal = StoreLocal.build("test-key");
    storeLocal.removeItem("alpha");
    expect(storeLocal.getIndex().indexOf("alpha")).toBe(-1);
});

test("adding a duplicate key updates the value, no error",function() {
    let storeLocal = StoreLocal.build("test-key");
    storeLocal.addItem("alpha", "4");
    storeLocal.addItem("alpha", "6");
    expect(storeLocal.getItem("alpha")).toBe("6");
});