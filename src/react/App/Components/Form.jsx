import styled from 'styled-components';

export default styled.form`
  width: 100%;
  display: block;
  font-size:123px;
  ${props => (
    (props.loading && '')
    || (!props.loading && '')
  )}
`;
