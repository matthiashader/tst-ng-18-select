import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IxSelect } from '@siemens/ix-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'my-angular-project';
  
  @ViewChild(IxSelect) selectElement!: IxSelect;

  setFocus() {
    this.selectElement.focusInput();
  }
}