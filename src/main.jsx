import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomeLayout from './HomeLayout/HomeLayout'
import Home from './pages/Home'
import ErrorPage from './pages/ErrorPage'
import UserDetails from './pages/UserDetails'

const router = createBrowserRouter([
{
  path: "/",
    element: <HomeLayout></HomeLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element:<Home></Home>
      },
      {
        path: "users/:id",
        element:<UserDetails></UserDetails>,
        loader: async ({params}) => {
          return fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
        }
      },
    ]
},
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
