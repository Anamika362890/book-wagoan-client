
import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import './App.css';
import { router } from './Routes/Routes/Routes';

function App() {
  return (
    <div className='max-w-[1580px] mx-auto  font' >
      <RouterProvider
        router={router}
      ></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
