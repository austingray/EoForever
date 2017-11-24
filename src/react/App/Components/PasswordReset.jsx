import styled from 'styled-components';
import { $white } from '../utilities/colors';
import { transition } from '../utilities/transitions';
import { $fontUILink } from '../utilities/fonts';

export default styled.a`
  ${transition()}
  font-family: ${$fontUILink};
  color: ${$white};
  margin-left: 24px;
  text-decoration: none;
  opacity: .8;
  &:hover {
    opacity: 1;
  }
`;
