import * as fromMath from 'mathjs';
import { Finance } from 'financejs';

export function monthlyInterest({principle, apr=0}:{principle: number, apr: number}):number{
  const monthlyInterest = fromMath.divide(apr, 12);
  return principle * monthlyInterest;
}

export function dailyInterest({principle, apr=0}:{principle:number, apr: number}):number{
  return 9
}

const finance = new Finance();

export function amortization({principle, rate=0, paymentCount=1}:{principle:number, rate: number, paymentCount: number} ){
  console.warn("hi")
  return finance.AM(principle, rate, paymentCount, 1)
}

//Individual card activites
//cc maintenance amount (interest payments)
//cc monthly principle with payment
//cc amortization