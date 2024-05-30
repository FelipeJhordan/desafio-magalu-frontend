import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import './App.css';

import LoginPage from './pages/login/login.page';
import { AuthProvider } from './hooks/useAuth';
import ProtectedLayout from './components/layout/protected-layout.component';
import UploadFilePage from './pages/upload-file/upload-file.page';
import HomePage from './pages/home/home.page';
import ListOrderByUserPage from './pages/list-orders-by-user/list-orders-by-user.page';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<AuthProvider />}>
          <Route element={<ProtectedLayout />}>
            <Route path="/upload" element={<UploadFilePage />} />
            <Route path="/pedidos" element={<ListOrderByUserPage />} />
            <Route path="/" element={<HomePage />} />
          </Route>

          <Route path="/login" element={<LoginPage />} />
        </Route>
      </>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
