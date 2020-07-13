import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html'
})
export class ParentComponent implements OnInit {

  constructor() { }

  int1val:string=""
  int2val:string=""
  int3val:string=""

  ngOnInit(): void {
  }

}
