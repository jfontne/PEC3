"use strict";
/**
 * @class Model
 *
 * Manages the data of the application.
 */
class Todo {
    constructor({ text, complete = false }) {
        this.id = this.uuidv4();
        this.text = text;
        this.complete = complete;
    }
    uuidv4() {
        return Math.floor(Math.random() * 999999999);
    }
}
