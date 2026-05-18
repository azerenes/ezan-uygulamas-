import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { colors } from "../utils/theme";
import {
  prayerTimesData,
  getNextPrayer,
  getCountdown,
} from "../data/prayerTimes";

export default function HomeScreen({ navigation }: { navigation: any }) {
  const [countdown, setCountdown] = useState("--:--:--");
  const [activeIndex, setActiveIndex] = useState(-1);
  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  const { prayers } = prayerTimesData;

  useEffect(() => {
    const next = getNextPrayer(prayers);
    if (next) {
      setActiveIndex(next.index);
    }

    const timer = setInterval(() => {
      const n = getNextPrayer(prayers);
      if (n) {
        setCountdown(getCountdown(n.prayer.time));
        setActiveIndex(n.index);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const nextPrayer = activeIndex >= 0 ? prayers[activeIndex] : null;

  const quickActions = [
    { icon: "📿", label: "Tesbih", value: "33", screen: "Tesbih", bg: "#e6f2ed" },
    { icon: "🧭", label: "Kıble", value: "← 18°", screen: "Kıble", bg: "#f5ede2" },
    { icon: "📖", label: "Ayet", value: "Günlük", screen: "Ayet", bg: "#e6ede6" },
    { icon: "🕋", label: "Dua", value: "5", screen: "Dualar", bg: "#f5e6e6" },
  ];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Text style={styles.logo}>
          Ṣalāh<Text style={styles.logoAccent}>.</Text>
        </Text>
        <TouchableOpacity
          style={styles.settingsBtn}
          onPress={() => navigation.navigate("Ayarlar")}
        >
          <Text style={styles.settingsIcon}>⚙</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.nextPrayerCard}>
        <Text style={styles.nextLabel}>BİR SONRAKİ VAKİT</Text>
        <Text style={styles.nextName}>{nextPrayer?.name || "---"}</Text>
        <Text style={styles.nextArabic}>{nextPrayer?.arabic || ""}</Text>
        <Text style={styles.nextCountdown}>
          {countdown} <Text style={styles.nextCountdownUnit}>kaldı</Text>
        </Text>
        <View style={styles.nextLocation}>
          <Text style={styles.locationText}>
            📍 {prayerTimesData.location}
          </Text>
        </View>
      </View>

      <View style={styles.dateRow}>
        <View>
          <Text style={styles.gregorianDate}>
            {prayerTimesData.gregorian}
          </Text>
          <Text style={styles.hijriDate}>{prayerTimesData.hijri}</Text>
        </View>
        <Text style={styles.moonIcon}>🌙</Text>
      </View>

      <View style={styles.prayerTimeline}>
        {prayers.map((p, i) => {
          const [h, m] = p.time.split(":").map(Number);
          const prayerMinutes = h * 60 + m;
          const isCompleted = prayerMinutes < currentMinutes;
          const isActive = i === activeIndex;

          return (
            <View
              key={i}
              style={[
                styles.prayerRow,
                isActive && styles.prayerRowActive,
                isCompleted && !isActive && styles.prayerRowCompleted,
              ]}
            >
              <View
                style={[
                  styles.prayerIcon,
                  isActive && styles.prayerIconActive,
                ]}
              >
                <Text>{p.icon}</Text>
              </View>
              <Text
                style={[
                  styles.prayerName,
                  isActive && styles.prayerNameActive,
                ]}
              >
                {p.name}
              </Text>
              <Text
                style={[
                  styles.prayerTime,
                  isActive && styles.prayerTimeActive,
                ]}
              >
                {p.time}
              </Text>
            </View>
          );
        })}
      </View>

      <View style={styles.quickActions}>
        <TouchableOpacity
          style={styles.qaCard}
          onPress={() => navigation.navigate("Tesbih")}
        >
          <View style={[styles.qaIcon, { backgroundColor: "#e6f2ed" }]}>
            <Text style={styles.qaIconText}>📿</Text>
          </View>
          <Text style={styles.qaLabel}>Tesbih</Text>
          <Text style={styles.qaValue}>33</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.qaCard}
          onPress={() => navigation.navigate("Kıble")}
        >
          <View style={[styles.qaIcon, { backgroundColor: "#f5ede2" }]}>
            <Text style={styles.qaIconText}>🧭</Text>
          </View>
          <Text style={styles.qaLabel}>Kıble</Text>
          <Text style={styles.qaValue}>← 18°</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.qaCard}
          onPress={() => navigation.navigate("KuranAI")}
        >
          <View style={[styles.qaIcon, { backgroundColor: "#e6ede6" }]}>
            <Text style={styles.qaIconText}>🤖</Text>
          </View>
          <Text style={styles.qaLabel}>Kur'an AI</Text>
          <Text style={styles.qaValue}>Soru Sor</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.qaCard}
          onPress={() => navigation.navigate("Dualar")}
        >
          <View style={[styles.qaIcon, { backgroundColor: "#f5e6e6" }]}>
            <Text style={styles.qaIconText}>🕋</Text>
          </View>
          <Text style={styles.qaLabel}>Dua</Text>
          <Text style={styles.qaValue}>12</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  content: {
    padding: 16,
    paddingBottom: 32,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 4,
    marginBottom: 8,
  },
  logo: {
    fontSize: 22,
    fontWeight: "700",
    color: colors.fg,
  },
  logoAccent: {
    color: colors.accent,
  },
  settingsBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.surface,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: colors.border,
  },
  settingsIcon: {
    fontSize: 18,
  },
  nextPrayerCard: {
    backgroundColor: colors.accent,
    borderRadius: 18,
    padding: 24,
    marginBottom: 16,
    overflow: "hidden",
  },
  nextLabel: {
    fontSize: 13,
    color: "rgba(255,255,255,0.85)",
    letterSpacing: 0.5,
    marginBottom: 4,
  },
  nextName: {
    fontSize: 28,
    fontWeight: "700",
    color: "#fff",
    marginBottom: 2,
  },
  nextArabic: {
    fontSize: 18,
    color: "rgba(255,255,255,0.85)",
    marginBottom: 12,
    textAlign: "left",
  },
  nextCountdown: {
    fontSize: 36,
    fontWeight: "700",
    color: "#fff",
    letterSpacing: -1,
  },
  nextCountdownUnit: {
    fontSize: 16,
    fontWeight: "400",
    opacity: 0.75,
  },
  nextLocation: {
    marginTop: 12,
  },
  locationText: {
    fontSize: 13,
    color: "rgba(255,255,255,0.8)",
  },
  dateRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: colors.surface,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: 16,
  },
  gregorianDate: {
    fontSize: 15,
    color: colors.fg,
  },
  hijriDate: {
    fontSize: 13,
    color: colors.accentGreen,
    fontWeight: "500",
  },
  moonIcon: {
    fontSize: 32,
  },
  prayerTimeline: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    overflow: "hidden",
    marginBottom: 16,
  },
  prayerRow: {
    flexDirection: "row",
    alignItems: "center",
    padding: 14,
    gap: 12,
  },
  prayerRowActive: {
    backgroundColor: "rgba(46, 168, 133, 0.08)",
  },
  prayerRowCompleted: {
    opacity: 0.6,
  },
  prayerIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.bg,
  },
  prayerIconActive: {
    backgroundColor: colors.accent,
  },
  prayerName: {
    flex: 1,
    fontSize: 15,
    fontWeight: "500",
    color: colors.fg,
  },
  prayerNameActive: {
    color: colors.accent,
    fontWeight: "600",
  },
  prayerTime: {
    fontSize: 14,
    color: colors.muted,
    fontWeight: "500",
  },
  prayerTimeActive: {
    color: colors.accent,
  },
  quickActions: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  qaCard: {
    width: "48%",
    alignItems: "center",
    gap: 8,
    padding: 20,
    backgroundColor: colors.surface,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
  },
  qaIcon: {
    width: 52,
    height: 52,
    borderRadius: 26,
    alignItems: "center",
    justifyContent: "center",
  },
  qaIconText: {
    fontSize: 24,
  },
  qaLabel: {
    fontSize: 13,
    fontWeight: "500",
    color: colors.muted,
  },
  qaValue: {
    fontSize: 18,
    fontWeight: "700",
    color: colors.fg,
  },
});
