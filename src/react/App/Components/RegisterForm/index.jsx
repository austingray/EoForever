import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import validator from 'validator';
import InputTextGroup from '../InputTextGroup';
import Form from '../Form';
import Button from '../Button';

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      email: {
        value: '',
        validates: true,
      },
      password: {
        value: '',
        validates: true,
      },
      'confirm-password': {
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

    // password verification
    const passwordValidates = {
      validates: true,
    };
    if (this.state['confirm-password'].value !== this.state.password.value) {
      passwordValidates.validates = false;
      validates = false;
    }

    // update state
    this.setState({
      email: Object.assign({}, this.state.email, email),
      password: Object.assign({}, this.state.password, password),
      'confirm-password': Object.assign({}, this.state['confirm-password'], passwordValidates),
    });

    return validates;
  }
  submitForm() {
    if (this.validateForm()) {
      // set global loading
      window.__REAXPRESS_STATE__.update({
        loading: true,
      });

      // ajax submit registration
      $.ajax({
        type: 'POST',
        url: '/users/register',
        data: {
          email: this.state.email.value,
          password: this.state.email.password,
          confirmPassword: this.state.email['confirm-password'],
        },
        success(response) {
          console.log(response);
        },
      });
    }
  }
  render() {
    return (
      <Form
        className={this.props.className}
        id="login-form"
        loading={this.state.loading}
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
          label="Password"
          name="password"
          type="password"
          value={this.state.password.value}
          validates={this.state.password.validates}
          updateInput={(e, k) => this.updateInput(e, k)}
          errorText="Your password must be at least 8 characters."
        />
        <InputTextGroup
          label="Confirm Password"
          name="confirm-password"
          type="password"
          value={this.state['confirm-password'].value}
          validates={this.state['confirm-password'].validates}
          updateInput={(e, k) => this.updateInput(e, k)}
          errorText="Your passwords must match."
        />
        <Button>Submit</Button>
      </Form>
    );
  }
}

RegisterForm.propTypes = {
  className: PropTypes.string.isRequired,
};

export default styled(RegisterForm)`

`;
