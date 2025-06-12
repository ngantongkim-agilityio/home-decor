import * as Notifications from 'expo-notifications';

export const requestPermissionsNotifications = async () => {
  await Notifications.requestPermissionsAsync();
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: false,
    }),
  });
};

export const scheduleNotification = async ({
  id = '',
  title = `You've got a new notification! 📬`,
  body = 'Here is the notification message',
  seconds = 5,
}) =>
  await Notifications.scheduleNotificationAsync({
    content: { title, body, data: { url: `/details/${id}` } },
    trigger: {
      seconds,
      repeats: false,
    } as Notifications.TimeIntervalTriggerInput,
  });
