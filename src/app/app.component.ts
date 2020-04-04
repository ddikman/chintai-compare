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
    this.property = new Property();
    this.property.featuredImageUrl = 'https://img01.suumo.com/front/gazo/fr/bukken/857/100191265857/100191265857_ro.jpg';
    this.property.floorplanUrl = 'https://img01.suumo.com/front/gazo/fr/bukken/857/100191265857/100191265857_co.jpg';
    this.property.link = 'https://suumo.jp/chintai/jnc_000056745731/?bc=100191265857';
    this.property.name = 'シャローム深瀬';
    const pricing = new Pricing();
    pricing.keyMoney = 0;
    pricing.managementFee = 3000;
    pricing.rent = 160000;
    pricing.shikinMonthsRent = 1;
    pricing.reikinMonthsRent = 1;
    this.property.pricing = pricing;
  }
}
