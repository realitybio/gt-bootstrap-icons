import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bi-chevron-compact-right, i[icon="bi-chevron-compact-right"]',
  template: `<svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    class="bi bi-chevron-compact-right"
    viewBox="0 0 16 16"
  >
    <path
      fill-rule="evenodd"
      d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"
    />
  </svg>`,
})
export class BiChevronCompactRightComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
