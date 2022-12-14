import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import './Stats.css';
const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }
const Stats = () => {

    const [albums, setAlbums] = useState([]);
    useEffect( () => {
        const fetchData = () => {
            fetch('./albums.json')
            .then((response) => response.json())
            .then((rawData) => {
                setAlbums(rawData);
            })
            .catch((err) => {
                console.log(err.message);
            })
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
    <div className="w-full h-[800px] items-center text-xl justify-center flex flex-col font-semibold text-black text-center animate-slideleft">
        <motion.div
          whileInView={{ x: [-50, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="app__header-info"
        >
        <p className="p-4 flex flex-col max-sm:p-2 max-sm:mb-8">{artists.length} artists make up the top 500 albums.</p>
        <p className="max-sm:mb-2">The Artists with the most albums in the Top 500 are,</p>
        1. {top3[0].name} ({top3[0].albums.length})<br/>
        2. {top3[1].name} ({top3[1].albums.length})<br/>
        3. {top3[2].name} ({top3[2].albums.length})<br/>
        <p className="mt-5 max-sm:p-4"> {fourAlbums} artists have Four albums in the top 500.</p>
        <p className="mb-16 max-sm:mb-4 max-sm:p-4"> {threeAlbums} artists have Three albums in the top 500.</p>
        </motion.div>
        <motion.div
          whileInView={{ x: [-50, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="app__header-info"
        >
        <div className="mb-4 text-2xl text-green flex flex-row justify-center">
            <img class = "symbol" alt = "spotify" src = "https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png"/>
            Album Links:
        </div>
        <div id="image-track" class= "track">
            <img class="image" alt= "album cover" src="https://www.udiscovermusic.com/wp-content/uploads/2017/08/Beatles-Sgt-Pepper-Cover.jpg" onClick={() => openInNewTab(`https://open.spotify.com/album/6QaVfG1pHYl1z15ZxkvVDW`)} draggable="false" />
            <img class="image" alt= "album cover" src="https://www.udiscovermusic.com/wp-content/uploads/2017/08/Pink-Floyd-Dark-Side-Of-The-Moon.jpg"  onClick={() => openInNewTab(`https://open.spotify.com/album/4LH4d3cOWNNsVw41Gqt2kv`)} draggable="false" />
            <img class="image" alt= "album cover" src="https://www.udiscovermusic.com/wp-content/uploads/2018/05/Marvin-Gaye-Whats-Going-On-AlbumCover-web-optimised-820.jpg" onClick={() => openInNewTab(`https://open.spotify.com/album/2v6ANhWhZBUKkg6pJJBs3B`)} draggable="false" />
            <img class="image" alt= "album cover" src="https://www.udiscovermusic.com/wp-content/uploads/2017/08/Fleetwood-Mac-Rumours-.jpg" onClick={() => openInNewTab(`https://open.spotify.com/album/1bt6q2SruMsBtcerNVtpZB`)} draggable="false" />
            <img class="image" alt= "album cover" src="https://www.udiscovermusic.com/wp-content/uploads/2017/08/Amy-Winehouse-Back-to-Black.jpg" onClick={() => openInNewTab(`https://open.spotify.com/album/097eYvf9NKjFnv4xA9s2oV`)} draggable="false" />
            <img class="image" alt= "album cover" src="https://media.pitchfork.com/photos/5929be5113d197565213b6fe/1:1/w_320,c_limit/b2e5368d.jpg" onClick={() => openInNewTab(`https://open.spotify.com/album/4WD4pslu83FF6oMa1e19mF`)} draggable="false" />
            <img class="image" alt= "album cover" src="https://www.udiscovermusic.com/wp-content/uploads/2015/10/the-velvet-underground-nico.jpg" onClick={() => openInNewTab(`https://open.spotify.com/album/4xwx0x7k6c5VuThz5qVqmV`)} draggable="false" />
            <img class="image" alt= "album cover" src="https://www.udiscovermusic.com/wp-content/uploads/2015/10/Led-Zeppelin-II-cover.jpg" onClick={() => openInNewTab(`https://open.spotify.com/album/70lQYZtypdCALtFVlQAcvx`)} draggable="false" />
            <img class="image" alt= "album cover" src="https://www.udiscovermusic.com/wp-content/uploads/2015/10/Oasis-Definitely-Maybe.jpg" onClick={() => openInNewTab(`https://open.spotify.com/album/3LzKUdUTdJb6P7xGN6SotC`)} draggable="false" />
            <img class="image" alt= "album cover" src="https://www.udiscovermusic.com/wp-content/uploads/2015/10/The-Rolling-Stones-Let-It-Bleed-cover.jpg" onClick={() => openInNewTab(`https://open.spotify.com/album/4l4u9e9jSbotSXNjYfOugy`)} draggable="false" />
            <img class="image" alt= "album cover" src="https://www.udiscovermusic.com/wp-content/uploads/2015/10/The-Clash-London-Calling.jpg" onClick={() => openInNewTab(`https://open.spotify.com/album/6FCzvataOZh68j8OKzOt9a`)} draggable="false" />
            <img class="image" alt= "album cover" src="https://www.udiscovermusic.com/wp-content/uploads/2015/10/The-Who-Whos-Next.jpg" onClick={() => openInNewTab(`https://open.spotify.com/album/5MqyhhHbT13zsloD3uHhlQ`)} draggable="false" />
            <img class="image" alt= "album cover" src="https://www.udiscovermusic.com/wp-content/uploads/2020/09/Cream-Disraeli-Gears-.jpg" onClick={() => openInNewTab(`https://open.spotify.com/album/6fRqzJT070Kp9RWlSXmKcY`)} draggable="false" />
            <img class="image" alt= "album cover" src="https://e.snmc.io/i/1200/s/0a4855e299dadca40374bcb1fb197947/8233626" onClick={() => openInNewTab(`https://open.spotify.com/album/3GmwKB1tgPZgXeRJZSm9WX`)} draggable="false" />
        </div>
        </motion.div>
    </div>

    </>
  )
}

export default Stats