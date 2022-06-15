import React from 'react';
import * as ReactDOM from 'react-dom';
import { Default as PageHeader } from './PageHeader.stories';

describe('PageHeader', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PageHeader />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
