import { DefaultTheme } from 'react-native-paper';
import Colors from './Colors';

const Theme = {
  ...DefaultTheme,
  mode: 'exact',
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.primaryRed,
    secondary: '#414757',
    error: '#f13a59',
    text: Colors.black,
  },
  padding: {
    tiny: 5,
    small: 10,
    medium: 20,
  },
  margin: {
    tiny: 5,
    small: 10,
    medium: 20,
  },
};

export default Theme;
