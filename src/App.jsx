import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout';
import HomePage from './Pages/HomePage';
import BlogListPage from './Pages/BlogListPage';
import BlogPage from './Pages/BlogPage';
import AboutPage from './Pages/AboutPage';
import LandingPage from './Pages/LandingPage';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <LandingPage />
        },
        {
          path: "/blogs-home",
          element: <HomePage />
        },
        {
          path: "/blogs-list",
          element: <BlogListPage />
        },
        {
          path: "/blog/:id",
          element: <BlogPage />
        },
        {
          path: "/about",
          element: <AboutPage />
        }
      ]
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
