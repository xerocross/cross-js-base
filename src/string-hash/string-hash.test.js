import StringHash from "./string-hash.js";

test("hash on invalid type throws error", function () {
    const key = {a : "a"};
    expect(function () {
        StringHash.hash(key);
    }).toThrow();
});

test("hash returns an integer on valid input", function () {
    const key = "apple";
    const hash = StringHash.hash(key);
    const floor = Math.floor(hash);
    expect(floor == hash).toBe(true);
});
