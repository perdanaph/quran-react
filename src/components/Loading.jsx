export default function Loading() {
  return (
    <button className='rounded-md border-2 basis-1/5 p-4 bg-slate-200  duration-500 animate-pulse'>
      <div className='flex flex-row justify-around w-full items-center'>
        <div className='w-8 h-8 relative flex justify-center items-center'>
          <div className='duration-500 w-full h-full absolute rotate-45 rounded-sm bg-slate-400'></div>
          <h1 className='absolute text-slate-200 font-semibold'></h1>
        </div>
        <div className='flex flex-col w-3/4 gap-y-3'>
          <div className='flex flex-row justify-between items-center gap-1'>
            <h4 className='h-3 w-full basis-1/7 bg-slate-600 rounded'></h4>
            <h4 className='h-3 basis-1/3 bg-slate-500 rounded'></h4>
          </div>
          <div className='flex flex-row justify-between items-center gap-1'>
            <p className='h-2 w-full basis-1/7 bg-slate-600 rounded '></p>
            <p className='h-2 basis-1/3 bg-slate-500 rounded'></p>
          </div>
        </div>
      </div>
    </button>
  );
}
