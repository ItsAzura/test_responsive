import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Navbar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home';
import Sell from './Pages/Sell';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/sell',
        element: <Sell />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <div>
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
