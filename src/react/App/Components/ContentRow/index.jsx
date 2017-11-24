import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function ContentRow({ className, children }) {
  return (
    <div className={className}>{children}</div>
  );
}

ContentRow.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string.isRequired,
};

export default styled(ContentRow)`
  padding: 24px;
`;
