import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { AppState } from "react-native";
import AppNavigator from "./src/navigation/AppNavigator";
import {
  requestNotificationPermission,
  schedulePrayerNotifications,
  sendDailyAyahNotification,
} from "./src/utils/notifications";
import { getRandomAyah } from "./src/data/ayahs";

export default function App() {
  useEffect(() => {
    async function setup() {
      const granted = await requestNotificationPermission();
      if (granted) {
        schedulePrayerNotifications();
        await sendDailyAyahNotification();
      }
    }
    setup();
  }, []);

  return (
    <>
      <StatusBar style="dark" />
      <AppNavigator />
    </>
  );
}
