import { useEffect, useState } from 'react';
import CardSurah from '../components/CardSurah';
import { useParams } from 'react-router-dom';
import { getSurahById } from '../services/fetchQuran';
import { ClipLoader } from 'react-spinners';

export default function Surah() {
  const [surah, setSurah] = useState(null);
  const params = useParams();

  const handlerSurah = async id => {
    const surat = await getSurahById(id);
    setSurah(surat);
    console.log(surah);
  };

  useEffect(() => {
    handlerSurah(params.number);
  }, []);

  return (
    <main className='mx-3 md:mx-40 mt-28'>
      {surah == null ? (
        <div className='flex items-center justify-center h-screen'>
          <ClipLoader color='#36d7b7' size={'80px'} />
        </div>
      ) : (
        <>
          <div className='header text-center mt-10'>
            <h1 className='text-5xl mb-5'>
              {surah.name.transliteration.id} ~ {surah.name.long}
            </h1>
            <h4 className='text-2xl text-slate-400 mb-20'>
              {surah.name.translation.id} ~ {surah.name.translation.en}
            </h4>
          </div>
          <div>
            {surah.verses.map((ayat, i) => (
              <CardSurah key={i} nomer={ayat.number.inSurah} ayat={ayat.text.arab} latin={ayat.text.transliteration.en} terjemah={ayat.translation.id} audio={ayat.audio.primary} />
            ))}
          </div>
        </>
      )}
    </main>
  );
}
