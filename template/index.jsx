import React from 'react';
import { renderToString } from 'react-dom/server';
import template from './template';

export default (state, Component) => template(
  state,
  renderToString(<Component state={state} />),
);
