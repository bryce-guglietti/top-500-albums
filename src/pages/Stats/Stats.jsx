import React, { useEffect, useState } from "react";
const Stats = () => {

    const [albums, setAlbums] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect( () => {
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


    function Artist(name, albums){
        this.name = name;
        this.albums = albums;
    }
    function Album (title, rank){
        this.title = title;
        this.rank = rank;
    }
    var artists = [];
    var oArtists = [];
    let top3 = [new Artist("", []), new Artist("", []), new Artist("", [])];
    let fourAlbums = 0;
    let threeAlbums = 0;
    for (const album of albums) {
        if (!artists.includes(album.artist)){
            artists.push(album.artist);
            oArtists.push(new Artist(album.artist, [new Album(album.title, album.position)]));
        }else{
            oArtists[oArtists.findIndex(x=>x.name === album.artist)].albums.push(new Album(album.title, album.position));
        }

    }

    //Finding Most in Top 500.
    for (const art of oArtists){
        if (art.albums.length>top3[0].albums.length){
            top3.splice(0,1,art);
        }else if (art.albums.length>top3[1].albums.length){
            top3.splice(1,1,art);
        }else if (art.albums.length>top3[2].albums.length){
        top3.splice(2,1,art);
        }
        if(art.albums.length === 4){
            fourAlbums++;
        }
        if(art.albums.length === 3){
            threeAlbums++;
        }

    }
  return (
    <>
    <h2 className="head-text">Stats</h2>
    <div className="w-full h-[500px] justify-center flex flex-col font-semibold text-black text-center">
        <p className="p-5 flex flex-col">{artists.length} artists make up the top 500 albums.</p>
        <p>The Artists with the most albums in the Top 500 are,</p>
        1. {top3[0].name} ({top3[0].albums.length})<br/>
        2. {top3[1].name} ({top3[1].albums.length})<br/>
        3. {top3[2].name} ({top3[2].albums.length})<br/>
        <p className="mt-5"> {fourAlbums} artists have Four albums in the top 500.</p>
        <p> {threeAlbums} artists have Four albums in the top 500.</p>
     
    </div>
    </>
  )
}

export default Stats