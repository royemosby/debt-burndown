import { MasterDetailLayout } from '@/shared/layouts';
export interface Debt {
  name: string;
  startingPrinciple: number;
  apr: number;
  paydown?: number;
  paymentCount?: number;
}
export function Home() {
  const mockDebts: Debt[] = [
    {
      name: 'Roy USAA CC',
      startingPrinciple: 5000,
      apr: 0.17,
    },
    {
      name: 'Maggie USAA CC',
      startingPrinciple: 5000,
      apr: 0.17,
    },
    {
      name: 'Roy Chase CC',
      startingPrinciple: 5000,
      apr: 0.17,
    },
    {
      name: 'Maggie Chase CC',
      startingPrinciple: 5000,
      apr: 0.17,
    },
  ];
  return (
    <>
      <MasterDetailLayout debts={mockDebts} />
    </>
  );
}
