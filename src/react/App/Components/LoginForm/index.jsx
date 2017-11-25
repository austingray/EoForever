import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import validator from 'validator';
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
  validateForm() {
    // set a return value
    let validates = true;

    // email validation
    const email = {
      validates: true,
    };
    if (!validator.isEmail(this.state.email.value)) {
      email.validates = false;
      validates = false;
    }

    // password validation
    const password = {
      validates: true,
    };
    if (this.state.password.value.length < 8) {
      password.validates = false;
      validates = false;
    }

    this.setState({
      email: Object.assign({}, this.state.email, email),
      password: Object.assign({}, this.state.password, password),
    });

    return validates;
  }
  submitForm() {
    if (this.validateForm()) {
      // do submit
      console.log('submit');
    }
  }
  render() {
    return (
      <form
        className={this.props.className}
        id="login-form"
        onSubmit={(e) => {
          e.preventDefault();
          this.submitForm();
        }}
      >
        <InputTextGroup
          label="Email"
          name="email"
          value={this.state.email.value}
          validates={this.state.email.validates}
          updateInput={(e, k) => this.updateInput(e, k)}
          errorText="You must enter a valid email address."
        />
        <InputTextGroup
          type="password"
          label="Password"
          name="password"
          value={this.state.password.value}
          validates={this.state.password.validates}
          updateInput={(e, k) => this.updateInput(e, k)}
          errorText="Your password must be at least 8 characters."
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
