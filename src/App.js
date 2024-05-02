import logo from './logo.svg';
import './App.css';
import {RouterProvider} from 'react-router-dom'
import router from './router'; // 引人路由对象


function App() {
  return (
   <div className='app'>
      <RouterProvider router={router}></RouterProvider>
   </div>
  );
}

export default App;
