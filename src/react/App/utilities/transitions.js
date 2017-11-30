import { keyframes } from 'styled-components';

const transition = duration => `
  transition: all ${duration ? duration : '.2s'};
`;

const keyframeRotate = degrees => keyframes`
  0% {
    transform: scale(1.5);
  }
  50% {
    transform: scale(2);
  }
  100% {
    transform: scale(1.5);
  }
`;

const duration = '.8s';

module.exports = {
  transition,
  keyframeRotate,
  duration,
};
