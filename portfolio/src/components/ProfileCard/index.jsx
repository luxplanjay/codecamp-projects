import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import profilePic from './img/profile-pic.jpg';
import './styles.scss';

const ProfileCard = () => (
  <div className="profile-card">
    <MuiThemeProvider>
      <Card>
        <CardMedia>
          <img src={profilePic} alt="" />
        </CardMedia>
        <CardTitle title="Alexander Repeta" />
        <CardText />
      </Card>
    </MuiThemeProvider>
  </div>
);

export default ProfileCard;
