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

  todos!:Todo[];
  inputTodo:string = "";
  inputTododesc:string = "";
  isDisable= true;
  localItem!: string | null ;
  optionsModel!: number[];
  myOptions!: IMultiSelectOption[];

  constructor(private _router:Router) {
    // this.todos=[
    //   {content: "Brush my teeth", completed:"undone"},
    //   {content: "Take a shower", completed:"undone"},
    //   {content: "Go to office", completed:"undone"}
    // ];
    this.localItem = localStorage.getItem("todos");
    if(this.localItem==null){
      this.todos=[];
    }
    else{
      this.todos = JSON.parse(this.localItem)
    }
  }

  ngOnInit(): void {
    this.myOptions = [
      { id: 1, name: 'Option 1' },
      { id: 2, name: 'Option 2' },
  ];
  }
  toggleDone(id : number){
    this.todos.map((v,i) => {
      if(i==id) v.completed = "done";
    })
    localStorage.removeItem('todos');
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  onChange(e:any) {
    console.log("e",e);
    console.log("this.optionsModel",this.optionsModel);
}

  deleteTodo(id : number){
    this.todos =this.todos.filter((v,i) => i !==id);
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }

  addTodo(){
    this.todos.push({
      content: this.inputTodo,
      description:this.inputTododesc,
      completed: "undone"
    });
    this.inputTodo="";
    this.inputTododesc="",
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }

  TodoInput(id : any){
    if(id.target.value==''){
      this.isDisable= true;
    }
    else{
      this.isDisable= false;
    }
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }
  TododescInput(id : any){
    if(id.target.value==''){
      this.isDisable= true;
    }
    else{
      this.isDisable= false;
    }
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }

  descTodo(id : any){
    console.log("hello"+id);
    this._router.navigate([ './details/',id]);
  }

  // qrdata = 'Initial QR code data string';

//   saveAsImage(parent : any) {
//     // fetches base 64 date from image
//     const parentElement = parent.el.nativeElement.querySelector("img").src;

//   //   // converts base 64 encoded image to blobData
//     let blobData = this.convertBase64ToBlob(parentElement);
// console.log("blobData",blobData);

  //   // saves as image
  //   if (window.navigator && window.navigator.msSaveOrOpenBlob) { //IE
  //     window.navigator.msSaveOrOpenBlob(blobData, 'Qrcode');
  //   } else { // chrome
  //     const blob = new Blob([blobData], { type: "image/png" });
  //     const url = window.URL.createObjectURL(blob);
  //     // window.open(url);
  //     const link = document.createElement('a');
  //     link.href = url;
  //     link.download = 'Qrcode';
  //     link.click();
  //   }

  // }

  // convertBase64ToBlob(Base64Image: any) {
  //   // SPLIT INTO TWO PARTS
  //   const parts = Base64Image.split(';base64,');
  //   // HOLD THE CONTENT TYPE
  //   const imageType = parts[0].split(':')[1];
  //   // DECODE BASE64 STRING
  //   const decodedData = window.atob(parts[1]);
  //   // CREATE UNIT8ARRAY OF SIZE SAME AS ROW DATA LENGTH
  //   const uInt8Array = new Uint8Array(decodedData.length);
  //   // INSERT ALL CHARACTER CODE INTO UINT8ARRAY
  //   for (let i = 0; i < decodedData.length; ++i) {
  //     uInt8Array[i] = decodedData.charCodeAt(i);
  //   }
  //   // RETURN BLOB IMAGE AFTER CONVERSION
  //   return new Blob([uInt8Array], { type: imageType });
  // }

  name = 'Angular ' + VERSION.major;
  data:any = localStorage.getItem("todos");

// change(event : any) {
//   this.data = JSON.stringify({data: event.target.value });
// }

// generateQrCode(){
//   console.log(this.data)
//   this.displayQrCode = true;
// }

   downloadImg(){
  const qrcodeDiv = document.getElementsByClassName("qrcode")[0];
  const myimg = qrcodeDiv.getElementsByTagName('img')[0];
  const linkSource = myimg.src;
   const downloadLink = document.createElement("a");
        const fileName = "qrcode.png";

        downloadLink.href = linkSource;
        downloadLink.download = fileName;
        downloadLink.click();
}
}
