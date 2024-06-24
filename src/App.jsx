import { useState } from 'react'
import { Outlet } from 'react-router-dom';
import Nav from './components/navbar'
import Header from './components/header';

function App() {
  
  return (
    <>
     <Header />
     <Nav />
      <main className="mx-3">
        <Outlet />
      </main>
    </>
  );
}

export default App
