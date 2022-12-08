import React, { useEffect, useState } from "react";
import { AlbumCard } from "../../components";
import './Home.css';

const Home = () => {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [exercisesPerPage] = useState(6);

    const fetchData = () => {
        fetch('./albums.json')
        .then((response) => response.json())
        .then((rawData) => {
            setData(rawData);
            console.log(data);
        })
        .catch((err) => {
            console.log(err.message);
        })
    }
    useEffect(() => {
        fetchData();
    },[]);


    return (
        <>
            <h1 className="head-text">Top 500 Albums Ranked By Rolling Stone </h1>
            <div className="flex flex-col justify-center items-center">
                <div className="w-full flex justify-between justify-center items-center sm: flex-row flex-col mt-4 mb-10">
                    <div className="flex flex-wrap sm:justify-start justify-center gap-8">
                        {data.map((album, i) => (
                            <AlbumCard
                            album = {album}
                            i = {i}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
export default Home;