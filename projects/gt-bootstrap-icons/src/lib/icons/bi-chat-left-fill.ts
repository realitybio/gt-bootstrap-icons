import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bi-chat-left-fill, i[icon="bi-chat-left-fill"]',
  template: `<svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    class="bi bi-chat-left-fill"
    viewBox="0 0 16 16"
  >
    <path
      d="M2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
    />
  </svg>`,
})
export class BiChatLeftFillComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}