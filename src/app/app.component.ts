import { Component } from '@angular/core';
import { Property, Pricing } from './property';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'chintai-compare';

  property: Property;

  constructor() {
    this.property = Property.getExample();
  }
}
