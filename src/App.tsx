import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, useRoutes } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/login.page';
import { AuthProvider } from './hooks/useAuth';
import ProtectedLayout from './components/layout/protected-layout.component';
import UploadFilePage from './pages/upload-file';
import ListOrderByUserPage from './pages/list-orders-by-user.page';


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route element={<AuthProvider />}>
        <Route element={<ProtectedLayout />} >
          <Route path="/upload-file" element={<UploadFilePage />} />
          <Route path="/" element={<ListOrderByUserPage />} />
        </Route>
  
         <Route path="/login" element={<LoginPage />} />
        </Route>
         
      </>
    )
  );

  return (
    <RouterProvider router={router} />
  )
}

export default App;
