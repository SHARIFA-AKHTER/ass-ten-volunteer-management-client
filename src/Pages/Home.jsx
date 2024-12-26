import React from 'react';
import BannerSlider from '../components/BannerSlider';
import VolunteerNeedsNow from '../components/VolunteerNeedsNow';
import AllVolunteerPosts from '../components/AllVolunteerPosts';
import SearchBar from './SearchBar';
import UpcomingEvents from '../components/UpcomingEvents';
import SuccessStories from '../components/SuccessStories';

const Home = () => {
    return (
        <div>
            <BannerSlider></BannerSlider>
            <AllVolunteerPosts></AllVolunteerPosts>
            <VolunteerNeedsNow></VolunteerNeedsNow>
            <UpcomingEvents></UpcomingEvents>
            <SuccessStories></SuccessStories>
            
        </div>
    );
};

export default Home;