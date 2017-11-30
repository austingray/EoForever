import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AjaxSpinner from '../AjaxSpinner';
import { transition, keyframeRotate, duration } from '../../utilities/transitions';

class LoadingIndicator extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
        <AjaxSpinner />
      </div>
    );
  }
}

LoadingIndicator.propTypes = {
  className: PropTypes.string.isRequired,
};

export default styled(LoadingIndicator)`
  ${transition(duration)}
  opacity: ${props => props.loading ? '1' : '0'};
  animation: ${keyframeRotate()} 1s infinite;
  width: 100px;
  height: 100px;
  position: absolute;
  z-index: 99;
  left: 0;
  top: 300px;
  right: 0;
  margin: auto;
`;
