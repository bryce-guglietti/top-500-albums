import React from 'react'
const AlbumCard = ({album, i}) => {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }
  return (
    <div className='flex flex-col w-[400px] h-[200px] ml-8 p-4 bg-white bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer hover:scale-110'>
        <div className='relative w-full h-56 group'>
        <div className='absolute inset-0 justify-center items-center'>
        <div className='mt-4 flex flex-col ' onClick={() => openInNewTab(`https://en.wikipedia.org/wiki/${album.title}`)}>
          <p className='font-extrabold text-lg text-black flex justify-center'>
            Rank: #{album.position}
          </p>
          <p className='text-black justify-start font-semibold mt-3 truncate'>
            Title: {album.title}
          </p>
          <p className='text-gray-600 mt-8 font-semibold'>
            Artist: {album.artist}
          </p>

        </div>
        </div>
        </div>
    </div>
  )
}

export default AlbumCard