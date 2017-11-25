import React from 'react';
import Template from '../../Components/Template';
import ContentRow from '../../Components/ContentRow';
import Heading from '../../Components/Heading';
import PasswordResetForm from '../../Components/PasswordResetForm';

function PasswordReset() {
  return (
    <Template>
      <ContentRow>
        <Heading>Reset Your Password</Heading>
      </ContentRow>
      <ContentRow>
        <PasswordResetForm />
      </ContentRow>
    </Template>
  );
}

export default PasswordReset;
