import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useTheme } from "../context/ThemeContext";
import { useLocation } from "../context/LocationContext";
import {
  getPrayerTimes,
  getNextPrayerIndex,
  getCountdownTo,
  type PrayerTime,
} from "../data/prayerTimes";

export default function HomeScreen({ navigation }: { navigation: any }) {
  const { colors, isDark } = useTheme();
  const { location } = useLocation();
  const data = getPrayerTimes(location.lat, location.lon);
  const { prayers } = data;
  const [countdown, setCountdown] = useState("00:00:00");
  const [nextIdx, setNextIdx] = useState(0);
  const now = new Date();
  const currentMins = now.getHours() * 60 + now.getMinutes();

  const update = useCallback(() => {
    const idx = getNextPrayerIndex(prayers);
    setNextIdx(idx);
    setCountdown(getCountdownTo(prayers[idx].time));
  }, [prayers]);

  useEffect(() => {
    update();
    const t = setInterval(update, 1000);
    return () => clearInterval(t);
  }, [update]);

  const nextPrayer = prayers[nextIdx];

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.bg }]}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={[styles.logo, { color: colors.fg }]}>
            Ṣalāh<Text style={{ color: colors.accent }}>.</Text>
          </Text>
          <TouchableOpacity
            style={[styles.settingsBtn, { backgroundColor: colors.surface, borderColor: colors.border }]}
            onPress={() => navigation.navigate("Ayarlar")}
          >
            <Text style={styles.settingsIcon}>⚙</Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.nextPrayerCard, { backgroundColor: colors.accent }]}>
          <Text style={styles.nextLabel}>BİR SONRAKİ VAKİT</Text>
          <Text style={styles.nextName}>{nextPrayer.name}</Text>
          <Text style={styles.nextArabic}>{nextPrayer.arabic}</Text>
          <Text style={styles.nextCountdown}>
            {countdown} <Text style={styles.nextCountdownUnit}>kaldı</Text>
          </Text>
          <View style={styles.nextLocation}>
            <Text style={styles.locationText}>
              📍 {location.city}, {location.district}
            </Text>
          </View>
        </View>

        <View style={[styles.dateRow, { backgroundColor: colors.surface, borderColor: colors.border }]}>
          <View>
            <Text style={[styles.gregorianDate, { color: colors.fg }]}>{data.gregorian}</Text>
            <Text style={[styles.hijriDate, { color: colors.accentGreen }]}>{data.hijri}</Text>
          </View>
          <Text style={styles.moonIcon}>🌙</Text>
        </View>

        <View style={[styles.prayerTimeline, { backgroundColor: colors.surface, borderColor: colors.border }]}>
          {prayers.map((p, i) => {
            const [h, m] = p.time.split(":").map(Number);
            const pm = h * 60 + m;
            const isCompleted = pm < currentMins;
            const isActive = i === nextIdx;

            return (
              <View
                key={i}
                style={[
                  styles.prayerRow,
                  isActive && { backgroundColor: isDark ? "rgba(59, 201, 159, 0.12)" : "rgba(46, 168, 133, 0.08)" },
                  isCompleted && !isActive && { opacity: 0.5 },
                ]}
              >
                <View style={[styles.prayerIcon, { backgroundColor: isActive ? colors.accent : colors.bg }]}>
                  <Text>{p.icon}</Text>
                </View>
                <Text style={[styles.prayerName, { color: isActive ? colors.accent : colors.fg }, isActive && { fontWeight: "600" }]}>
                  {p.name}
                </Text>
                <Text style={[styles.prayerTime, { color: isActive ? colors.accent : colors.muted }]}>
                  {p.time}
                </Text>
              </View>
            );
          })}
        </View>

        <View style={styles.quickActions}>
          <TouchableOpacity style={[styles.qaCard, { backgroundColor: colors.surface, borderColor: colors.border }]} onPress={() => navigation.navigate("Tesbih")}>
            <View style={[styles.qaIcon, { backgroundColor: "#e6f2ed" }]}>
              <Text style={styles.qaIconText}>📿</Text>
            </View>
            <Text style={[styles.qaLabel, { color: colors.muted }]}>Tesbih</Text>
            <Text style={[styles.qaValue, { color: colors.fg }]}>33</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.qaCard, { backgroundColor: colors.surface, borderColor: colors.border }]} onPress={() => navigation.navigate("Kıble")}>
            <View style={[styles.qaIcon, { backgroundColor: "#f5ede2" }]}>
              <Text style={styles.qaIconText}>🧭</Text>
            </View>
            <Text style={[styles.qaLabel, { color: colors.muted }]}>Kıble</Text>
            <Text style={[styles.qaValue, { color: colors.fg }]}>147°</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.qaCard, { backgroundColor: colors.surface, borderColor: colors.border }]} onPress={() => navigation.navigate("KuranAI")}>
            <View style={[styles.qaIcon, { backgroundColor: "#e6ede6" }]}>
              <Text style={styles.qaIconText}>🤖</Text>
            </View>
            <Text style={[styles.qaLabel, { color: colors.muted }]}>Kur'an AI</Text>
            <Text style={[styles.qaValue, { color: colors.fg }]}>Soru Sor</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.qaCard, { backgroundColor: colors.surface, borderColor: colors.border }]} onPress={() => navigation.navigate("Dualar")}>
            <View style={[styles.qaIcon, { backgroundColor: "#f5e6e6" }]}>
              <Text style={styles.qaIconText}>🕋</Text>
            </View>
            <Text style={[styles.qaLabel, { color: colors.muted }]}>Dua</Text>
            <Text style={[styles.qaValue, { color: colors.fg }]}>12</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { padding: 16, paddingBottom: 32 },
  header: {
    flexDirection: "row", alignItems: "center", justifyContent: "space-between",
    paddingVertical: 4, marginBottom: 8,
  },
  logo: { fontSize: 22, fontWeight: "700" },
  settingsBtn: { width: 40, height: 40, borderRadius: 20, alignItems: "center", justifyContent: "center", borderWidth: 1 },
  settingsIcon: { fontSize: 18 },
  nextPrayerCard: { borderRadius: 18, padding: 24, marginBottom: 16 },
  nextLabel: { fontSize: 13, color: "rgba(255,255,255,0.85)", letterSpacing: 0.5, marginBottom: 4 },
  nextName: { fontSize: 28, fontWeight: "700", color: "#fff", marginBottom: 2 },
  nextArabic: { fontSize: 18, color: "rgba(255,255,255,0.85)", marginBottom: 12 },
  nextCountdown: { fontSize: 36, fontWeight: "700", color: "#fff", letterSpacing: -1 },
  nextCountdownUnit: { fontSize: 16, fontWeight: "400", opacity: 0.75 },
  nextLocation: { marginTop: 12 },
  locationText: { fontSize: 13, color: "rgba(255,255,255,0.8)" },
  dateRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 16, borderRadius: 12, borderWidth: 1, marginBottom: 16 },
  gregorianDate: { fontSize: 15 },
  hijriDate: { fontSize: 13, fontWeight: "500" },
  moonIcon: { fontSize: 32 },
  prayerTimeline: { borderRadius: 12, borderWidth: 1, overflow: "hidden", marginBottom: 16 },
  prayerRow: { flexDirection: "row", alignItems: "center", padding: 14, gap: 12 },
  prayerIcon: { width: 32, height: 32, borderRadius: 16, alignItems: "center", justifyContent: "center" },
  prayerName: { flex: 1, fontSize: 15, fontWeight: "500" },
  prayerTime: { fontSize: 14, fontWeight: "500" },
  quickActions: { flexDirection: "row", flexWrap: "wrap", gap: 10 },
  qaCard: { width: "48%", alignItems: "center", gap: 8, padding: 20, borderRadius: 12, borderWidth: 1 },
  qaIcon: { width: 52, height: 52, borderRadius: 26, alignItems: "center", justifyContent: "center" },
  qaIconText: { fontSize: 24 },
  qaLabel: { fontSize: 13, fontWeight: "500" },
  qaValue: { fontSize: 18, fontWeight: "700" },
});
