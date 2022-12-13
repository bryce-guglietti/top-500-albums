import React from 'react'
const AlbumCard = ({album, i, loading}) => {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }
  if(loading){
    return <h2>Loading...</h2>
  }
  return (
    <div className='flex flex-col w-[380px] h-[150px] ml-16 p-4 bg-black bg-opacity-95 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer hover:scale-110 hover:shadow-[0_0_25px_rgba(0,136,204,0.8)]'>
        <div className='relative w-full h-56 group'>
        <div className='absolute inset-0 justify-center items-center'>
        <div className='mt-2 flex flex-col ' onClick={() => openInNewTab(`https://en.wikipedia.org/wiki/${album.title}`)}>
          <p className='font-extrabold text-lg text-primary flex justify-center'>
            Rank: {album.position}
          </p>
          <p className='text-primary justify-start font-semibold mt-3 truncate'>
            Title: {album.title}
          </p>
          <p className='text-accent mt-3 font-semibold'>
            Artist: {album.artist}
          </p>

        </div>
        </div>
        </div>
    </div>
  )
}

export default AlbumCard