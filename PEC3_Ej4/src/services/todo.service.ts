/**
 * @class Service
 *
 * Manages the data of the application.
 */

interface dades{
  id: number,
  text: string,
  complete: boolean,

}

class TodoService {
  todos: dades[];
  onTodoListChanged(callback:any){};
  
  constructor() {
    let d: string|null = localStorage.getItem("todos")
    let dd: dades[];
    let ddd: dades[];
    if (typeof d === 'string') {
      dd = JSON.parse(d);
      ddd = dd.map(
      todo => new Todo(todo)
    );
    }else
    {
      ddd=[];
    }
    this.todos= ddd;
  }

  bindTodoListChanged(callback:any) {
   this.onTodoListChanged = callback;
  }

  _commit(todos:dades[]) {
   this.onTodoListChanged(todos);
   localStorage.setItem("todos", JSON.stringify(todos));
  }

  addTodo(text: string) {
    this.todos.push(new Todo({ text, complete: false }));

    this._commit(this.todos);
  }

  editTodo(id: number, updatedText: string) {
    this.todos = this.todos.map(todo =>
      todo.id === id
        ? new Todo({
            ...todo,
            text: updatedText
          })
        : todo
    );

    this._commit(this.todos);
  }

  deleteTodo(_id: number) {
    this.todos = this.todos.filter(({ id }:{id:number}) => id !== _id);

    this._commit(this.todos);
  }

  toggleTodo(_id: number) {
    this.todos = this.todos.map(todo =>
      todo.id === _id ? new Todo({ ...todo, complete: !todo.complete }) : todo
    );

    this._commit(this.todos);
  }
}
