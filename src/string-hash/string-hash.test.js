import StringHash from "./string-hash.js";

test("hash on invalid type throws error", function() {
    let key = {a : "a"};
    expect(function(){
        StringHash.hash(key);
    }).toThrow();
});

test("hash returns an integer on valid input", function() {
    let key = "apple";
    let hash = StringHash.hash(key);
    let floor = Math.floor(hash);
    expect(floor == hash).toBe(true);
});