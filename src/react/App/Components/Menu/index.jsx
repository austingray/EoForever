import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MenuItem from './MenuItem';

const items = [
  {
    href: '/login',
    text: 'Login',
  },
  {
    href: '/register',
    text: 'Register',
  },
];

function Menu({ className }) {
  return (
    <ul className={className} id="menu">
      {
        items.map(item => (
          <MenuItem
            key={item.text}
            href={item.href}
            text={item.text}
          />
        ))
      }
    </ul>
  );
}

Menu.propTypes = {
  className: PropTypes.string.isRequired,
};

export default styled(Menu)`
  float: right;
  list-style-type: none;
  margin: 0;
  padding: 5px 0 0;
  display: block;
`;
