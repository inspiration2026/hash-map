# HashMap

A custom HashMap data structure implementation in JavaScript as part of The Odin Project curriculum.

## Features

* `set(key, value)` - Add or update a key-value pair
* `get(key)` - Retrieve value by key (returns `null` if not found)
* `has(key)` - Check if a key exists
* `remove(key)` - Remove a key-value pair
* `length()` - Return number of stored entries
* `clear()` - Remove all entries
* `keys()` - Return array of all keys
* `values()` - Return array of all values
* `entries()` - Return array of all key-value pairs
* Automatic resizing when load factor (0.75) is reached
* Collision handling using separate chaining

## Technologies Used

* Vanilla JavaScript (ES6+ Classes)
* ES Modules
* Test Driven Development with Jest

## Testing

* Basic manual tests in `index.js`
* Comprehensive unit tests using **Jest**

## About

This project was created by **Roman Suslov** as part of [The Odin Project](https://www.theodinproject.com) JavaScript curriculum to deepen understanding of hash tables, hashing algorithms, collision resolution, and dynamic array resizing.