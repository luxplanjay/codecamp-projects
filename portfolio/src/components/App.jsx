import React from 'react';
import ProfileCard from './ProfileCard';
import SocialLinks from './SocialLinks';
import Stack from './Stack';

const App = () => (
  <div className="container">
    <ProfileCard />
    <div className="aside">
      <SocialLinks />
      <Stack />
    </div>
  </div>
);

export default App;
