import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useTheme } from "../context/ThemeContext";
import { useLocation } from "../context/LocationContext";
import { getPrayerTimes, getNextPrayerIndex } from "../data/prayerTimes";

export default function PrayerTimesScreen() {
  const { colors, isDark } = useTheme();
  const { location } = useLocation();
  const data = getPrayerTimes(location.lat, location.lon);
  const { prayers } = data;
  const now = new Date();
  const currentMins = now.getHours() * 60 + now.getMinutes();
  const activeIdx = getNextPrayerIndex(prayers);

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.bg }]}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={[styles.headerTitle, { color: colors.fg }]}>Vakitler</Text>
        </View>

        <View style={[styles.locationBar, { backgroundColor: colors.surfaceAlt }]}>
          <Text style={{ fontSize: 13, color: colors.muted }}>
            📍 <Text style={{ fontWeight: "600", color: colors.fg }}>{location.city}, {location.district}</Text> · {data.method}
          </Text>
        </View>

        <View style={[styles.monthNav, { backgroundColor: colors.surface, borderColor: colors.border }]}>
          <TouchableOpacity style={[styles.monthNavBtn, { backgroundColor: colors.bg }]}>
            <Text style={{ fontSize: 16, color: colors.muted }}>←</Text>
          </TouchableOpacity>
          <Text style={[styles.monthName, { color: colors.fg }]}>
            {new Date().toLocaleString("tr-TR", { month: "long", year: "numeric" })}
          </Text>
          <TouchableOpacity style={[styles.monthNavBtn, { backgroundColor: colors.bg }]}>
            <Text style={{ fontSize: 16, color: colors.muted }}>→</Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.prayerTable, { backgroundColor: colors.surface, borderColor: colors.border }]}>
          <View style={[styles.prayerTableHeader, { backgroundColor: isDark ? colors.surfaceAlt : "#eef5f2" }]}>
            <Text style={[styles.pthText, { color: colors.muted }]}>Vakit</Text>
            <Text style={[styles.pthText, { color: colors.muted }]}>Vakit</Text>
            <Text style={[styles.pthText, { color: colors.muted }]}>Kalan</Text>
          </View>
          {prayers.map((p, i) => {
            const isActive = i === activeIdx;
            return (
              <View
                key={i}
                style={[
                  styles.prayerRow,
                  isActive && { backgroundColor: isDark ? "rgba(59,201,159,0.1)" : "rgba(46,168,133,0.08)" },
                ]}
              >
                <View style={styles.pNameRow}>
                  <Text style={[styles.pName, { color: isActive ? colors.accent : colors.fg }]}>
                    {p.name}
                  </Text>
                  <Text style={[styles.pArabic, { color: colors.muted }]}>{p.arabic}</Text>
                </View>
                <Text style={[styles.pTime, { color: isActive ? colors.accent : colors.muted }]}>
                  {p.time}
                </Text>
                <Text style={[styles.pDiff, { color: isActive ? colors.accent : colors.muted }, isActive && { fontWeight: "600" }]}>
                  {isActive ? "← Şimdi" : "--"}
                </Text>
              </View>
            );
          })}
        </View>

        <View style={[styles.calcMethod, { backgroundColor: colors.surface, borderColor: colors.border }]}>
          <Text style={{ fontSize: 12, color: colors.muted }}>Hesaplama Yöntemi</Text>
          <Text style={{ fontSize: 12, fontWeight: "600", color: colors.fg }}>{data.method}</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { padding: 16, paddingBottom: 32 },
  header: { flexDirection: "row", alignItems: "center", gap: 12, paddingVertical: 4, marginBottom: 8 },
  headerTitle: { fontSize: 20, fontWeight: "700", flex: 1 },
  locationBar: { padding: 12, borderRadius: 12, marginBottom: 12 },
  monthNav: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: 12, borderRadius: 12, borderWidth: 1, marginBottom: 12 },
  monthNavBtn: { width: 36, height: 36, borderRadius: 18, alignItems: "center", justifyContent: "center" },
  monthName: { fontSize: 16, fontWeight: "600" },
  prayerTable: { borderRadius: 12, borderWidth: 1, overflow: "hidden", marginBottom: 12 },
  prayerTableHeader: { flexDirection: "row", padding: 12, gap: 8 },
  pthText: { flex: 1, fontSize: 11, fontWeight: "600", textTransform: "uppercase", letterSpacing: 0.5 },
  prayerRow: { flexDirection: "row", padding: 14, gap: 8, alignItems: "center" },
  pNameRow: { flex: 1 },
  pName: { fontSize: 14, fontWeight: "500" },
  pArabic: { fontSize: 12 },
  pTime: { width: 70, fontSize: 14, fontWeight: "600" },
  pDiff: { width: 70, fontSize: 12, textAlign: "right" },
  calcMethod: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: 10, borderRadius: 12, borderWidth: 1 },
});
