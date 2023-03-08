import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import { lazy,Suspense } from 'react';

const DayNightMode=lazy(()=>import('./Pages/DayNightMode'))
const Products=lazy(()=>import('./Pages/Products'))
const Cart=lazy(()=>import('./Pages/Cart'))
function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<DayNightMode/>}/>
            <Route path='/Products' element={<Products/>}/>
            <Route path='/Cart' element={<Cart/>}/>
            <Route path='*' element={<h1>Page Not Found</h1>}/>
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
