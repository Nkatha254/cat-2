/**
 * Person Class (Abstract)
 * Demonstrates: Abstraction and Encapsulation
 * Base class for all person entities in the system
 */

export class Person {
  // Private attributes - Encapsulation
  #id;
  #name;

  constructor(id, name) {
    if (new.target === Person) {
      throw new TypeError("Cannot instantiate abstract class Person");
    }
    this.#id = id;
    this.#name = name;
  }

  // Getters - Encapsulation
  getId() {
    return this.#id;
  }

  getName() {
    return this.#name;
  }

  // Setters - Encapsulation
  setId(id) {
    this.#id = id;
  }

  setName(name) {
    this.#name = name;
  }

  // Abstract method - Polymorphism
  // Subclasses must implement this method
  display() {
    throw new Error("display() method must be implemented in subclass");
  }

  // Concrete method in abstract class
  printBasicInfo() {
    return `ID: ${this.#id} | Name: ${this.#name}`;
  }

  // Additional utility method
  getInfo() {
    return {
      id: this.#id,
      name: this.#name
    };
  }
}
