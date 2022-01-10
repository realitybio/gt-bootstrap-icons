import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bi-record-fill, i[icon="bi-record-fill"]',
  template: `<svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    class="bi bi-record-fill"
    viewBox="0 0 16 16"
  >
    <path fill-rule="evenodd" d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10z" />
  </svg>`,
})
export class BiRecordFillComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
