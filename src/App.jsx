import { useState } from 'react'
import { Outlet } from 'react-router-dom';
import Nav from './components/navbar'
import Header from './components/header';
import Footer from './components/footer';

function App() {
  
  return (
    <>
     <Header />
     <Nav />
      <main >
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App
