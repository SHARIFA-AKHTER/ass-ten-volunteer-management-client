import React from 'react';
import BannerSlider from '../components/BannerSlider';
import VolunteerNeedsNow from '../components/VolunteerNeedsNow';
import UpcomingEvents from '../components/UpcomingEvents';
import SuccessStories from '../components/SuccessStories';

const Home = () => {
    return (
        <div>
            <BannerSlider></BannerSlider>
            <VolunteerNeedsNow></VolunteerNeedsNow>
            <UpcomingEvents></UpcomingEvents>
            <SuccessStories></SuccessStories>
            
        </div>
    );
};

export default Home;