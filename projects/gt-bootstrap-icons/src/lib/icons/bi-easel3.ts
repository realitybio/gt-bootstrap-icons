import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bi-easel3, i[icon="bi-easel3"]',
  template: `<svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    class="bi bi-easel3"
    viewBox="0 0 16 16"
  >
    <path
      fill-rule="evenodd"
      d="M8.5 13.134V12h5a1.5 1.5 0 0 0 1.5-1.5V2h.5a.5.5 0 0 0 0-1H.5a.5.5 0 0 0 0 1H1v8.5A1.5 1.5 0 0 0 2.5 12h5v1.134a1 1 0 1 0 1 0ZM2 2v8.5a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5V2H2Z"
    />
  </svg>`,
})
export class BiEasel3Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}