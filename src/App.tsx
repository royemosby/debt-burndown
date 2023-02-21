import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './shared/routes/routes';
import { Header } from './shared/components';

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
