import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bi-text-right, i[icon="bi-text-right"]',
  template: `<svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    class="bi bi-text-right"
    viewBox="0 0 16 16"
  >
    <path
      fill-rule="evenodd"
      d="M6 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-4-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm4-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-4-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
    />
  </svg>`,
})
export class BiTextRightComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
