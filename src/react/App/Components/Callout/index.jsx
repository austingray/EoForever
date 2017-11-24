import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { $white } from '../../utilities/colors';

function Callout({ className, children }) {
  return (
    <div className={className}>{children}</div>
  );
}

Callout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string.isRequired,
};

export default styled(Callout)`
  padding: 80px;
  text-align: center;
  font-size: 48px;
  color: ${$white};
`;
