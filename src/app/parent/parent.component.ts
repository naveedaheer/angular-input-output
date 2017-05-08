import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  dataFromChild:string = "";
  constructor() { }

  ngOnInit() {
  }

  data:object = {
    name: "Naveed Aheer",
    email: "naveed@gmail.com",
    age: 21,
    developer: true
  }

onNotifyClick(value:string): void{
  this.dataFromChild = value;
}

}
