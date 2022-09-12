import { Component, OnInit, VERSION } from '@angular/core';
import { Todo } from 'src/app/todos';
import { Router } from "@angular/router";
import { IMultiSelectOption } from 'ngx-bootstrap-multiselect';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {

  todos!: Todo[];
  inputTodo: string = "";
  inputTododesc: string = "";
  isDisable = true;
  localItem!: string | null;
  optionsModel!: number[];
  myOptions!: IMultiSelectOption[];

  constructor(private _router: Router) {
    // this.todos=[
    //   {content: "Brush my teeth", completed:"undone"},
    //   {content: "Take a shower", completed:"undone"},
    //   {content: "Go to office", completed:"undone"}
    // ];
    this.localItem = localStorage.getItem("todos");
    if (this.localItem == null) {
      this.todos = [];
    }
    else {
      this.todos = JSON.parse(this.localItem)
    }
  }

  ngOnInit(): void {
    this.myOptions = [
      { id: 1, name: 'Option 1' },
      { id: 2, name: 'Option 2' },
    ];
  }
  toggleDone(id: number) {
    this.todos.map((v, i) => {
      console.log(v, i);
      if (i == id) {
        if (v.completed === "done") {
          v.completed = "undone"
        } else {
          v.completed = "done"
        }
      };
    })
    localStorage.removeItem('todos');
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  onChange(e: any) {
    console.log("e", e);
    console.log("this.optionsModel", this.optionsModel);
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter((v, i) => i !== id);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  addTodo() {
    this.todos.push({
      id: this.todos.length + 1,
      content: this.inputTodo,
      description: this.inputTododesc,
      completed: "undone"
    });
    this.inputTodo = "";
    this.inputTododesc = "",
      localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  TodoInput(id: any) {
    if (id.target.value == '') {
      this.isDisable = true;
    }
    else {
      this.isDisable = false;
    }
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
  TododescInput(id: any) {
    if (id.target.value == '') {
      this.isDisable = true;
    }
    else {
      this.isDisable = false;
    }
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  descTodo(id: any) {
    console.log("hello  = " + id);
    this._router.navigate(['./todo/', id]);
  }

}
