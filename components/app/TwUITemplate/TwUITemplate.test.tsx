import React from 'react';
import * as ReactDOM from 'react-dom';
import { Default as TwUITemplate } from './TwUITemplate.stories';

describe('TwUITemplate', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TwUITemplate />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
