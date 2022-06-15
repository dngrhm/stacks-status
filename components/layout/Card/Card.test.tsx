import React from 'react';
import * as ReactDOM from 'react-dom';
import { Default as Card } from './Card.stories';

describe('Card', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
