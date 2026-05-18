import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "./src/context/ThemeContext";
import { LocationProvider } from "./src/context/LocationContext";
import AppNavigator from "./src/navigation/AppNavigator";
import {
  requestNotificationPermission,
  schedulePrayerNotifications,
  sendDailyAyahNotification,
} from "./src/utils/notifications";

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
    <ThemeProvider>
      <LocationProvider>
        <StatusBar style="auto" />
        <AppNavigator />
      </LocationProvider>
    </ThemeProvider>
  );
}
