import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
})
export class ChildComponent implements OnInit {
  constructor() {}

  @Input() params1: string = '';
  @Input() params2: string = '';

  @Input() name: string = 'Asher';

  ngOnInit(): void {}
}
