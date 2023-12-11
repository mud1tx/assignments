/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.result = [];
  }
  add(par) {
    this.result.push(par);
  }
  remove(index) {
    this.result.splice(index, 1);
  }
  update(ind, todo) {
    if (ind >= this.result.length) {
    } else {
      this.result[ind] = todo;
    }
  }
  getAll() {
    return this.result;
  }
  get(ind) {
    if (ind >= this.result.length) {
      return null;
    } else {
      return this.result[ind];
    }
  }
  clear() {
    this.result = [];
  }
}

module.exports = Todo;
