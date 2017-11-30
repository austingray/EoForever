import React from 'react';
import PropTypes from 'prop-types';
import ReaxpressState from 'reaxpress-state';
import Header from '../Header';
import Logo from '../Logo';
import Menu from '../Menu';
import Content from '../Content';
import LoadingIndicator from '../LoadingIndicator';

@ReaxpressState
class Template extends React.Component {
  render() {
    return (
      <div>
        <Header>
          <Logo />
          <Menu />
        </Header>
        <LoadingIndicator loading={this.props.state.loading} />
        <Content loading={this.props.state.loading}>
          {this.props.children}
        </Content>
      </div>
    );
  }
}

Template.defaultProps = {
  state: {
    loading: false,
  },
};

Template.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  state: PropTypes.shape({
    loading: PropTypes.bool,
  }),
};

export default Template;
