import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-output',
  templateUrl: './child-output.component.html',
  styleUrls: ['./child-output.component.css']
})
export class ChildOutputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  @Output() myEvent:EventEmitter<number> = new EventEmitter<number>() 

  convertNumber(str:string):void{
    let number = parseInt(str)
    this.myEvent.emit(number)
  }
}
