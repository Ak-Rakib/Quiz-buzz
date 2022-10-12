
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Components/Main/Main';
import Home from './Components/Home/Home';
import Statistic from './Components/Statistic/Statistic';
import Blog from './Components/Blog/Blog';

function App() {
  const router = createBrowserRouter([
      {
        path: '/',
        element: <Main></Main>,
        children: [
          {path: '/home',
           element: <Home></Home>
          },
          {
            path: '/statistic',
            loader:() =>{
              return fetch('https://openapi.programming-hero.com/api/quiz')
            } ,
            element: <Statistic></Statistic>
          },
          {
            path: '/blog',
            element: <Blog></Blog>
          },
          {
            path: '*',
            element: <div>Not Found!!! 404</div>
          }
        ]
      }
  ]);
  return (
    <div className="App">
       <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
