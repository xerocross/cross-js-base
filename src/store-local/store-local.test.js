import StoreLocal from "./store-local.js";

beforeEach(() => {
    localStorage.clear();
});


test("building from null creates new array", function () {
    localStorage.setItem("test-key", null);
    const storeLocal = StoreLocal.build("test-key");
    storeLocal.addItem("blue", "5");
    expect(storeLocal.getIndex().length).toBe(1);
});

test("building from malformed data throws error (nonsense)", function () {
    localStorage.setItem("test-key", "{apple]},plot");
    expect(function () {
        StoreLocal.build("test-key");
    }).toThrow(new Error("store-local: data not formatted correctly"));
});

test("building from malformed data throws error (plain string)", function () {
    localStorage.setItem("test-key", "apple");
    expect(function () {
        StoreLocal.build("test-key");
    }).toThrow(new Error("store-local: data not formatted correctly"));
});

test("building from malformed data throws error (non-array object)", function () {
    localStorage.setItem("test-key", "{\"apple\":\"flower\"");
    expect(function () {
        StoreLocal.build("test-key");
    }).toThrow(new Error("store-local: data not formatted correctly"));
});

test("can use localstorage mock", function () {
    const storeLocal = StoreLocal.build("test-key");
    expect(storeLocal).not.toBe(null);
});

test("can store a key,value and get it back", function () {
    const storeLocal = StoreLocal.build("test-key");
    storeLocal.addItem("apple", "4");
    expect(storeLocal.getItem("apple")).toBe("4");
});

test("building twice at same key references same data", function () {
    const storeLocal1 = StoreLocal.build("test-key");
    storeLocal1.addItem("apple", "1");
    const storeLocal2 = StoreLocal.build("test-key");
    expect(storeLocal2.getItem("apple")).toBe("1");
});

test("get value of unknown key returns undefined", function () {
    const storeLocal = StoreLocal.build("test-key");
    expect(storeLocal.getItem("sammy")).toBe(null);
});


test("can add two items and list they keys", function () {
    const storeLocal = StoreLocal.build("test-key");
    storeLocal.addItem("alpha", "4");
    storeLocal.addItem("beta", "5");
    const index = storeLocal.getIndex();
    const test = (index.indexOf("alpha") > -1) && (index.indexOf("beta") > -1) && (index.length == 2);
    expect(test).toBe(true);
});


test("can add and remove an item", function () {
    const storeLocal = StoreLocal.build("test-key");
    storeLocal.addItem("alpha", "4");
    storeLocal.addItem("beta", "5");
    storeLocal.removeItem("alpha");
    expect(storeLocal.getIndex().indexOf("alpha")).toBe(-1);
});

test("removing a nonexistent key does nothing", function () {
    const storeLocal = StoreLocal.build("test-key");
    storeLocal.removeItem("alpha");
    expect(storeLocal.getIndex().indexOf("alpha")).toBe(-1);
});

test("adding a duplicate key updates the value, no error", function () {
    const storeLocal = StoreLocal.build("test-key");
    storeLocal.addItem("alpha", "4");
    storeLocal.addItem("alpha", "6");
    expect(storeLocal.getItem("alpha")).toBe("6");
});
