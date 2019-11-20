import React from 'react'
import RecentlyPlayed from './components/RecentlyPlayed'
import MixTapes from './components/MixTapes'
import FeaturedArtist from './components/FeaturedArtist'
import Playlists from './components/Playlists'
import Sidebar from './components/Sidebar';
import './Homepage.css';
import AlbumOfWeek from './components/AlbumOfWeek'

export default function Homepage() {
    return (
        <div>
            {/* add nav bar here */}
            
            <div className="homepage-container">
                <div className="homepage-sidebar">
                    <Sidebar />
                </div>

                <div className="homepage-main">
                    <AlbumOfWeek />
                    <RecentlyPlayed />
                    <MixTapes />
                    <FeaturedArtist />
                    <Playlists />
                </div>
            </div>

            {/* add footer here */}
        </div>
    )
}