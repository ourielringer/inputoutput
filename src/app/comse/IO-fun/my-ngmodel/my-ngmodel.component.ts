import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-my-ngmodel',
  templateUrl: './my-ngmodel.component.html',
  styleUrls: ['./my-ngmodel.component.css']
})
export class MyNgmodelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() valuein:string
  @Output() valueout:EventEmitter<string> = new EventEmitter<string>()
 
}
