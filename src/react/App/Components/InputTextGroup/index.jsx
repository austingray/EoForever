/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Label from '../Label';
import InputText from '../InputText';
import ErrorText from '../ErrorText';

function InputGroup({
  className,
  label,
  name,
  value,
  validates,
  updateInput,
  type,
  errorText,
}) {
  return (
    <div className={`${className} ${validates ? '' : 'invalid'}`}>
      <Label htmlFor={name}>{label}</Label>
      <InputText
        type={type}
        id={name}
        value={value}
        name={name}
        onChange={e => updateInput(e, name)}
      />
      {
        !validates && (
          <ErrorText>{errorText}</ErrorText>
        )
      }
    </div>
  );
}

InputGroup.defaultProps = {
  type: 'text',
  errorText: 'Please provide a correct value.',
};

InputGroup.propTypes = {
  className: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  validates: PropTypes.bool.isRequired,
  updateInput: PropTypes.func.isRequired,
  type: PropTypes.string,
  errorText: PropTypes.string,
};

export default styled(InputGroup)`
  margin-bottom: 24px;
`;
