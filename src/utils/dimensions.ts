import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');

const BUTTON_WIDTH = width / 4;
const BUTTON_HEIGHT = height / 8;

export { BUTTON_WIDTH, BUTTON_HEIGHT, height as SCREEN_HEIGHT };
