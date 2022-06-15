import React from 'react';
import * as ReactDOM from 'react-dom';
import { Default as ProgressBar } from './ProgressBar.stories';

describe('ProgressBar', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ProgressBar />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
