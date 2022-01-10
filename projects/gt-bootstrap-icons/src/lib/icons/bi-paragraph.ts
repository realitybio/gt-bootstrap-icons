import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bi-paragraph, i[icon="bi-paragraph"]',
  template: `<svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    class="bi bi-paragraph"
    viewBox="0 0 16 16"
  >
    <path
      d="M10.5 15a.5.5 0 0 1-.5-.5V2H9v12.5a.5.5 0 0 1-1 0V9H7a4 4 0 1 1 0-8h5.5a.5.5 0 0 1 0 1H11v12.5a.5.5 0 0 1-.5.5z"
    />
  </svg>`,
})
export class BiParagraphComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}