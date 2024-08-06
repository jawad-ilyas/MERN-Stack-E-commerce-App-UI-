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
const Loader = lazy(() => import('./components/Loader.jsx'))
const Order = lazy(() => import('./pages/Orders/Order.jsx'))
const Menu = lazy(() => import('./pages/Menu/Menu.jsx'))
const Contact = lazy(() => import('./pages/Contact/Contact.jsx'))
const About = lazy(() => import('./pages/About/About.jsx'))
// ! Logged In User Routes
const Shipping = lazy(() => import('./pages/Shipping/Shipping.jsx'))
// ! Not Login User
const Login = lazy(() => import('./pages/Login/Login.jsx'))
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
      },
      // ! Logged In User Routes
      {
        path: "shipping",
        element: <Suspense fallback={<Loader />}>
          <Shipping />
        </Suspense>
      }
      // ! Not Logged In Route
      , {
        path: "login",
        element: <Suspense fallback={<Loader />}>
          <Login />
        </Suspense>
      },
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
