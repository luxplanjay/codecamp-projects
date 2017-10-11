import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardMedia, CardTitle } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';

const listStyles = {
  'display': 'flex',
  'flex-flow': 'row wrap',
};

const list = ['html', 'css', 'js', 'react', 'vue', 'node', 'mongo', 'webpack'];

const Stack = () => (
  <div className="stack">
    <MuiThemeProvider>
      <Card>
        <CardTitle title="Stack" />
        <div style={listStyles}>
          {list.map(item => (
            <FlatButton
              key={item}
              label={item}
              primary
              icon={<FontIcon className="muidocs-icon-custom-github" />}
            />
        ))}
        </div>
      </Card>
    </MuiThemeProvider>
  </div>
);

export default Stack;
