const hexRgb = require('hex-rgb');

const $white = '#FFFFFF';
const $black = '#000000';
const $darkGray = '#4a4b47';
const $blue = '#2196f3';
const $darkBlue = '#085795';
const $red = '#ce0407';

const calcOpacity = (opacity, hex) => {
  const rgb = hexRgb(hex);
  const values = rgb.join(', ');
  const returnString = `rgba(${values}, ${opacity})`;
  return returnString;
};

module.exports = {
  $white,
  $black,
  $darkGray,
  $blue,
  $darkBlue,
  $red,
  calcOpacity,
};
