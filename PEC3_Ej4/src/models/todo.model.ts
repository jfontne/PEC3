/**
 * @class Model
 *
 * Manages the data of the application.
 */


class Todo{
  id: number;
  text: string;
  complete: boolean;

  constructor({ text , complete = false }: {text: string, complete: boolean}) {
    this.id = this.uuidv4();
    this.text = text;
    this.complete = complete;
  }

  uuidv4() {
    return Math.floor(Math.random() * 999999999);
  }
}
