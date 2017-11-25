import React from 'react';
import Template from '../../Components/Template';
import ContentRow from '../../Components/ContentRow';
import Heading from '../../Components/Heading';
import RegisterForm from '../../Components/RegisterForm';

function Register() {
  return (
    <Template>
      <ContentRow>
        <Heading>Register</Heading>
      </ContentRow>
      <ContentRow>
        <RegisterForm />
      </ContentRow>
    </Template>
  );
}

export default Register;
