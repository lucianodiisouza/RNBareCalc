import { Pressable, Text, StyleSheet, PressableProps } from 'react-native';
import { BUTTON_HEIGHT, BUTTON_WIDTH } from '../utils/dimensions';

interface ButtonProps extends PressableProps {
  value: string | number;
}

export const Button: React.FC<ButtonProps> = ({ value, ...props }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        { backgroundColor: pressed ? 'rgba(25,25,25,1)' : 'rgba(20,20,20,1)' },
      ]}
      {...props}
    >
      <Text style={styles.value}>{value}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: BUTTON_WIDTH,
    height: BUTTON_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: 'rgba(0,0,0,0.2)',
  },
  value: {
    color: 'rgba(255,255,255,1)',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
