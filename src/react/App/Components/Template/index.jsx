import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';
import Logo from '../Logo';
import Menu from '../Menu';
import ContentBox from '../ContentBox';

function Template({ children }) {
  return (
    <div>
      <Header>
        <Logo />
        <Menu />
      </Header>
      <ContentBox>
        {children}
      </ContentBox>
    </div>
  );
}

Template.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Template;
