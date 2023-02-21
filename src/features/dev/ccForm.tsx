import { useState } from 'react';
import styles from './sandbox.module.scss';
import * as fromFinance from '@/adapters/finance/calculations';

export function CCForm() {
  const [ccName, setCcName] = useState('');
  const [apr, setApr] = useState('0');
  const [principle, setPrinciple] = useState('0.0');
  const [nextMonthPrinciple, setNextMonthPrinciple] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState('0');
  const [paymentCount, setPaymentCount] = useState('1');

  function onSubmit(evt): void {
    evt.preventDefault();
    setNextMonthPrinciple(
      fromFinance.monthlyInterest({ principle: parseFloat(principle), apr: parseFloat(apr) })
    );
    const paymentTarget = fromFinance.amortization({
      principle: parseFloat(principle),
      rate: parseFloat(apr),
      paymentCount: parseFloat(paymentCount),
    });
    console.log(paymentTarget);
    setMonthlyPayment(paymentTarget.toString());
  }
  return (
    <>
      <form onSubmit={onSubmit} className={styles.ccForm}>
        <div>
          <label htmlFor="ccName">Credit card name</label>
          <input
            type="text"
            name="ccName"
            value={ccName}
            onChange={evt => setCcName(evt.target.value)}
          />
        </div>
        <div>
          <label htmlFor="apr">APR</label>
          <input
            min="0"
            max="1"
            step="0.01"
            type="number"
            name="apr"
            value={apr}
            onChange={evt => setApr(evt.target.value)}
          />
        </div>
        <div>
          <label htmlFor="currentDebt">Current debt amount</label>
          <input
            min="0"
            step="0.01"
            type="number"
            name="currentDebt"
            value={principle}
            onChange={evt => setPrinciple(evt.target.value)}
          />
        </div>
        <div>
          <label htmlFor="monthlyPayment">Monthly payment</label>
          <input
            min="0"
            step="0.01"
            type="number"
            name="monthlyPayment"
            value={monthlyPayment}
            onChange={evt => setMonthlyPayment(evt.target.value)}
          />
        </div>
        <div>
          <label htmlFor="paymentCount">Payment Count</label>
          <input
            type="number"
            name="paymentCount"
            value={paymentCount}
            onChange={evt => setPaymentCount(evt.target.value)}
          />
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
      <p>Next month principle: {nextMonthPrinciple}</p>
    </>
  );
}
