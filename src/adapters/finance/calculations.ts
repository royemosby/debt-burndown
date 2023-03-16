import * as fromMath from 'mathjs';
import { Finance } from 'financejs';

export function monthlyInterest({principle, apr=0}:{principle: number, apr: number}):number{
  const monthlyInterest = fromMath.divide(apr, 12);
  return principle * monthlyInterest;
}

export function monthlyPrinciple({principle, apr=0, payment=0}:{principle: number, apr: number, payment?:number}){
  return monthlyInterest({principle, apr}) + principle - payment;
}

export const monthlyMaintenanceTarget = monthlyInterest;

///dependendent on financejs

const finance = new Finance();

export function amortization({principle, rate=0, paymentCount=1}:{principle:number, rate: number, paymentCount: number} ){
  return finance.AM(principle, rate, paymentCount, 1)
}

//Individual card activites

/*
- [x] amortization
    - [ ] projectedTotalDebtCost
- [x] monthly principle
  - [ ] principle over time (in months): return array of objects, key-value of yymm

  */