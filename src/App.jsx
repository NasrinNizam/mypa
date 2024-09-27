import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import { LayoutOne } from './Layouts/LayoutOne'
import { AboutPage } from './Pages/AboutPage'
import { ServicePage } from './Pages/ServicePage'
import { ContactPage } from './Pages/ContactPage'
import { BlogPage } from './Pages/BlogPage'
import { NotFound } from './Pages/NotFound'
import { HomePage } from './Pages/HomePage'
import database from './firebase.config'
import Registration from './Pages/Registration'
import { ProfilePage } from './Pages/ProfilePage'
import { LoginPage } from './Pages/LoginPage'
import { ToastContainer } from 'react-toastify'
import { LayoutTwo } from './Layouts/LayoutTwo'
import { PropertyCard } from './Components/property/PropertyCard'
import { Commercial } from './Components/property/Commercial'
function App() {
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<LayoutOne />}>
          <Route index element={<HomePage />}/>
          <Route path='/about' element={<AboutPage />}/>
          <Route path='/service' element={<ServicePage />}/>
          <Route path='/blog' element={<BlogPage />}/>
          <Route path='/contact' element={<ContactPage />}/>
          <Route path='/registration' element={<Registration />}/>
          <Route path='/login' element={<LoginPage />}/>
          <Route path='/residential' element={<PropertyCard />}/>
          <Route path='/commercial' element={<Commercial />}/>
        </Route>
        <Route path='/layoutTwo' element={<LayoutTwo/>}>
          <Route path='/layoutTwo/profilePage' element={<ProfilePage/>}/>
        </Route>
        <Route path='*' element={<NotFound/>}/>
      </Route>
    )
  )

  return (
    <>
    <RouterProvider router={route}/>
    <ToastContainer />

        
    </>
  )
}

export default App
