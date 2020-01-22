export class Model {
  user;
  items;
  constructor() {
    this.user = "Akaris";
    this.items = [
      new TodoItem("Pay School fees ", true),
      new TodoItem("Marry a wife", false),
      new TodoItem("Travel on Vacation", true)
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
