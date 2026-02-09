import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider, useSelector } from 'react-redux'
import { store } from './store/store.js'
import { RouterProvider,createBrowserRouter} from 'react-router-dom'
import {AuthLayout} from './components/index.js'
import Home from './pages/Home.jsx'
import Trains from './pages/Trains.jsx'
import BookTicket from './pages/BookTicket.jsx'
import DisplayTicket from './pages/DisplayTicket.jsx'
import Bookings from './pages/Bookings.jsx'
import AdminPage from './pages/AdminPage.jsx'
import AdminDashboard from './pages/AdminDashboard.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/searched-trains',
        element: <Trains />,
      },
      {
        path: '/book-ticket',
        element: <BookTicket />,
      },
      {
        path: '/display-ticket/:id',
        element: <DisplayTicket />,
      },
      {
        path: '/bookings',
        element: <Bookings />,
      },
      {
        path: '/admin',
        element: (
          <AuthLayout authentication allowedRoles={['admin']}>
            <AdminPage />
          </AuthLayout>
        ),
      },
      {
        path: '/dashboard',
        element: (
          <AuthLayout authentication allowedRoles={['admin']}>
            <AdminDashboard />
          </AuthLayout>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(

<Provider store={store}>
  <RouterProvider router={router}/>
</Provider>

) 
