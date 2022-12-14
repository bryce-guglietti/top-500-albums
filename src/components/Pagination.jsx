import React from 'react'
import './Pagination.css'
const Pagination = ({albumsPerPage, totalAlbums, paginate}) => {
    const pageNumbers =[];

    for (let i = 1; i <= Math.ceil(totalAlbums / albumsPerPage); i++) {
        pageNumbers.push(i);
    }


  return (
    <div>
        <ul className='flex flex-wrap w-[700px] h-[60px] justify-center p-3 mb-10 rounded-xl bg-black max-sm:items-center max-sm:w-[90%] max-sm:h-[100px] max-sm:ml-3'>
            {pageNumbers.map(number => (
                <li key = {number} class = "links">
                <a onClick={()=> {paginate(number) }} href="#" class="number">
                    {number}
                </a>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Pagination