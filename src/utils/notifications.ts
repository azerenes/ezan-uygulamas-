import * as Notifications from "expo-notifications";
import { getRandomAyah } from "../data/ayahs";

export async function requestNotificationPermission(): Promise<boolean> {
  const { status: existingStatus } = await Notifications.getPermissionsAsync();
  let finalStatus = existingStatus;

  if (existingStatus !== "granted") {
    const { status } = await Notifications.requestPermissionsAsync();
    finalStatus = status;
  }

  if (finalStatus !== "granted") {
    return false;
  }

  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: false,
      shouldShowBanner: true,
      shouldShowList: true,
    }),
  });

  return true;
}

function dailyTrigger(hour: number, minute: number) {
  return {
    type: Notifications.SchedulableTriggerInputTypes.DAILY,
    hour,
    minute,
  } as Notifications.DailyTriggerInput;
}

export async function sendDailyAyahNotification(): Promise<void> {
  const ayah = getRandomAyah();
  await Notifications.scheduleNotificationAsync({
    content: {
      title: `${ayah.surah} ${ayah.ayah}`,
      body: ayah.translation,
      data: { type: "daily-ayah", ayahId: ayah.id },
    },
    trigger: dailyTrigger(9, 0),
  });

  const ayah2 = getRandomAyah();
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Günün Ayeti",
      body: ayah2.translation,
      data: { type: "daily-ayah", ayahId: ayah2.id },
    },
    trigger: dailyTrigger(21, 0),
  });
}

export function schedulePrayerNotifications(): void {
  const prayerTimes = [
    { name: "İmsak / Sabah", time: "04:12" },
    { name: "Öğle", time: "12:58" },
    { name: "İkindi", time: "16:40" },
    { name: "Akşam", time: "20:06" },
    { name: "Yatsı", time: "21:35" },
  ];

  prayerTimes.forEach((prayer) => {
    const [h, m] = prayer.time.split(":").map(Number);

    Notifications.scheduleNotificationAsync({
      content: {
        title: "Namaz Vakti!",
        body: `${prayer.name} vakti girdi.`,
        data: { type: "prayer-time", prayer: prayer.name },
      },
      trigger: dailyTrigger(h, m),
    });

    const reminderH = h - 1 > 0 ? h - 1 : h;
    Notifications.scheduleNotificationAsync({
      content: {
        title: "Hatırlatıcı",
        body: `${prayer.name} vaktine yaklaşıyor. Hazırlanın!`,
        data: { type: "prayer-reminder", prayer: prayer.name },
      },
      trigger: dailyTrigger(reminderH, m),
    });
  });
}
