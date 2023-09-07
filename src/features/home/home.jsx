import { MasterDetailLayout } from '@/shared/layouts';

export function Home() {
  const mockDebts = [
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
