export class Property {
  name: string;
  link: string;

  floorplanUrl: string;
  featuredImageUrl: string;

  pricing: Pricing;

  constructor() {}
}

export class Pricing {
  shikinMonthsRent: number;
  reikinMonthsRent: number;

  keyMoney: number;

  rent: number;

  managementFee: number;

  get reikin(): number {
    return this.reikinMonthsRent * this.rent;
  }

  get shikin(): number {
    return this.shikinMonthsRent * this.rent;
  }

  getAverageCost(overMonths: number): number {
    const monthlyCost = (this.rent + this.managementFee);
    const tax = 0.1;
    const agencyFee = this.rent * (1 + tax);
    const initialCost = this.shikin + this.reikin;
    const totalCost = agencyFee + initialCost + monthlyCost * overMonths;
    return Math.round(totalCost / overMonths);
  }
}
