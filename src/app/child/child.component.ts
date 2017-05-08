import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  parentData:boolean = false;

  childName:string = "Child Name";
  childInput: string = "";
  constructor() { }

  ngOnInit() {
  }

  @Input() dataFromParent: string;
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  sendToParent(): void{
    console.log("this.childInput", this.childInput)
    if(this.childInput){
    this.notify.emit(this.childInput);
    console.log("success")
    this.childInput = "";
  }
}
}
