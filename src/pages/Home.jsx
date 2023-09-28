import { useEffect, useState } from 'react';
import Card from '../components/Card';
import { getAllSurah } from '../services/fetchQuran';
import Loading from '../components/Loading';
import Hero from '../components/Hero';
import useDebonce from '../hooks/useDebonce';
import useFilter from '../hooks/useFilter';

function Home() {
  const [surah, setSurah] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const { dataFilter, filterHandler } = useFilter(surah);
  const valueDebonce = useDebonce(search, 800);

  const handleSurah = async () => {
    const allSurah = await getAllSurah();
    setSurah(allSurah);
    setLoading(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleSurah();
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    filterHandler(valueDebonce);
  }, [filterHandler, valueDebonce]);

  function handlerSearch(e) {
    // console.log(e.target.value);
    setSearch(e.target.value);
    // console.log(valueDebonce);
  }

  return (
    <>
      <Hero handler={handlerSearch} />
      <main className='mx-3 md:mx-16'>
        <div className='flex flex-wrap justify-evenly gap-3 w-full flex-col md:flex-row'>
          {loading ? (
            [...Array(114)].map((_, i) => <Loading key={i} />)
          ) : dataFilter.length == 0 ? (
            <p className='flex justify-center items-center'>Tidak Ada Surah yang cocok</p>
          ) : (
            dataFilter.map((item, i) => <Card nomor={item.number} nama={item.name.transliteration.id} arab={item.name.short} arti={item.name.translation.id} ayat={item.numberOfVerses} key={i} />)
          )}
        </div>
      </main>
    </>
  );
}

export default Home;
