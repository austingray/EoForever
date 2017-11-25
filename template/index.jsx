import React from 'react';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import template from './template';

export default (state, Component) => {
  const sheet = new ServerStyleSheet();
  const html = renderToString(
    <StyleSheetManager sheet={sheet.instance}>
      <Component state={state} />
    </StyleSheetManager>,
  );
  const styleTags = sheet.getStyleTags();
  return template(
    state,
    styleTags,
    html,
  );
};
