import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './MyComponents/todos/todos.component';
import { TodoDescriptionComponent } from './MyComponents/todo-description/todo-description.component';

const routes: Routes = [
  { path: 'todos', component: TodosComponent },
  { path: 'details/:id', component: TodoDescriptionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
