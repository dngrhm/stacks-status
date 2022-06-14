---
to: components/<%= dir %>/<%= name %>/<%= name %>.test.tsx
---
import React from 'react';
import * as ReactDOM from 'react-dom';
import { Default as <%= name %> } from './<%= name %>.stories';

describe('<%= name %>', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<<%= name %> />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
