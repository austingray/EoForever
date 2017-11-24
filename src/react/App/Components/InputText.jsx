import styled from 'styled-components';
import { $fontUIInput } from '../utilities/fonts';

export default styled.input.attrs({
  type: props => props.type || 'text',
})`
  font-family: ${$fontUIInput};
  display: block;
  font-size: 24px;
  width: 100%;
  padding: 7px;
`;
