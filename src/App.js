import  React from 'react'
import './App.css';
import About from './components/About Section/About';
import Contact from './components/Contact Section/Contact';
import Footer from './components/Footer/Footer';
import Home from './components/Home Section/Home';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects Section/Projects';
import Skills from './components/Skills Section/Skills';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
        <About/>
       {/* <Skills/>
       <Projects/>
       <Contact/>
       <Footer/>  */}

    </div>
  );
}

export default App;
