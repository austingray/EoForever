import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AjaxSpinner from '../AjaxSpinner';
import { $white, $blue, calcOpacity } from '../../utilities/colors';
import { transition } from '../../utilities/transitions';

class LoadingOverlay extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
        <AjaxSpinner />
      </div>
    );
  }
}

LoadingOverlay.propTypes = {
  className: PropTypes.string.isRequired,
};

export default styled(LoadingOverlay)`
  width: 1200px;
  height: 600px;
  position: fixed;
  top: 58px;
  left: 0;
  right: 0;
  margin: auto;
  background: ${calcOpacity(0.2, $blue)};
`;
