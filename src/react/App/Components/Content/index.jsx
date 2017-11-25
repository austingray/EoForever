import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { $white, $darkGray } from '../../utilities/colors';

function Content({ className, children }) {
  return (
    <div className={className}>{children}</div>
  );
}

Content.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string.isRequired,
};

export default styled(Content)`
  border: 1px solid ${$darkGray};
  width: 1200px;
  height: 600px;
  color: ${$white};
  position: absolute;
  top: 58px;
  right: 0;
  left: 0;
  margin: auto;
  overflow-y: auto;
`;
