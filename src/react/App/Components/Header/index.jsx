import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class Header extends React.Component {
  render() {
    return (
      <div className={this.props.className} id="header">{this.props.children}</div>
    );
  }
}

Header.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string.isRequired,
};

export default styled(Header)`
  padding-top: 19px;
  width: 1200px;
  margin: 0 auto;
`;
