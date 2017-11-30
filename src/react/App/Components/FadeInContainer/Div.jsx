/* eslint no-confusing-arrow: off */
import styled from 'styled-components';
import { transition } from '../../utilities/transitions';

export default styled.div`
  ${transition(`${props => props.duration || '.2s'}`)}
  opacity: ${props => props.opacity}
`;
