import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bi-easel3-fill, i[icon="bi-easel3-fill"]',
  template: `<svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    class="bi bi-easel3-fill"
    viewBox="0 0 16 16"
  >
    <path
      d="M8.5 12v1.134a1 1 0 1 1-1 0V12h-5A1.5 1.5 0 0 1 1 10.5V3h14v7.5a1.5 1.5 0 0 1-1.5 1.5h-5Zm7-10a.5.5 0 0 0 0-1H.5a.5.5 0 0 0 0 1h15Z"
    />
  </svg>`,
})
export class BiEasel3FillComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
