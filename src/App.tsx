import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import waterGlass from '@/assets/water-glass.png'
import Countdown from 'react-countdown';
import CountdownRenderer from './components/CountdownRenderer';

export default function App() {
  const now = Date.now()
  const expirationDate = now + (10 * 1000)

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24 }}>Bebeu Água?</Text>
      <Image source={waterGlass} />
      <Countdown date={expirationDate} renderer={CountdownRenderer} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
