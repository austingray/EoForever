import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { $white, $darkGray } from '../../utilities/colors';
import { transition, duration } from '../../utilities/transitions';

class Content extends React.Component {
  render() {
    return (
      <div className={this.props.className}>{this.props.children}</div>
    );
  }
}

Content.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string.isRequired,
};

export default styled(Content)`
  ${transition(duration)}
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
  transform: ${props => props.loading ? 'scale(0.95)' : 'scale(1)'};
  filter: ${props => props.loading ? 'blur(5px)' : 'blur(0)'};
  pointer-events: ${props => props.loading ? 'none' : 'auto'};
`;
