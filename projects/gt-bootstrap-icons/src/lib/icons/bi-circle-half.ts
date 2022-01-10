import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bi-circle-half, i[icon="bi-circle-half"]',
  template: `<svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    class="bi bi-circle-half"
    viewBox="0 0 16 16"
  >
    <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z" />
  </svg>`,
})
export class BiCircleHalfComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}