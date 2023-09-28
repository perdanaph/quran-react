import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import NavbarBack from '../components/NavbarSurah';
import Footer from '../components/Footer';

export default function Layout(props) {
  // eslint-disable-next-line react/prop-types
  const { children } = props;
  const location = useLocation();
  console.log(location);
  return (
    <>
      {location.pathname.includes('/surah') ? <NavbarBack /> : <Navbar />}

      {children}

      <Footer />
    </>
  );
}
