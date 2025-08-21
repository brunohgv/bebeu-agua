import * as Notifications from 'expo-notifications'

enum Status {
    GRANTED = 'granted'
}

export default class PushNotificationService {
    async removeScheduledNotifications(): Promise<void> {
        Notifications.cancelAllScheduledNotificationsAsync()
    }
    
    async scheduleLocalNotification(milliseconds: number): Promise<void> {
        const { status } = await Notifications.requestPermissionsAsync();
    
        if (status !== Status.GRANTED.toString()) {
            return alert('Permissão não concedida. Não será possível enviar lembretes')
        }

        Notifications.setNotificationHandler({
            handleNotification: async () => ({
                shouldPlaySound: true,
                shouldShowBanner: true,
                shouldSetBadge: false,
                shouldShowList: true
            })
        })
    
        await Notifications.scheduleNotificationAsync({
            content: {
                title: "Hora de beber água!!",
                body: "Você vai desidratar, beba água",
                sound: 'default',
            },
            trigger: {
                type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
                seconds: milliseconds / 1000,
            }
        })
    }
}
