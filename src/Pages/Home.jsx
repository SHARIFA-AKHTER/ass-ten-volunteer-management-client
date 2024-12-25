import React from 'react';
import BannerSlider from '../components/BannerSlider';
import VolunteerNeedsNow from '../components/VolunteerNeedsNow';
import AllVolunteerPosts from '../components/AllVolunteerPosts';
import SearchBar from './SearchBar';

const Home = () => {
    return (
        <div>
            <BannerSlider></BannerSlider>
            <SearchBar></SearchBar>
            <AllVolunteerPosts></AllVolunteerPosts>
            <VolunteerNeedsNow></VolunteerNeedsNow>
            
        </div>
    );
};

export default Home;