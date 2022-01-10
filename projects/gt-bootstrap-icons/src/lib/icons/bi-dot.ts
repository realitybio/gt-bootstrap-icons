import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bi-dot, i[icon="bi-dot"]',
  template: `<svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    class="bi bi-dot"
    viewBox="0 0 16 16"
  >
    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
  </svg>`,
})
export class BiDotComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
