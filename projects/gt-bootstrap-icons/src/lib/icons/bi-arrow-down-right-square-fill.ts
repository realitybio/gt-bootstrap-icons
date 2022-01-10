import { Component, OnInit } from '@angular/core';

@Component({
  selector:
    'bi-arrow-down-right-square-fill, i[icon="bi-arrow-down-right-square-fill"]',
  template: `<svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    class="bi bi-arrow-down-right-square-fill"
    viewBox="0 0 16 16"
  >
    <path
      d="M14 16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12zM5.904 5.197 10 9.293V6.525a.5.5 0 0 1 1 0V10.5a.5.5 0 0 1-.5.5H6.525a.5.5 0 0 1 0-1h2.768L5.197 5.904a.5.5 0 0 1 .707-.707z"
    />
  </svg>`,
})
export class BiArrowDownRightSquareFillComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
