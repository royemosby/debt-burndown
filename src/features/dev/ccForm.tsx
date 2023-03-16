import { useState } from 'react';
import styles from './sandbox.module.scss';
import * as fromFinance from '@/adapters/finance/calculations';

export function CCForm() {
  const [ccName, setCcName] = useState('preset');
  const [apr, setApr] = useState(0.22);
  const [principle, setPrinciple] = useState(3430.44);
  const [nextMonthPrinciple, setNextMonthPrinciple] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [paymentCount, setPaymentCount] = useState(12);
  const [paymentCountDisplay, setPaymentCountDisplay] = useState(12);
  const [paymentTarget, setPaymentTarget] = useState(0);

  function onSubmit(evt): void {
    evt.preventDefault();
    setPaymentCountDisplay(paymentCount);
    setNextMonthPrinciple(
      fromFinance.monthlyPrinciple({
        principle: principle,
        apr: apr,
        payment: monthlyPayment,
      })
    );
    setPaymentTarget(
      fromFinance.amortization({
        principle: principle,
        rate: apr,
        paymentCount: paymentCount,
      })
    );
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
            onChange={evt => setApr(parseFloat(evt.target.value))}
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
            onChange={evt => setPrinciple(parseFloat(evt.target.value))}
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
            onChange={evt => setMonthlyPayment(parseFloat(evt.target.value))}
          />
        </div>
        <div>
          <label htmlFor="paymentCount">Payment Count</label>
          <input
            type="number"
            name="paymentCount"
            value={paymentCount}
            onChange={evt => setPaymentCount(parseFloat(evt.target.value))}
          />
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
      <p>Next month's principle: ${nextMonthPrinciple}</p>
      <p>
        Payment target: ${paymentTarget} over {paymentCountDisplay} months
      </p>
    </>
  );
}
