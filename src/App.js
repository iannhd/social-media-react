import './App.css';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import {createBrowserRouter,
RouterProvider,
Route,
Outlet} from 'react-router-dom'
import NavBar from './component/navBar/NavBar';
import LeftBar from './component/leftBar/LeftBar';
import RightBar from './component/rightBar/RightBar';
function App() {

  const Layout = () => {
    return(
      <div>
        <NavBar />
        <div style={{display: "flex"}}>
          <LeftBar />
          <div style={{flex: "6"}}>
          <Outlet />
          </div>
          <RightBar />
        </div>
      </div>
    )
  }



  const router = createBrowserRouter([
    {
      path:'/',
      element: < Layout />,
      children: [
        {
          path:'/',
          element: <Home />
        },
        {
          path:'/profile/:id',
          element: <Profile />
        }
      ]
    },
    {
      path:'/login',
      element: <Login />
    },
    {
      path:'/register',
      element: <Register />
    }
  ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
