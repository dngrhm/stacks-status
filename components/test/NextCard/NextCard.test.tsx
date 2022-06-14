import React from 'react';
import * as ReactDOM from 'react-dom';
import { Default as NextCard } from './NextCard.stories';

describe('NextCard', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NextCard />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
