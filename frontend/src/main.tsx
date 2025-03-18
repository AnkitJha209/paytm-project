import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { Signup } from './pages/Signup.tsx'
import { Dashboard } from './pages/Dashboard.tsx'
import { store } from './redux/store.ts' 
import { Provider } from 'react-redux'
import { Signin } from './pages/Signin.tsx'
import { Home } from './pages/Home.tsx'
import { SendMoney } from './pages/SendMoney.tsx'

const route = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<App/>} >
    <Route path='signup'  element={<Signup/>}/>
    <Route path='signin'  element={<Signin/>}/> 
    <Route path=''  element={<Home/>}/> 
    <Route path='dashboard'  element={<Dashboard/>}/> 
    <Route path='send-money'  element={<SendMoney/>}/> 
  </Route>
))

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <RouterProvider router={route} />
  </Provider>
)
