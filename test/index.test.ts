import sum from "../src";

describe("sdk-template", () => {
    test("invoke crypto.getRandomValues should return ten values of UInt8Array", () => {
        let t = new Uint8Array(10);
        expect(crypto.getRandomValues(t)).toHaveLength(10);
    });
});
