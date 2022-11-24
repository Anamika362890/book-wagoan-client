
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import { router } from './Routes/Routes/Routes';

function App() {
  return (
    <div className='max-w-[1580px] mx-auto  font' >
      <RouterProvider
        router={router}
      ></RouterProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
