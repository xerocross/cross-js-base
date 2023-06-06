import localStorageWrapper from "./local-storage-wrapper.js";

let globalLocalStorage;

beforeAll(() => {
    globalLocalStorage = localStorage;
});

beforeEach(() => {
    localStorage = globalLocalStorage;
});

test("if localStorage is unavailable setItem does not throw", function () {
    localStorage = null;
    expect(()=>{
        localStorageWrapper.setItem("test", "apple");
    }).not.toThrow();
});

test("if localStorage available can set and get", function () {
    localStorageWrapper.setItem("apple", "pear");
    expect(localStorageWrapper.getItem("apple")).toEqual("pear");
});

test("if localStorage available can set and remove", function () {
    localStorageWrapper.setItem("apple", "pear");
    localStorageWrapper.removeItem("apple");
    expect(localStorageWrapper.getItem("apple")).toBe(null);
});
