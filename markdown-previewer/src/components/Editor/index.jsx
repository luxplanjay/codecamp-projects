/**
 * Created by Zerk on 15-Oct-17.
 */

import React from 'react';
import PropTypes from 'prop-types';
import CodeMirror from 'react-codemirror2';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css';
import './styles.scss';

const propTypes = {
  onChange: PropTypes.func.isRequired,
  code: PropTypes.string.isRequired,
};

const Editor = ({ code, onChange }) => {
  const handleChange = (editor, metadata, value) => {
    onChange(value);
  };

  return (
    <div className="editor-pane">
      <CodeMirror
        value={code}
        options={{
          mode: 'xml',
          theme: 'monokai',
          lineNumbers: true,
        }}
        onChange={handleChange}
      />
    </div>
  );
};

Editor.propTypes = propTypes;

export default Editor;
