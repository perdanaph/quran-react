import { Link } from 'react-router-dom';

/* eslint-disable react/prop-types */
export default function Card(props) {
  return (
    <Link to={'/surah/' + props.nomor} className='group rounded-md border-2 basis-1 w-full md:basis-1/5 p-2 hover:border-teal-500 hover:scale-105 duration-500'>
      <div className='flex flex-row justify-around w-full items-center'>
        <div className='w-8 h-8 relative flex justify-center items-center'>
          <div className=' group-hover:bg-teal-500 duration-500 w-full h-full absolute rotate-45 rounded-sm bg-slate-400'></div>
          <h1 className='absolute text-slate-200 font-semibold'>{props.nomor}</h1>
        </div>
        <div className='flex flex-col w-3/4'>
          <div className='flex flex-row justify-between'>
            <h4 className='text-sm'>{props.nama}</h4>
            <h4 className=''>{props.arab}</h4>
          </div>
          <div className='flex flex-row justify-between'>
            <p className='text-xs text-start text-gray-400 group-hover:text-teal-500 w-3/4 truncate'>{props.arti}</p>
            <p className='text-xs text-gray-400 group-hover:text-teal-500'>{props.ayat}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
