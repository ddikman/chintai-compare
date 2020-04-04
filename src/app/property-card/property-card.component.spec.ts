import { YenPipe } from './../yen.pipe';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyCardComponent } from './property-card.component';
import { Pricing, Property } from '../property';

describe('PropertyCardComponent', () => {
  let component: PropertyCardComponent;
  let fixture: ComponentFixture<PropertyCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyCardComponent, YenPipe ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyCardComponent);
    component = fixture.componentInstance;
    const property = new Property();
    property.featuredImageUrl = 'https://img01.suumo.com/front/gazo/fr/bukken/857/100191265857/100191265857_ro.jpg';
    property.floorplanUrl = 'https://img01.suumo.com/front/gazo/fr/bukken/857/100191265857/100191265857_co.jpg';
    property.link = 'https://suumo.jp/chintai/jnc_000056745731/?bc=100191265857';
    property.name = 'シャローム深瀬';
    const pricing = new Pricing();
    pricing.keyMoney = 0;
    pricing.managementFee = 3000;
    pricing.rent = 160000;
    pricing.shikinMonthsRent = 1;
    pricing.reikinMonthsRent = 1;
    property.pricing = pricing;
    component.property = property;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
