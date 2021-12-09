import React, { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import CardsProduct from './pages/Products/CardsProduct';
// import Services from './pages/services/Services'
import Products from './pages/Products/Products'
import NewAccount from './pages/SignUp/NewAccount/NewAccount'
import NotFound from './pages/notFound/NotFound'
const SignUp = React.lazy(() => import('./pages/SignUp/SignUp'))


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Suspense fallback={<div>Carregando...</div>}>
          <Routes>
            <Route path='/' element={<Home />} />
            {/* <Route path='services' element={<Services/>}/> */}
            <Route path='products' element={<Products />}>
              <Route path='produtcs/:product' element={<CardsProduct />} />
            </Route>
            <Route path='signup' element={SignUp} />
            <Route path='new-account' element={<NewAccount />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>

    </>
  );
}

export default App;
