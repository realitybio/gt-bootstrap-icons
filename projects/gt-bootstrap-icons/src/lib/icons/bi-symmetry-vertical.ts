import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bi-symmetry-vertical, i[icon="bi-symmetry-vertical"]',
  template: `<svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    class="bi bi-symmetry-vertical"
    viewBox="0 0 16 16"
  >
    <path
      d="M7 2.5a.5.5 0 0 0-.939-.24l-6 11A.5.5 0 0 0 .5 14h6a.5.5 0 0 0 .5-.5v-11zm2.376-.484a.5.5 0 0 1 .563.245l6 11A.5.5 0 0 1 15.5 14h-6a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .376-.484zM10 4.46V13h4.658L10 4.46z"
    />
  </svg>`,
})
export class BiSymmetryVerticalComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}