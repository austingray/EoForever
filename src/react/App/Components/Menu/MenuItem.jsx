import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GlowLink from '../GlowLink';

function MenuItem({ className, href, text }) {
  return (
    <li className={className}>
      <GlowLink href={href}>{text}</GlowLink>
    </li>
  );
}

MenuItem.propTypes = {
  className: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default styled(MenuItem)`
  margin: 0 5px;
  display: inline-block;
`;
