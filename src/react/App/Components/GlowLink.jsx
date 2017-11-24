/* eslint no-confusing-arrow: off */
import styled from 'styled-components';
import { $fontUIPrimary } from '../utilities/fonts';
import { $white, $blue } from '../utilities/colors';
import { transition } from '../utilities/transitions';

export default styled.a`
  font-family: ${$fontUIPrimary};
  ${transition()}
  color: ${props => props.color ? props.color : $white};
  text-decoration: none;
  opacity: .8;
  margin: ${props => props.margin || 'unset'};
  &:hover {
    text-shadow: 2px 2px 8px ${$blue};
    opacity: 1;
  }
`;
