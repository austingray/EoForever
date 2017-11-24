import React from 'react';
import Template from '../../Components/Template';
import ContentRow from '../../Components/ContentRow';
import Heading from '../../Components/Heading';
import LoginForm from '../../Components/LoginForm';

function Login() {
  return (
    <Template>
      <ContentRow>
        <Heading>Login</Heading>
      </ContentRow>
      <ContentRow>
        <LoginForm />
      </ContentRow>
    </Template>
  );
}

export default Login;
