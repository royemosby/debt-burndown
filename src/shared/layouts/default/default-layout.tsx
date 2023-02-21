import { Header } from '../../components/index';

export function DefaultLayout({ children }: any) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
