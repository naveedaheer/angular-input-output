import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  parentData:boolean = false;
  constructor() { }

  ngOnInit() {
  }

  @Input() dataFromParent: string;

}
