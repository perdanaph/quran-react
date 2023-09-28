import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import Juz from './pages/Juz';
import About from './pages/About';
import Surah from './pages/Surah';

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/surah/:number'} element={<Surah />} />
          <Route path={'/jus'} element={<Juz />} />
          <Route path={'/about'} element={<About />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
