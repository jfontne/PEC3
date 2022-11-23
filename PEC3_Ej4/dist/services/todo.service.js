"use strict";
/**
 * @class Service
 *
 * Manages the data of the application.
 */
class TodoService {
    onTodoListChanged(callback) { }
    ;
    constructor() {
        let d = localStorage.getItem("todos");
        let dd;
        let ddd;
        if (typeof d === 'string') {
            dd = JSON.parse(d);
            ddd = dd.map(todo => new Todo(todo));
        }
        else {
            ddd = [];
        }
        this.todos = ddd;
    }
    bindTodoListChanged(callback) {
        this.onTodoListChanged = callback;
    }
    _commit(todos) {
        this.onTodoListChanged(todos);
        localStorage.setItem("todos", JSON.stringify(todos));
    }
    addTodo(text) {
        this.todos.push(new Todo({ text, complete: false }));
        this._commit(this.todos);
    }
    editTodo(id, updatedText) {
        this.todos = this.todos.map(todo => todo.id === id
            ? new Todo(Object.assign(Object.assign({}, todo), { text: updatedText }))
            : todo);
        this._commit(this.todos);
    }
    deleteTodo(_id) {
        this.todos = this.todos.filter(({ id }) => id !== _id);
        this._commit(this.todos);
    }
    toggleTodo(_id) {
        this.todos = this.todos.map(todo => todo.id === _id ? new Todo(Object.assign(Object.assign({}, todo), { complete: !todo.complete })) : todo);
        this._commit(this.todos);
    }
}
