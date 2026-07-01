import { HashMap } from "./hashMap.js";

describe("HashMap", () => {
  let map;

  beforeEach(() => {
    map = new HashMap();
  });

  test("should set and get values", () => {
    map.set("apple", "red");
    expect(map.get("apple")).toBe("red");
  });

  test("should update existing key", () => {
    map.set("apple", "red");
    map.set("apple", "green");
    expect(map.get("apple")).toBe("green");
  });

  test("should return null for non-existing key", () => {
    expect(map.get("unknown")).toBeNull();
  });

  test("has() should work correctly", () => {
    map.set("apple", "red");
    expect(map.has("apple")).toBe(true);
    expect(map.has("banana")).toBe(false);
  });

  test("should remove key", () => {
    map.set("apple", "red");
    expect(map.remove("apple")).toBe(true);
    expect(map.has("apple")).toBe(false);
    expect(map.length()).toBe(0);
  });

  test("remove non-existing key returns false", () => {
    expect(map.remove("ghost")).toBe(false);
  });

  test("length() returns correct count", () => {
    map.set("a", 1);
    map.set("b", 2);
    expect(map.length()).toBe(2);
  });

  test("clear() resets the map", () => {
    map.set("a", 1);
    map.set("b", 2);
    map.clear();
    expect(map.length()).toBe(0);
    expect(map.get("a")).toBeNull();
  });

  test("keys and values", () => {
    map.set("apple", "red");
    map.set("banana", "yellow");

    expect(map.keys()).toContain("apple");
    expect(map.values()).toContain("yellow");
  });

  test("should resize when load factor is reached", () => {
    const initialCapacity = map.capacity;

    // Add enough items to trigger resize (load factor 0.75 * 16 = 12)
    for (let i = 0; i < 13; i++) {
      map.set(`key${i}`, i);
    }

    expect(map.capacity).toBeGreaterThan(initialCapacity);
  });

  test("should handle long keys", () => {
    const longKey = "a".repeat(100);
    map.set(longKey, "value");
    expect(map.get(longKey)).toBe("value");
  });
});