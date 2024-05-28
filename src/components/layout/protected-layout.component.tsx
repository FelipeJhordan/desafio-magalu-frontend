import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const ProtectedLayout = () => {
  const { user } = useAuth();
  console.log(user)
  if (!user) {
    return <Navigate to="/login" />;
  }
  return (
    <>
      <main className="bg-primary">
        <Outlet />
      </main>
    </>
  );
};

export default ProtectedLayout;
