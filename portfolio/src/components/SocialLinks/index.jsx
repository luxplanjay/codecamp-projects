import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardMedia, CardTitle } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import './styles.scss';

const links = [
  {
    url: 'https://github.com/axZerk',
    label: 'GitHub',
  },
  {
    url: 'https://www.facebook.com/profile.php?id=100013719586629',
    label: 'Facebook',
  },
  {
    url: 'https://www.linkedin.com/in/alex-repeta',
    label: 'LinkedIn',
  },
  {
    url: 'https://www.freecodecamp.org/axzerk',
    label: 'FreeCodeCamp',
  },
  {
    url: 'https://codepen.io/Zerk/pens/public/',
    label: 'CodePen',
  },
];

const cardStyles = {
  padding: '1rem 0.5rem',
};

const listStyles = {
  display: 'flex',
  justifyContent: 'space-between',
};

const SocialLinks = () => (
  <div className="social-links">
    <MuiThemeProvider>
      <Card style={cardStyles}>
        <CardTitle title="Social Links" />
        <div style={listStyles}>
          {links.map(link => (
            <RaisedButton
              key={link.label}
              href={link.url}
              target="_blank"
              label={link.label}
              rel="noopener noreferrer"
              primary
              icon={<FontIcon className="muidocs-icon-custom-github" />}
            />
        ))}
        </div>
      </Card>
    </MuiThemeProvider>
  </div>
);

export default SocialLinks;
