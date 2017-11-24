import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import InputTextGroup from '../InputTextGroup';
import Button from '../Button';
import GlowLink from '../GlowLink';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: {
        value: '',
        validates: true,
      },
      password: {
        value: '',
        validates: true,
      },
    };
  }
  updateInput(e, key) {
    const { value } = e.target;
    this.setState({
      [key]: {
        value,
        validates: true,
      },
    });
  }
  render() {
    return (
      <form className={this.props.className} id="login-form">
        <InputTextGroup
          label="Email"
          name="email"
          value={this.state.email.value}
          validates={this.state.email.validates}
          updateInput={(e, k) => this.updateInput(e, k)}
        />
        <InputTextGroup
          label="Password"
          name="password"
          type="password"
          value={this.state.password.value}
          validates={this.state.password.validates}
          updateInput={(e, k) => this.updateInput(e, k)}
        />
        <Button>Submit</Button>
        <GlowLink margin="0 0 0 24px" href="/password-reset">I Want To Reset My Password</GlowLink>
      </form>
    );
  }
}

LoginForm.propTypes = {
  className: PropTypes.string.isRequired,
};

export default styled(LoginForm)`
  width: 100%;
  display: block;
`;
