export class Pricing {
  shikinMonthsRent: number;
  reikinMonthsRent: number;

  keyMoney: number;

  rent: number;

  managementFee: number;

  get agencyFee(): number {
    const tax = 0.1;
    return (1 + tax) * this.rent;
  }

  getPerSqm(sqm: number): number {
    return Math.round(this.monthlyCost / sqm);
  }

  get movingCost(): number {
    return this.shikin + this.reikin + this.keyMoney + this.agencyFee;
  }

  get reikin(): number {
    return this.reikinMonthsRent * this.rent;
  }

  get shikin(): number {
    return this.shikinMonthsRent * this.rent;
  }

  get monthlyCost(): number {
    return this.rent + this.managementFee;
  }

  getAverageCost(overMonths: number): number {
    const totalCost = this.movingCost + this.agencyFee + this.monthlyCost * overMonths;
    return Math.round(totalCost / overMonths);
  }
}

export class Property {
  name: string;
  link: string;

  floorplanUrl: string;
  featuredImageUrl: string;
  size: number;

  pricing: Pricing;

  static getExample(): Property {
    const property = new Property();
    property.featuredImageUrl = 'https://img01.suumo.com/front/gazo/fr/bukken/857/100191265857/100191265857_ro.jpg';
    property.floorplanUrl = 'https://img01.suumo.com/front/gazo/fr/bukken/857/100191265857/100191265857_co.jpg';
    property.link = 'https://suumo.jp/chintai/jnc_000056745731/?bc=100191265857';
    property.name = 'シャローム深瀬';
    property.size = 52.65;
    const pricing = new Pricing();
    pricing.keyMoney = 0;
    pricing.managementFee = 3000;
    pricing.rent = 160000;
    pricing.shikinMonthsRent = 1;
    pricing.reikinMonthsRent = 1;
    property.pricing = pricing;
    return property;
  }
}
