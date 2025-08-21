import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import waterGlass from '@/assets/water-glass.png'
import Countdown from 'react-countdown';
import CountdownRenderer from './components/CountdownRenderer';
import { useEffect, useState } from 'react';
import PushNotificationService from './services/push-notification-service';

export default function App() {
  const EXPIRATION_TIME = (60 * 60 * 1000)
  const now = Date.now()

  const [showButton, setShowButton] = useState<boolean>(false)
  const [expiration, setExpiration] = useState<number>(now + EXPIRATION_TIME)
  const [countdownKey, setCountdownKey] = useState(false);
  
  const pushNotificationService = new PushNotificationService()

  useEffect(() => {
    scheduleNotification()
  }, [])

  function scheduleNotification() {
    const now = Date.now()
    const expirationDate = now + EXPIRATION_TIME

    pushNotificationService.removeScheduledNotifications()
    pushNotificationService.scheduleLocalNotification(EXPIRATION_TIME)
    setExpiration(expirationDate)
    setShowButton(false)
    setCountdownKey(k => !k)
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24 }}>Bebeu Água?</Text>
      <Image source={waterGlass} />
      <Countdown
        key={countdownKey}
        date={expiration}
        renderer={CountdownRenderer}
        onComplete={() => setShowButton(true)}
        autoStart={true}
      />
      {showButton && <Button title='Reiniciar Contador' onPress={scheduleNotification} />}
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
