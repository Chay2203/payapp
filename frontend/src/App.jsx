import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Signup } from './pages/SignUp';
import { Signin } from './pages/SignIn';
import { Dashboard } from './pages/DashBoard';
import { SendMoney } from './components/SendMoney';

function App() {
  return (
    <>
       <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/send" element={<SendMoney />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;