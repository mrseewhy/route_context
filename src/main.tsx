import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router";
import Homepage from './pages/Homepage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import NotFound from './pages/NotFound';
import Layout from './components/Layout';
import Profiles from './pages/Profiles';
import Profile from './pages/Profile';
import Forms from './pages/Forms';
import Form1 from './components/Form1';
import { AppProvider } from './context/AppContext';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Homepage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'services', element: <ServicesPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'profiles', element: <Profiles /> },
      { path: 'profiles/:id', element: <Profile /> },
      {
        path: 'forms', element: <Forms />, children: [
          { path: 'form1', element: <Form1 /> }
        ]
      },
    ]

  }
]);



createRoot(document.getElementById('root')!).render(

  <StrictMode>
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  </StrictMode>,
)
