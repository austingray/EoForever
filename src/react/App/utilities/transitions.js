/* eslint no-unneeded-ternary: off */
const transition = duration => `
  transition: all ${duration ? duration : '.2s'};
`;

module.exports = {
  transition,
};
