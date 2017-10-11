import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardTitle, CardMedia } from 'material-ui/Card';

import tribute from './img/tribute-page.png';
import quote from './img/quote-app.png';
import weather from './img/weather-app.png';
import wiki from './img/wiki-view.png';
import twitch from './img/twitch-app.png';
import calc from './img/calc.png';
import pomodoro from './img/pomodoro.png';
import ticTac from './img/tic-tac.png';
import simon from './img/simon.png';
import './styles.scss';

const items = [
  {
    url: 'https://axzerk.github.io/codecamp-projects/tribute-page/dist/',
    img: tribute,
    tag: 'tribute page',
  },
  {
    url: 'https://axzerk.github.io/codecamp-projects/random-quote-app/dist/',
    img: quote,
    tag: 'quote app',
  },
  {
    url: 'https://axzerk.github.io/codecamp-projects/weather-app/dist/',
    img: weather,
    tag: 'local weather app',
  },
  {
    url: 'https://axzerk.github.io/codecamp-projects/wiki-viewer/dist/',
    img: wiki,
    tag: 'wiki viewer',
  },
  {
    url: 'https://axzerk.github.io/codecamp-projects/twitch-status-app/dist/',
    img: twitch,
    tag: 'twitch.tv app',
  },
  {
    url: 'https://axzerk.github.io/codecamp-projects/calculator-app/dist/',
    img: calc,
    tag: 'calculator',
  },
  {
    url: 'https://axzerk.github.io/codecamp-projects/pomodoro-clock/dist/',
    img: pomodoro,
    tag: 'pomodoro clock',
  },
  {
    url: 'https://axzerk.github.io/codecamp-projects/tic-tac-toe/dist/',
    img: ticTac,
    tag: 'tic tac toe',
  },
  {
    url: 'https://axzerk.github.io/codecamp-projects/simon-game/dist/',
    img: simon,
    tag: 'simon game',
  },
];

const cardStyles = {
  padding: '1rem 0.5rem',
  marginTop: '1rem',
};

const ProjectGallery = () => (
  <MuiThemeProvider>
    <Card style={cardStyles}>
      <CardTitle title="Projects" />
      <div className="gallery">
        {items.map(item => (
          <a key={item.tag} href={item.url} target="_blank" rel="noopener noreferrer">
            <Card>
              <CardMedia>
                <img src={item.img} alt={item.tag} />
              </CardMedia>
            </Card>
          </a>
      ))}
      </div>
    </Card>
  </MuiThemeProvider>

);

export default ProjectGallery;
