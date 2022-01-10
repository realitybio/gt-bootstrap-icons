import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bi-arrow-left-short, i[icon="bi-arrow-left-short"]',
  template: `<svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    class="bi bi-arrow-left-short"
    viewBox="0 0 16 16"
  >
    <path
      fill-rule="evenodd"
      d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
    />
  </svg>`,
})
export class BiArrowLeftShortComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
