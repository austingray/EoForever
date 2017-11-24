import styled from 'styled-components';
import { $white, $black, $blue, $darkBlue } from '../utilities/colors';
import { transition } from '../utilities/transitions';
import { $fontUIButton } from '../utilities/fonts';

export default styled.button`
  ${transition()}
  font-family: ${$fontUIButton};
  padding: 12px 36px;
  border: 3px solid ${$darkBlue};
  font-size: 18px;
  background: ${$blue};
  color: ${$white};
  cursor: pointer;
  float: ${props => props.float || 'none'};
  text-shadow: 1px 1px 3px ${$black};
  &:hover {
    background: ${$darkBlue};
  }
`;
