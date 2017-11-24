/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Label from '../Label';
import InputText from '../InputText';

function InputGroup({
  className,
  label,
  name,
  value,
  validates,
  updateInput,
  type,
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
    </div>
  );
}

InputGroup.defaultProps = {
  type: 'text',
};

InputGroup.propTypes = {
  className: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  validates: PropTypes.bool.isRequired,
  updateInput: PropTypes.func.isRequired,
  type: PropTypes.string,
};

export default styled(InputGroup)`
  margin-bottom: 24px;
`;
