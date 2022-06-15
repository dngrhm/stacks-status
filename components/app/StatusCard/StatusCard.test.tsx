import React from 'react';
import * as ReactDOM from 'react-dom';
import { Default as StatusCard } from './StatusCard.stories';

describe('StatusCard', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<StatusCard />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
