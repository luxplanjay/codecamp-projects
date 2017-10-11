import React from 'react';
import ProfileCard from './ProfileCard';
import SocialLinks from './SocialLinks';
import Stack from './Stack';
import ProjectGallery from './ProjectGallery';

const App = () => (
  <div className="container">
    <ProfileCard />
    <div className="aside">
      <SocialLinks />
      <Stack />
    </div>
    <ProjectGallery />
  </div>
);

export default App;
