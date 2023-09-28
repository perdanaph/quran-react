/* eslint-disable react/prop-types */
import ReactAudioPlayer from 'react-audio-player';

export default function CardSurah({ nomer, ayat, latin, terjemah, audio }) {
  // const { nomer, ayat, latin, terjemah } = props;
  return (
    <div className='space-y-10 border-b px-6 py-4 mt-10'>
      <div className='audio-number flex flex-col md:flex-row justify-between items-start md:items-center'>
        <div className='text-lg'>{nomer}</div>
        <div className=''>
          <ReactAudioPlayer src={audio} controls />
        </div>
      </div>
      <div className='ayat flex flex-col'>
        <div className='mb-5'>
          <h2 className='text-end text-3xl font-arab'>{ayat}</h2>
        </div>
        <div>
          <h6 className='text-xl mb-4'>{latin}</h6>
          <h6 className='text-slate-500'>{terjemah}</h6>
        </div>
      </div>
    </div>
  );
}
