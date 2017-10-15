/**
 * Created by Zerk on 14-Oct-17.
 */

import React from 'react';
import PropTypes from 'prop-types';
import Markdown from 'react-markdown';
import './styles.scss';

const propTypes = {
  markup: PropTypes.string.isRequired,
};

const Preview = ({ markup }) => (
  <div className="preview-pane">
    <Markdown source={markup} />
  </div>
);

Preview.propTypes = propTypes;

export default Preview;
