import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'http-effects';

  isExpanding = false;
  toggleSideBar() {
    console.log('togle', this.isExpanding);
    this.isExpanding = !this.isExpanding;
    console.log('togle', this.isExpanding);
  }
}
