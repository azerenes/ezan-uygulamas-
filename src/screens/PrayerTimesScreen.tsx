import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { colors } from "../utils/theme";
import { prayerTimesData } from "../data/prayerTimes";

export default function PrayerTimesScreen() {
  const { prayers } = prayerTimesData;
  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Vakitler</Text>
      </View>

      <View style={styles.locationBar}>
        <Text style={styles.locationText}>
          📍 <Text style={styles.locationStrong}>{prayerTimesData.location}</Text> · {prayerTimesData.method}
        </Text>
      </View>

      <View style={styles.monthNav}>
        <TouchableOpacity style={styles.monthNavBtn}>
          <Text style={styles.monthNavBtnText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.monthName}>Mayıs 2026</Text>
        <TouchableOpacity style={styles.monthNavBtn}>
          <Text style={styles.monthNavBtnText}>→</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.prayerTable}>
        <View style={styles.prayerTableHeader}>
          <Text style={styles.pthText}>Vakit</Text>
          <Text style={styles.pthText}>Vakit</Text>
          <Text style={styles.pthText}>Güneş</Text>
          <Text style={[styles.pthText, { textAlign: "right" }]}>Kalan</Text>
        </View>
        {prayers.map((p, i) => {
          const [h, m] = p.time.split(":").map(Number);
          const prayerMinutes = h * 60 + m;
          const isCompleted = prayerMinutes < currentMinutes;
          const isActive = prayerMinutes >= currentMinutes && (i === 0 || prayers[i - 1] ? (prayers[i - 1] ? currentMinutes >= (() => { const [ph, pm] = prayers[i - 1].time.split(":").map(Number); return ph * 60 + pm; })() : false) : true);
          const activeIndex = prayers.findIndex((_, idx) => {
            const [ph, pm] = prayers[idx].time.split(":").map(Number);
            return ph * 60 + pm > currentMinutes;
          });
          const isRowActive = activeIndex >= 0 && i === activeIndex;

          return (
            <View
              key={i}
              style={[
                styles.prayerRow,
                isRowActive && styles.prayerRowActive,
              ]}
            >
              <View style={styles.pNameRow}>
                <Text style={styles.pName}>{p.name}</Text>
                <Text style={styles.pArabic}>{p.arabic}</Text>
              </View>
              <Text style={[styles.pTime, isRowActive && styles.pTimeActive]}>
                {p.time}
              </Text>
              <Text style={styles.pSunrise}>—</Text>
              <Text
                style={[
                  styles.pDiff,
                  isRowActive && { color: colors.accent, fontWeight: "600" },
                ]}
              >
                {isRowActive ? "02:34" : "--"}
              </Text>
            </View>
          );
        })}
      </View>

      <View style={styles.calcMethod}>
        <Text style={{ fontSize: 12, color: colors.muted }}>
          Hesaplama Yöntemi
        </Text>
        <Text style={{ fontSize: 12, fontWeight: "600", color: colors.fg }}>
          {prayerTimesData.method}
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.bg },
  content: { padding: 16, paddingBottom: 32 },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingVertical: 4,
    marginBottom: 8,
  },
  headerTitle: { fontSize: 20, fontWeight: "700", color: colors.fg },
  locationBar: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    backgroundColor: colors.surfaceAlt,
    borderRadius: 12,
    marginBottom: 12,
  },
  locationText: { fontSize: 13, color: colors.muted, flex: 1 },
  locationStrong: { color: colors.fg, fontWeight: "600" },
  monthNav: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 12,
    backgroundColor: colors.surface,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: 12,
  },
  monthNavBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.bg,
    alignItems: "center",
    justifyContent: "center",
  },
  monthNavBtnText: { fontSize: 16, color: colors.muted },
  monthName: { fontSize: 16, fontWeight: "600", color: colors.fg },
  prayerTable: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    overflow: "hidden",
    marginBottom: 12,
  },
  prayerTableHeader: {
    flexDirection: "row",
    padding: 12,
    backgroundColor: "#eef5f2",
    gap: 8,
  },
  pthText: {
    flex: 1,
    fontSize: 11,
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: 0.5,
    color: colors.muted,
  },
  prayerRow: {
    flexDirection: "row",
    padding: 14,
    gap: 8,
    alignItems: "center",
  },
  prayerRowActive: {
    backgroundColor: "rgba(46, 168, 133, 0.08)",
  },
  pNameRow: { flex: 1 },
  pName: { fontSize: 14, fontWeight: "500", color: colors.fg },
  pArabic: { fontSize: 12, color: colors.muted },
  pTime: { width: 70, fontSize: 14, fontWeight: "600", color: colors.muted },
  pTimeActive: { color: colors.accent },
  pSunrise: { width: 70, fontSize: 13, color: colors.muted },
  pDiff: { width: 70, fontSize: 11, color: colors.muted, textAlign: "right" },
  calcMethod: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: colors.surface,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
  },
});
