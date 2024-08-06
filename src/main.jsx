import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// ? what is the use case of the lazy into react js --- (only load the part which are required )
import { lazy, Suspense } from 'react'
const Home = lazy(() => import('./pages/Home/Home.jsx'))
const Search = lazy(() => import('./pages/Search/Search.jsx'))
const Cart = lazy(() => import('./pages/Cart/Cart.jsx'))




// * BASICALLY SETUP OF THE REACT ROUTER DOM 
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Loader from './components/Loader.jsx'
import Order from './pages/Orders/Order.jsx'
import Login from './pages/Login/Login.jsx'
import Menu from './pages/Menu/Menu.jsx'
import Contact from './pages/Contact/Contact.jsx'
import About from './pages/About/About.jsx'
const router = createBrowserRouter([

  {
    path: "",
    element: <App />,
    children: [
      {
        path: "/",

        element:
          <Suspense fallback={<Loader />}>
            <Home />
          </Suspense>
      },
      {
        path: "search",
        element
          : <Suspense fallback={<Loader />}>
            <Search />
          </Suspense>
      }
      ,
      {
        path: "cart",
        element: <Suspense fallback={<Loader />}>
          <Cart />
        </Suspense>
      }
      ,
      {
        path: "orders",
        element: <Suspense fallback={<Loader />}>
          <Order />
        </Suspense>
      }
      ,
      {
        path: "login",
        element: <Suspense fallback={<Loader />}>
          <Login />
        </Suspense>
      },
      {
        path: "menu",
        element: <Suspense fallback={<Loader />}>
          <Menu />
        </Suspense>
      },
      {
        path: "about",
        element: <Suspense fallback={<Loader />}>
          <About />
        </Suspense>
      },
      {
        path: "contact",
        element: <Suspense fallback={<Loader />}>
          <Contact />
        </Suspense>
      }
    ]

  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
)
