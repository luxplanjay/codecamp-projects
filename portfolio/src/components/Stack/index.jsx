import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardMedia, CardTitle } from 'material-ui/Card';
import htmlIcon from './img/html.svg';
import cssIcon from './img/css.svg';
import sassIcon from './img/sass.svg';
import jsIcon from './img/javascript.svg';
import webpackIcon from './img/webpack.svg';
import reactIcon from './img/react.svg';
import routerIcon from './img/react-router.svg';
import reduxIcon from './img/redux.svg';
import nodeIcon from './img/nodejs.svg';
import mongoIcon from './img/mongodb.svg';
import './styles.scss';

const list = [
  { id: 0, icon: htmlIcon },
  { id: 1, icon: cssIcon },
  { id: 2, icon: sassIcon },
  { id: 3, icon: jsIcon },
  { id: 4, icon: webpackIcon },
  { id: 5, icon: reactIcon },
  { id: 6, icon: routerIcon },
  { id: 7, icon: reduxIcon },
  { id: 8, icon: nodeIcon },
  { id: 9, icon: mongoIcon },
];

const cardStyles = {
  padding: '0.5rem',
};

const itemStyles = {
  flexBasis: '7rem',
  height: '7rem',
  backgroundSize: 'contain',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  marginBottom: '1rem',
};

const Stack = () => (
  <div className="stack">
    <MuiThemeProvider>
      <Card style={cardStyles}>
        <CardTitle title="Stack" />
        <CardMedia>
          <ul className="stack-list">
            {list.map(item => (
              <li
                key={item.id}
                style={{ ...itemStyles, backgroundImage: `url(${item.icon})` }}
              />
            ))}
          </ul>
        </CardMedia>
      </Card>
    </MuiThemeProvider>
  </div>
);

export default Stack;
