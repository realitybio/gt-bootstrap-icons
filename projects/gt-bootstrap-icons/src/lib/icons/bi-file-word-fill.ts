import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bi-file-word-fill, i[icon="bi-file-word-fill"]',
  template: `<svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    class="bi bi-file-word-fill"
    viewBox="0 0 16 16"
  >
    <path
      d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM5.485 4.879l1.036 4.144.997-3.655a.5.5 0 0 1 .964 0l.997 3.655 1.036-4.144a.5.5 0 0 1 .97.242l-1.5 6a.5.5 0 0 1-.967.01L8 7.402l-1.018 3.73a.5.5 0 0 1-.967-.01l-1.5-6a.5.5 0 1 1 .97-.242z"
    />
  </svg>`,
})
export class BiFileWordFillComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}