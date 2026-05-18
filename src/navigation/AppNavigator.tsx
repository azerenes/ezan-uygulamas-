import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, View } from "react-native";
import { colors } from "../utils/theme";

import HomeScreen from "../screens/HomeScreen";
import PrayerTimesScreen from "../screens/PrayerTimesScreen";
import DhikrScreen from "../screens/DhikrScreen";
import QiblaScreen from "../screens/QiblaScreen";
import DuaScreen from "../screens/DuaScreen";
import SettingsScreen from "../screens/SettingsScreen";
import QuranScreen from "../screens/QuranScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TabIcon({ label, focused }: { label: string; focused: boolean }) {
  const icons: Record<string, string> = {
    "Ana Sayfa": "🏠",
    Vakitler: "📅",
    Tesbih: "📿",
    Dualar: "🕋",
    Ayarlar: "⚙",
  };
  return (
    <View style={{ alignItems: "center", justifyContent: "center", gap: 2 }}>
      <Text style={{ fontSize: 22, opacity: focused ? 1 : 0.5 }}>
        {icons[label] || "•"}
      </Text>
    </View>
  );
}

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <TabIcon label={route.name} focused={focused} />
        ),
        tabBarActiveTintColor: colors.accent,
        tabBarInactiveTintColor: colors.muted,
        tabBarStyle: {
          backgroundColor: colors.surface,
          borderTopColor: colors.border,
          height: 64,
          paddingBottom: 8,
          paddingTop: 4,
        },
        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: "500",
        },
      })}
    >
      <Tab.Screen name="Ana Sayfa" component={HomeScreen} />
      <Tab.Screen name="Vakitler" component={PrayerTimesScreen} />
      <Tab.Screen name="Tesbih" component={DhikrScreen} />
      <Tab.Screen name="Dualar" component={DuaScreen} />
      <Tab.Screen name="Ayarlar" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeTabs} />
        <Stack.Screen name="Kıble" component={QiblaScreen} />
        <Stack.Screen name="KuranAI" component={QuranScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
