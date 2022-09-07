import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from 'src/app/todos';

@Component({
  selector: 'app-todo-description',
  templateUrl: './todo-description.component.html',
  styleUrls: ['./todo-description.component.css']
})
export class TodoDescriptionComponent implements OnInit {

  @Input()  todos!:Todo[];
  id!:string | null;
  localItem!: string | null ;
  selectedTodo: any = [];


  constructor(private _activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this._activatedRoute.snapshot.paramMap.get('id');
    console.log(this.id);
    this.localItem = localStorage.getItem("todos");
    if(this.localItem==null){
      this.todos=[];
    }
    else{
      this.todos = JSON.parse(this.localItem)
    }
    console.log(this.todos);
    for (let i = 0; i < this.todos.length; i++) {
      if(this.id===this.todos[i].content){
      this.selectedTodo = this.todos[i];
      console.log(this.selectedTodo);
      }
    }

  }

}
