import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bi-dash-square-fill, i[icon="bi-dash-square-fill"]',
  template: `<svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    class="bi bi-dash-square-fill"
    viewBox="0 0 16 16"
  >
    <path
      d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm2.5 7.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1z"
    />
  </svg>`,
})
export class BiDashSquareFillComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
