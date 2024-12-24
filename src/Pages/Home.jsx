import React from 'react';
import BannerSlider from '../components/BannerSlider';
import VolunteerNeedsNow from '../components/VolunteerNeedsNow';
import VolunteerNeedPostDetails from './VolunteerNeedPostDetails';
import ManageMyPosts from './ManageMyPosts';

const Home = () => {
    return (
        <div>
            <BannerSlider></BannerSlider>
            <VolunteerNeedsNow></VolunteerNeedsNow>
           
        </div>
    );
};

export default Home;