import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GlowLink from '../GlowLink';

function Logo({ className }) {
  return (
    <div className={className} id="logo">
      <GlowLink href="/">Eo Forever</GlowLink>
    </div>
  );
}

Logo.propTypes = {
  className: PropTypes.string.isRequired,
};

export default styled(Logo)`
  float: left;
  font-size: 24px;
  color: white;
  text-decoration: none;
`;
