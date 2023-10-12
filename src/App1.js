function App1() {
    return (
        <>
            <div className="topnav">
                <a>
                    <img className="logo" src="img/fav.png" height="192px" width="341px" />
                </a>
                <a href="index.html">Home</a>
                <a href="404.html">Search</a>
                <a href="404.html">Playlists</a>
                <a href="404.html">Your Library</a>
                <a href="player.html">Play Random</a>
                <a href="Login.html">Login</a>
            </div>
            <div className="player">
                {/* Define the section for displaying details */}
                <div className="details">
                    <div className="now-playing">PLAYING x OF y</div>
                    <div className="track-art" />
                    <div className="track-name">Track Name</div>
                    <div className="track-artist">Track Artist</div>
                </div>
                {/* Define the section for displaying track buttons */}
                <div className="buttons">
                    <div className="prev-track" onclick="prevTrack()">
                        <i className="fa fa-step-backward fa-2x" />
                    </div>
                    <div className="playpause-track" onclick="playpauseTrack()">
                        <i className="fa fa-play-circle fa-5x" />
                    </div>
                    <div className="next-track" onclick="nextTrack()">
                        <i className="fa fa-step-forward fa-2x" />
                    </div>
                </div>
                {/* Define the section for displaying the seek slider*/}
                <div className="slider_container">
                    <div className="current-time">00:00</div>
                    <input
                        type="range"
                        min={1}
                        max={100}
                        defaultValue={0}
                        className="seek_slider"
                        onchange="seekTo()"
                    />
                    <div className="total-duration">00:00</div>
                </div>
                {/* Define the section for displaying the volume slider*/}
                <div className="slider_container">
                    <i className="fa fa-volume-down" />
                    <input
                        type="range"
                        min={1}
                        max={100}
                        defaultValue={99}
                        className="volume_slider"
                        onchange="setVolume()"
                    />
                    <i className="fa fa-volume-up" />
                </div>
            </div>
            {/* Load the main script for the player */}
        </>
    );
}

export default App1;