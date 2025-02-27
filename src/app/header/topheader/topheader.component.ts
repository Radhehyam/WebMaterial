import { Component ,Renderer2 } from '@angular/core';

@Component({
  selector: 'app-topheader',
  templateUrl: './topheader.component.html',
  styleUrl: './topheader.component.css'
})
export class TopheaderComponent {
  constructor(private renderer: Renderer2) { }

  // Function to change font size
  changeFontSize(action: string) {
    const body = document.body;
    let currentSize = parseInt(window.getComputedStyle(body).fontSize);

    if (action === 'increase') {
      this.renderer.setStyle(body, 'font-size', (currentSize + 2) + 'px');  // Increase font size by 2px
    } else if (action === 'decrease') {
      this.renderer.setStyle(body, 'font-size', (currentSize - 2) + 'px');  // Decrease font size by 2px
    }
  }

   // Reset font size to default
   resetFontSize() {
    this.renderer.setStyle(document.body, 'font-size', '16px');  // Reset to default size (16px)
  }

}
