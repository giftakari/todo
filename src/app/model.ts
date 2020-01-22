export class Model {
  user;
  items;
  constructor() {
    this.user = "Friend";
    this.items = [
      new TodoItem("Pay School fees ", true),
      new TodoItem("Marry a wife", false),
      new TodoItem("Travel on Vacation", true),
      new TodoItem("Win huge contract", false)
    ];
  }
}

export class TodoItem {
  action;
  done;
  constructor(action, done) {
    this.action = action;
    this.done = done;
  }
}
