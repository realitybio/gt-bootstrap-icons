import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bi-dash-lg, i[icon="bi-dash-lg"]',
  template: `<svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    class="bi bi-dash-lg"
    viewBox="0 0 16 16"
  >
    <path
      fill-rule="evenodd"
      d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
    />
  </svg>`,
})
export class BiDashLgComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
