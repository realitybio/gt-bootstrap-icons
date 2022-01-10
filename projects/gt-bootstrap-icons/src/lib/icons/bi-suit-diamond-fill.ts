import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bi-suit-diamond-fill, i[icon="bi-suit-diamond-fill"]',
  template: `<svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    class="bi bi-suit-diamond-fill"
    viewBox="0 0 16 16"
  >
    <path
      d="M2.45 7.4 7.2 1.067a1 1 0 0 1 1.6 0L13.55 7.4a1 1 0 0 1 0 1.2L8.8 14.933a1 1 0 0 1-1.6 0L2.45 8.6a1 1 0 0 1 0-1.2z"
    />
  </svg>`,
})
export class BiSuitDiamondFillComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
