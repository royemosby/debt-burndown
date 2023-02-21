import { createBrowserRouter } from 'react-router-dom';
import * as FromFeatures from '@/features/index';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <FromFeatures.Home />,
  },
  {
    path: 'dev',
    element: <FromFeatures.Sandbox />,
  },
]);
