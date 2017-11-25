import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import validator from 'validator';
import InputTextGroup from '../InputTextGroup';
import Button from '../Button';
import GlowLink from '../GlowLink';

class PasswordResetForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: {
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

    this.setState({
      email: Object.assign({}, this.state.email, email),
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
        <Button>Submit</Button>
      </form>
    );
  }
}

PasswordResetForm.propTypes = {
  className: PropTypes.string.isRequired,
};

export default styled(PasswordResetForm)`
  width: 100%;
  display: block;
`;
