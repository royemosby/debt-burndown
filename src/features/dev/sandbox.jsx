import { DefaultLayout } from '@/shared/layouts';
import { CCForm } from './ccForm';
export function Sandbox() {
  return (
    <DefaultLayout>
      <div className="centered">
        <h2>Sandbox</h2>
        <CCForm />
      </div>
    </DefaultLayout>
  );
}
