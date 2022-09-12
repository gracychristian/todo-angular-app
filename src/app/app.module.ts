import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './MyComponents/todos/todos.component';
import { TodoDescriptionComponent } from './MyComponents/todo-description/todo-description.component';
import { QRCodeModule } from 'angularx-qrcode';
import { ColorPickerModule } from 'ngx-color-picker';
import { NgxBootstrapMultiselectModule } from 'ngx-bootstrap-multiselect';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoDescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    QRCodeModule, 
    ColorPickerModule,
    NgxBootstrapMultiselectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
