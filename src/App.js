import React, {Component} from "react";
import './App.css';



function App() {

  return (
    <div className="App">
      <>

        <div className="topnav">
          <a href='index.html'>
            <img className="logo" src="img/fav.png" height="192px" width="341px" />
          </a>
          <a href="index.html">Playlists</a>
          <a href="your_playlist.html">Your Playlist</a>
          <a href="Random_player.html">Play Random</a>
          <a href="search.html">Search</a>
        </div>
        <h1>Welcome to Spotify</h1>
        <h2>Trending now,</h2>
        <div className="wrapper">
          <section id="section1">
            <a href="#section3" className="arrow__btn">
              ‹
            </a>
            <div className="item">
              <a href="playlist_1.html">
                {" "}
                <img src="img/spty1.jpg" height="192px" width="341px" />
              </a>
            </div>
            <div className="item">
              <a href="playlist_1.html">
                {" "}
              <img src="img/spty2.jpg" height="192px" width="341px" />
                </a>
            </div>
            <div className="item">
              <a href="playlist_1.html">
                {" "}
              <img src="img/spty3.webp" height="192px" width="341px" />
                </a>
            </div>
            <div className="item">
              <a href="playlist_1.html">
                {" "}
              <img src="img/spty4.webp" height="192px" width="341px" />
                </a>
            </div>
            <div className="item">
              <a href="playlist_1.html">
                {" "}
              <img src="img/spty5.jpg" height="192px" width="341px" />
                </a>
            </div>
            <a href="#section2" className="arrow__btn">
              ›
            </a>
          </section>
          <section id="section2">
            <a href="#section1" className="arrow__btn">
              ‹
            </a>
            <div className="item">
              <a href="playlist_1.html">
                {" "}
              <img src="img/spty6.jpg" height="192px" width="341px" />
                </a>
            </div>
            <div className="item">
              <a href="playlist_1.html">
                {" "}
              <img src="img/spty7.png" height="192px" width="341px" />
                </a>
            </div>
            <div className="item">
              <a href="playlist_1.html">
                {" "}
              <img src="img/spty8.webp" height="192px" width="341px" />
                </a>
            </div>
            <div className="item">
              <a href="playlist_1.html">
                {" "}
              <img src="img/spty9.jpg" height="192px" width="341px" />
                </a>
            </div>
            <div className="item">
              <a href="playlist_1.html">
                {" "}
              <img src="img/spty10.jpg" height="192px" width="341px" />
                </a>
            </div>
            <a href="#section3" className="arrow__btn">
              ›
            </a>
          </section>
          <section id="section3">
            <a href="#section2" className="arrow__btn">
              ‹
            </a>
            <div className="item">
              <a href="playlist_1.html">
                {" "}
              <img src="img/spty11.jpg" height="192px" width="341px" />
                </a>
            </div>
            <div className="item">
              <a href="playlist_1.html">
                {" "}
              <img src="img/spty12.jpg" height="192px" width="341px" />
                </a>
            </div>
            <div className="item">
              <a href="playlist_1.html">
                {" "}
              <img src="img/spty13.jpg" height="192px" width="341px" />
                </a>
            </div>
            <div className="item">
              <a href="playlist_1.html">
                {" "}
              <img src="img/spty14.jpg" height="192px" width="341px" />
                </a>
            </div>
            <div className="item">
              <a href="playlist_1.html">
                {" "}
              <img src="img/spty15.png" height="192px" width="341px" />
                </a>
            </div>
            <a href="#section1" className="arrow__btn">
              ›
            </a>
          </section>
        </div>
        <h2>Recommended for today,</h2>
        <div className="wrapper">
          <section id="section1_1">
            <a href="#section3_1" className="arrow__btn">
              ‹
            </a>
            <div className="item">
              <a href="playlist_1.html">
                {" "}
              <img src="img/spty1.jpg" height="192px" width="341px" />
                </a>
            </div>
            <div className="item">
              <a href="playlist_1.html">
                {" "}
              <img src="img/spty2.jpg" height="192px" width="341px" />
                </a>
            </div>
            <div className="item">
              <a href="playlist_1.html">
                {" "}
              <img src="img/spty3.webp" height="192px" width="341px" />
                </a>
            </div>
            <div className="item">
              <a href="playlist_1.html">
                {" "}
              <img src="img/spty4.webp" height="192px" width="341px" />
                </a>
            </div>
            <div className="item">
              <a href="playlist_1.html">
                {" "}
              <img src="img/spty5.jpg" height="192px" width="341px" />
                </a>
            </div>
            <a href="#section2_1" className="arrow__btn">
              ›
            </a>
          </section>
          <section id="section2_1">
            <a href="#section1_1" className="arrow__btn">
              ‹
            </a>
            <div className="item">
              <a href="playlist_1.html">
                {" "}
              <img src="img/spty6.jpg" height="192px" width="341px" />
                </a>
            </div>
            <div className="item">
              <a href="playlist_1.html">
                {" "}
              <img src="img/spty7.png" height="192px" width="341px" />
                </a>
            </div>
            <div className="item">
              <a href="playlist_1.html">
                {" "}
              <img src="img/spty8.webp" height="192px" width="341px" />
                </a>
            </div>
            <div className="item">
              <a href="playlist_1.html">
                {" "}
              <img src="img/spty9.jpg" height="192px" width="341px" />
                </a>
            </div>
            <div className="item">
              <a href="playlist_1.html">
                {" "}
              <img src="img/spty10.jpg" height="192px" width="341px" />
                </a>
            </div>
            <a href="#section3_1" className="arrow__btn">
              ›
            </a>
          </section>
          <section id="section3_1">
            <a href="#section2_1" className="arrow__btn">
              ‹
            </a>
            <div className="item">
              <a href="playlist_1.html">
                {" "}
              <img src="img/spty11.jpg" height="192px" width="341px" />
                </a>
            </div>
            <div className="item">
              <a href="playlist_1.html">
                {" "}
              <img src="img/spty12.jpg" height="192px" width="341px" />
                </a>
            </div>
            <div className="item">
              <a href="playlist_1.html">
                {" "}
              <img src="img/spty13.jpg" height="192px" width="341px" />
                </a>
            </div>
            <div className="item">
              <a href="playlist_1.html">
                {" "}
              <img src="img/spty14.jpg" height="192px" width="341px" />
                </a>
            </div>
            <div className="item">
              <a href="playlist_1.html">
                {" "}
              <img src="img/spty15.png" height="192px" width="341px" />
                </a>
            </div>
            <a href="#section1_1" className="arrow__btn">
              >
            </a>
          </section>
        </div>
        <h2>Uniquely yours,</h2>
        <div className="wrapper">
          <section id="section1_2">
            <a href="#section3_2" className="arrow__btn">
              ‹
            </a>
            <div className="item">
              <a href="playlist_1.html">
                {" "}
              <img src="img/spty1.jpg" height="192px" width="341px" />
                </a>
            </div>
            <div className="item">
              <a href="playlist_1.html">
                {" "}
              <img src="img/spty2.jpg" height="192px" width="341px" />
                </a>
            </div>
            <div className="item">
              <a href="playlist_1.html">
                {" "}
              <img src="img/spty3.webp" height="192px" width="341px" />
                </a>
            </div>
            <div className="item">
              <a href="playlist_1.html">
                {" "}
              <img src="img/spty4.webp" height="192px" width="341px" />
                </a>
            </div>
            <div className="item">
              <a href="playlist_1.html">
                {" "}
              <img src="img/spty5.jpg" height="192px" width="341px" />
                </a>
            </div>
            <a href="#section2_2" className="arrow__btn">
              ›
            </a>
          </section>
          <section id="section2_2">
            <a href="#section1_2" className="arrow__btn">
              ‹
            </a>
            <div className="item">
              <a href="playlist_1.html">
                {" "}
              <img src="img/spty6.jpg" height="192px" width="341px" />
                </a>
            </div>
            <div className="item">
              <a href="playlist_1.html">
                {" "}
              <img src="img/spty7.png" height="192px" width="341px" />
                </a>
            </div>
            <div className="item">
              <a href="playlist_1.html">
                {" "}
              <img src="img/spty8.webp" height="192px" width="341px" />
                </a>
            </div>
            <div className="item">
              <a href="playlist_1.html">
                {" "}
              <img src="img/spty9.jpg" height="192px" width="341px" />
                </a>
            </div>
            <div className="item">
              <a href="playlist_1.html">
                {" "}
              <img src="img/spty10.jpg" height="192px" width="341px" />
                </a>
            </div>
            <a href="#section3_2" className="arrow__btn">
              >
            </a>
          </section>
          <section id="section3_2">
            <a href="#section2_2" className="arrow__btn">
              ‹
            </a>
            <div className="item">
              <a href="playlist_1.html">
                {" "}
              <img src="img/spty11.jpg" height="192px" width="341px" />
                </a>
            </div>
            <div className="item">
              <a href="playlist_1.html">
                {" "}
              <img src="img/spty12.jpg" height="192px" width="341px" />
                </a>
            </div>
            <div className="item">
              <a href="playlist_1.html">
                {" "}
              <img src="img/spty13.jpg" height="192px" width="341px" />
                </a>
            </div>
            <div className="item">
              <a href="playlist_1.html">
                {" "}
              <img src="img/spty14.jpg" height="192px" width="341px" />
                </a>
            </div>
            <div className="item">
              <a href="playlist_1.html">
                {" "}
              <img src="img/spty15.png" height="192px" width="341px" />
                </a>
            </div>
            <a href="#section1_2" className="arrow__btn">
              >
            </a>
          </section>
        </div>
        <div className="os-scrollbar os-scrollbar-vertical">
          <div className="os-scrollbar-track">
            <div
                className="os-scrollbar-handle"
                style={{ height: "31.2467%", transform: "translate(0px, 204.066px)" }}
            ></div>
          </div>
        </div>
      </>

    </div>
  );
}

export default App;
