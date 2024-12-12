import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Home, Error, Login, AdminPanel } from './components';
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Summary from './components/Google-map/Summary.jsx';


const routers = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route element={<Error />} />
      <Route path='/admin' element={<AdminPanel />} />
      <Route path='/summary' element={<Summary />} />
    </Route>
  )
);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routers} />
  </StrictMode>,
)
