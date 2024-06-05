import { useState } from 'react'
import { Outlet } from 'react-router-dom';
import Nav from './components/navbar'

function App() {
  
  return (
    <>
     <Nav />
      <main className="mx-3">
        <Outlet />
      </main>
    </>
  );
}

export default App
