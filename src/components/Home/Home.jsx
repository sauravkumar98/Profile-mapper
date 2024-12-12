import React from 'react';
import {Link} from 'react-router-dom';
import ProfileCard from '../Profile/ProfileCard';
import './Home.css';

export default function Home() {
    return (
       <>
        <div className="profile-box">
            <ProfileCard/>
          
        </div>  
       </>
    );
}
