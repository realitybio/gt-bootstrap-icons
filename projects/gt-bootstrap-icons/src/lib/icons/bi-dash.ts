import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bi-dash, i[icon="bi-dash"]',
  template: `<svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    class="bi bi-dash"
    viewBox="0 0 16 16"
  >
    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
  </svg>`,
})
export class BiDashComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
