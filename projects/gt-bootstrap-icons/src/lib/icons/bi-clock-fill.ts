import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bi-clock-fill, i[icon="bi-clock-fill"]',
  template: `<svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    class="bi bi-clock-fill"
    viewBox="0 0 16 16"
  >
    <path
      d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"
    />
  </svg>`,
})
export class BiClockFillComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
