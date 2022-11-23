/**
 * @class View
 *
 * Visual representation of the model.
 */
class TodoView {
    app: any;
    form: Element;
    input: any|null;
    submitButton: Element;
    title: HTMLElement|null;
    todoList: any;
    _temporaryTodoText: string;

  constructor() {
    this.app = this.getElement("#root");
    this.form = this.createElement("form", "TodoView");
    this.input = this.createElement("input", "TodoView");
    this.input.type = "text";
    this.input .placeholder = "Add todo";
    this.input.name = "todo";
    this.submitButton = this.createElement("button","TodoView");
    this.submitButton.textContent = "Submit";
    this.form.append(this.input, this.submitButton);
    this.title = this.createElement("h1","");
    this.title.textContent = "Todos";
    this.todoList = this.createElement("ul", "todo-list");
    this.app.append(this.title, this.form, this.todoList);

    this._temporaryTodoText = "";
    this._initLocalListeners();
  }

  get _todoText() {
    return this.input.value;
  }

  _resetInput() {
    this.input.value = "";
  }

  createElement(tag:string, className: string) {
    const element = document.createElement(tag);

    if (className) element.classList.add(className);

    return element;
  }

  getElement(selector: string) {
    const element = document.querySelector(selector);

    return element;
  }

  displayTodos(todos:any) {
    // Delete all nodes
    while (this.todoList.firstChild) {
      this.todoList.removeChild(this.todoList.firstChild);
    }

    // Show default message
    if (todos.length === 0) {
      const p = this.createElement("p","");
      p.textContent = "Nothing to do! Add a task?";
      this.todoList.append(p);
    } else {
      // Create nodes
      todos.forEach((todo:dades) => {
        const li:HTMLElement = this.createElement("li","");
        li.id = String(todo.id);

        const checkbox:any = this.createElement("input","");
        checkbox.type = "checkbox";
        checkbox.checked = todo.complete;

        const span:any = this.createElement("span", "");
        span.contentEditable = true;
        span.classList.add("editable");

        if (todo.complete) {
          const strike: any = this.createElement("s","");
          strike.textContent = todo.text;
          span.append(strike);
        } else {
          span.textContent = todo.text;
        }

        const deleteButton = this.createElement("button", "delete");
        deleteButton.textContent = "Delete";
        li.append(checkbox, span, deleteButton);

        // Append nodes
        this.todoList.append(li);
      });
    }

    // Debugging
    console.log(todos);
  }

  _initLocalListeners() {
    this.todoList.addEventListener("input", (event:Event) => {
      let t = event.target as HTMLFormElement;
      if (t.className === "editable") {
        this._temporaryTodoText = t.innerText;
      }
    });
  }

  bindAddTodo(handler: any) {
    this.form.addEventListener("submit", (event:Event) => {
      event.preventDefault();

      if (this._todoText) {
        handler(this._todoText);
        this._resetInput();
      }
    });
  }

  bindDeleteTodo(handler:any) {
    this.todoList.addEventListener("click", (event: Event) => {
      let t = event.target as HTMLFormElement;
      if (t.className === "delete") {
        let id:number|null = Number(t.parentElement?.id);

        handler(id);
      }
    });
  }

  bindEditTodo(handler:any) {
    this.todoList.addEventListener("focusout", (event:Event) => {
      if (this._temporaryTodoText) {
        let t = event.target as Element; 
        const id:number|null = Number(t.parentElement?.id);

        handler(id, this._temporaryTodoText);
        this._temporaryTodoText = "";
      }
    });
  }

  bindToggleTodo(handler:any) {
    this.todoList.addEventListener("change", (event:Event) => {
      let t = event.target as HTMLFormElement;
      if (t.type === "checkbox") {
        const id:number|null = Number(t.parentElement?.id);
        handler(id);
      }
    });
  }
}
