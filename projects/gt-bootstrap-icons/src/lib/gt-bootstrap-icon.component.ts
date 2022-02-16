import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'bi-icon',
  template: `<ng-content></ng-content>`,
  styles: [],
})
export class GtBootstrapIconComponent implements OnInit {
  @Input() icon: string = '';
  @Input() color: string = '';
  @Input() size: string = '';

  constructor() {}

  ngOnInit(): void {}
}
