import React, { useEffect, useState } from "react";
import { AlbumCard, Pagination } from "../../components";
import './Home.css';
const Home = () => {
    const [albums, setAlbums] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [albumsPerPage] = useState(25);

    useEffect(() => {
        const fetchData = () => {
            setLoading(true);
            fetch('./albums.json')
            .then((response) => response.json())
            .then((rawData) => {
                setAlbums(rawData);
            })
            .catch((err) => {
                console.log(err.message);
            })
            setLoading(false);
        }
        fetchData();
    }, []);


    //getting current posts
    const indexOfLastAlbum = currentPage * albumsPerPage;
    const indexOfFirstAlbum = indexOfLastAlbum - albumsPerPage;
    const currentAlbums = albums.slice(indexOfFirstAlbum, indexOfLastAlbum);


    //changing the page
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    };


    return (
        <>
        <h2 className="head-text">Top 500 Albums Ranked By Rolling Stone</h2>
        <div className="flex flex-col justify-center items-center mt-4">
            <div className="w-full flex justify-center items-center sm: flex-col mt-4 mb-10">
                <div className="flex  flex-wrap sm:justify-start justify-center gap-8">
                    {currentAlbums.map((album, i) => (
                        <AlbumCard
                        album = {album}
                        i = {i}
                        loading = {loading}
                        />
                    ))}
                </div>
            
            </div>
            <Pagination
            albumsPerPage={albumsPerPage} 
            totalAlbums={albums.length}
            paginate={paginate}
            />
        </div>
        </>
    );
}
export default Home;