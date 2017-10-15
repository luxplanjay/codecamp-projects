/**
 * Created by Zerk on 14-Oct-17.
 */

import React, { Component } from 'react';
import defaultCode from './default-code';
import Editor from '../Editor';
import Preview from '../Preview';
import './styles.scss';

export default class App extends Component {
  state = {
    code: defaultCode,
  };

  handleEditorChange = (str) => {
    this.setState({
      code: str,
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="container__heading">Markdown Previewer</h1>
        <div className="container__body">
          <Editor
            code={this.state.code}
            onChange={this.handleEditorChange}
          />
          <Preview markup={this.state.code} />
        </div>
      </div>
    );
  }
}
