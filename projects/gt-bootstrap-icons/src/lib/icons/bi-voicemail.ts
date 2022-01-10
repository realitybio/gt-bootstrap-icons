import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bi-voicemail, i[icon="bi-voicemail"]',
  template: `<svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    class="bi bi-voicemail"
    viewBox="0 0 16 16"
  >
    <path
      d="M7 8.5A3.49 3.49 0 0 1 5.95 11h4.1a3.5 3.5 0 1 1 2.45 1h-9A3.5 3.5 0 1 1 7 8.5zm-6 0a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0zm14 0a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0z"
    />
  </svg>`,
})
export class BiVoicemailComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}