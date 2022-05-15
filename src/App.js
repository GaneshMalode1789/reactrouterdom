import './App.css';
import { useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Error404 from './Error404';
import NavBar from './NavBar';
import Frontend from './frontend/Frontend';
import Backend from './backend/Backend'
import Admin from './Admin';

function App() {
  const getCovidData = async () => {
    const res = await fetch("https://data.covid19india.org/data.json");
    const actualData = await res.json();
    // console.log(actualData.statewise);
  }
  useEffect(() => {
    // getCovidData();
  }, []);
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about/*' element={<About />} />
        <Route path='/contact/' element={<Contact />} />
        <Route path='/contact/:id' element={<Contact />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
      <br />
      {/* below routes is just demo for user and admin routes means frontend and backend */}
      {/* <Routes>
        <Route path='/frontend' element={<Frontend />}>
          <Route index element={ <Home />} />
        </Route>
        <Route path='/backend/' element={<Backend />}>
          <Route index element={ <Admin />} />
        </Route>
        <Route path='*' element={<Error404 />} />
      </Routes> */}
    </div>
  );
}

export default App;
