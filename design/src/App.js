import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import DesignPage from './Pages/Design';
import Home from './Pages/Home';

function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element:<Home/>
    },
    {
      path:'/design',
      element : <DesignPage/>
    }
  ])

  return (
    <RouterProvider router={router}/>
  );
}

export default App;
