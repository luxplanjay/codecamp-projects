import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardMedia, CardTitle } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import './styles.scss';

const listStyles = {
  display: 'flex',
};

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
    url: 'www.linkedin.com/in/alex-repeta',
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

const SocialLinks = () => (
  <div className="social-links">
    <MuiThemeProvider>
      <Card>
        <CardTitle title="Social Links" />
        <div style={listStyles}>
          {links.map(link => (
            <FlatButton
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
