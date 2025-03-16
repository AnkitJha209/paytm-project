import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { Signup } from './pages/Signup.tsx'
import { Dashboard } from './pages/Dashboard.tsx'
import { store } from './redux/store.ts' 
import { Provider } from 'react-redux'
import { Signin } from './pages/Signin.tsx'

const route = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<App/>} >
    <Route path='signup'  element={<Signup/>}/>
    <Route path='signin'  element={<Signin/>}/> 
    <Route path=''  element={<Dashboard/>}/> 
    {/* <Route path='send'  element={<SendMoney/>}/>  */}
  </Route>
))

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <RouterProvider router={route} />
  </Provider>
)
