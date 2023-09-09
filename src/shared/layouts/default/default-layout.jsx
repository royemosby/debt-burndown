import { Header } from '../../components/index';

export function DefaultLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
