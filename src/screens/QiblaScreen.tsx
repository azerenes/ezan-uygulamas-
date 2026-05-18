import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { useTheme } from "../context/ThemeContext";
import { useLocation } from "../context/LocationContext";
import { calculateQibla, getQiblaDirection, calculateDistance } from "../utils/qibla";

const SIZE = Math.min(Dimensions.get("window").width - 64, 260);

export default function QiblaScreen() {
  const { colors, isDark } = useTheme();
  const { location } = useLocation();
  const [angle, setAngle] = useState(0);
  const [direction, setDirection] = useState("");
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    const qibla = calculateQibla(location.lat, location.lon);
    setAngle(Math.round(qibla));
    setDirection(getQiblaDirection(qibla));
    setDistance(calculateDistance(location.lat, location.lon));
  }, [location]);

  return (
    <View style={[styles.container, { backgroundColor: colors.bg }]}>
      <View style={styles.header}>
        <Text style={[styles.headerTitle, { color: colors.fg }]}>Kıble Pusulası</Text>
      </View>

      <View style={[styles.compassCard, { backgroundColor: colors.surface, borderColor: colors.border }]}>
        <View style={[styles.compassRing, { borderColor: colors.border }]}>
          <Text style={[styles.dirLabel, { color: colors.muted, top: 10, alignSelf: "center" }]}>K (N)</Text>
          <Text style={[styles.dirLabel, { color: colors.muted, bottom: 10, alignSelf: "center" }]}>G (S)</Text>
          <Text style={[styles.dirLabel, { color: colors.muted, right: 10 }]}>D (E)</Text>
          <Text style={[styles.dirLabel, { color: colors.muted, left: 10 }]}>B (W)</Text>

          <View style={[styles.needleContainer, { transform: [{ rotate: `${angle}deg` }] }]}>
            <View style={styles.needleTop} />
            <View style={styles.needleBottom} />
          </View>
          <View style={[styles.centerDot, { backgroundColor: colors.accentWarm }]} />
        </View>

        <View style={styles.qiblaInfo}>
          <Text style={[styles.qiblaDirection, { color: colors.accent }]}>
            ⬇ {direction}
          </Text>
          <Text style={[styles.qiblaDegrees, { color: colors.muted }]}>
            Kıble açısı {angle}° · {location.city}
          </Text>
        </View>

        <View style={[styles.qiblaLabel, { backgroundColor: colors.bg }]}>
          <Text style={{ fontSize: 12, color: colors.muted, textAlign: "center" }}>
            📱 Cihazınızı düz bir zemine koyup kalibre edin
          </Text>
        </View>
      </View>

      <View style={styles.infoCards}>
        <View style={[styles.infoCard, { backgroundColor: colors.surface, borderColor: colors.border }]}>
          <Text style={[styles.infoValue, { color: colors.fg }]}>
            {distance.toLocaleString("tr-TR")} km
          </Text>
          <Text style={[styles.infoLabel, { color: colors.muted }]}>Mekke'ye Uzaklık</Text>
        </View>
        <View style={[styles.infoCard, { backgroundColor: colors.surface, borderColor: colors.border }]}>
          <Text style={[styles.infoValue, { color: colors.fg }]}>{angle}°</Text>
          <Text style={[styles.infoLabel, { color: colors.muted }]}>Kıble Açısı</Text>
        </View>
        <View style={[styles.infoCard, { backgroundColor: colors.surface, borderColor: colors.border }]}>
          <Text style={[styles.infoValue, { color: colors.fg }]}>القبلة</Text>
          <Text style={[styles.infoLabel, { color: colors.muted }]}>Arapça Yazılışı</Text>
        </View>
        <View style={[styles.infoCard, { backgroundColor: colors.surface, borderColor: colors.border }]}>
          <Text style={[styles.infoValue, { color: colors.fg }]}>Otomatik</Text>
          <Text style={[styles.infoLabel, { color: colors.muted }]}>Sensör Durumu</Text>
        </View>
      </View>

      <View style={[styles.locationFooter, { backgroundColor: colors.surface, borderColor: colors.border }]}>
        <Text style={{ fontSize: 13, color: colors.muted }}>
          📍 {location.city}, {location.district} · {location.lat}°K, {location.lon}°D
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  header: { flexDirection: "row", alignItems: "center", gap: 12, paddingVertical: 4, marginBottom: 8 },
  headerTitle: { fontSize: 20, fontWeight: "700", flex: 1 },
  compassCard: { borderRadius: 18, borderWidth: 1, padding: 24, alignItems: "center", marginBottom: 16 },
  compassRing: {
    width: SIZE, height: SIZE, borderRadius: SIZE / 2,
    alignItems: "center", justifyContent: "center", position: "relative", borderWidth: 2,
  },
  dirLabel: { position: "absolute", fontSize: 11, fontWeight: "700", letterSpacing: 1 },
  needleContainer: { width: 180, height: 180, alignItems: "center", justifyContent: "center", position: "relative" },
  needleTop: {
    position: "absolute", top: 5,
    width: 4, height: 85, backgroundColor: "#2ea885", borderRadius: 2,
    borderTopLeftRadius: 4, borderTopRightRadius: 4,
  },
  needleBottom: {
    position: "absolute", bottom: 5,
    width: 4, height: 85, backgroundColor: "#c0393f", borderRadius: 2,
    borderBottomLeftRadius: 4, borderBottomRightRadius: 4,
  },
  centerDot: { position: "absolute", width: 16, height: 16, borderRadius: 8 },
  qiblaInfo: { alignItems: "center", marginTop: 16 },
  qiblaDirection: { fontSize: 28, fontWeight: "700" },
  qiblaDegrees: { fontSize: 14, marginTop: 4 },
  qiblaLabel: { marginTop: 16, padding: 10, borderRadius: 12, width: "100%" },
  infoCards: { flexDirection: "row", flexWrap: "wrap", gap: 10, marginBottom: 16 },
  infoCard: { width: "48%", padding: 16, borderRadius: 12, borderWidth: 1, alignItems: "center" },
  infoValue: { fontSize: 20, fontWeight: "700" },
  infoLabel: { fontSize: 11, marginTop: 4, textTransform: "uppercase", letterSpacing: 0.5 },
  locationFooter: { flexDirection: "row", alignItems: "center", justifyContent: "center", padding: 12, borderRadius: 12, borderWidth: 1 },
});
