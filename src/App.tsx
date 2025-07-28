import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { Button } from './components/Button';
import { Container } from './components/Container';
import { useState } from 'react';
import { BUTTON_HEIGHT, SCREEN_HEIGHT } from './utils/dimensions';
import { BUTTON_VALUES } from './utils/values';

function App() {
  const [displayValue, setDisplayValue] = useState('0');

  const handlePress = (value: string | number) => {
    if (typeof value === 'number') {
      setDisplayValue(prev => `${prev}${value}`);
    }

    if (typeof value === 'string') {
      switch (value) {
        case '+':
          console.warn('soma');
          break;
        case '-':
          console.warn('subtrai');
          break;
        case 'X':
          console.warn('multiplica');
          break;
        case '/':
          console.warn('divide');
          break;
        case '=':
          console.warn('resultado');
          break;

        case 'C':
          setDisplayValue('0');
          break;

        default:
          break;
      }
    }
    return false;
  };

  return (
    <SafeAreaView style={styles.safe}>
      <Container>
        <View style={styles.display}>
          <Text style={styles.displayText}>{displayValue}</Text>
        </View>
        <View style={styles.buttonContainer}>
          {BUTTON_VALUES.map((row, key) => (
            <View style={styles.buttonRow} key={key}>
              {row.map(rowValue => (
                <Button
                  value={rowValue}
                  key={rowValue}
                  onPress={() => handlePress(rowValue)}
                />
              ))}
            </View>
          ))}
        </View>
      </Container>
      <StatusBar barStyle={'light-content'} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: 'rgba(20,20,20,1)',
  },
  display: {
    flex: 1,
    backgroundColor: 'rgba(50,50,50,1)',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    padding: 16,
  },
  displayText: {
    fontSize: 48,
    color: 'rgba(255,255,255,1)',
  },
  buttonContainer: {
    height: SCREEN_HEIGHT / 2,
    justifyContent: 'flex-end',
  },
  buttonRow: {
    width: '100%',
    height: BUTTON_HEIGHT,
    flexDirection: 'row',
  },
});

export default App;
