import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { colors } from "../utils/theme";
import { calculateQibla, getQiblaDirection, calculateDistance } from "../utils/qibla";

const SIZE = Math.min(Dimensions.get("window").width - 64, 260);

export default function QiblaScreen() {
  const [angle, setAngle] = useState(147);
  const [direction, setDirection] = useState("Güneydoğu");
  const [distance, setDistance] = useState(12243);

  useEffect(() => {
    const qibla = calculateQibla(41.01, 28.95);
    setAngle(Math.round(qibla));
    setDirection(getQiblaDirection(qibla));
    setDistance(calculateDistance(41.01, 28.95));
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Kıble Pusulası</Text>
      </View>

      <View style={styles.compassCard}>
        <View style={styles.compassRing}>
          <Text style={[styles.dirLabel, { top: 10, alignSelf: "center" }]}>
            K (N)
          </Text>
          <Text style={[styles.dirLabel, { bottom: 10, alignSelf: "center" }]}>
            G (S)
          </Text>
          <Text style={[styles.dirLabel, { right: 10 }]}>D (E)</Text>
          <Text style={[styles.dirLabel, { left: 10 }]}>B (W)</Text>

          <View
            style={[
              styles.needleContainer,
              { transform: [{ rotate: `${angle}deg` }] },
            ]}
          >
            <View style={styles.needle} />
          </View>
          <View style={styles.centerDot} />
        </View>

        <View style={styles.qiblaInfo}>
          <Text style={styles.qiblaDirection}>⬇ {direction}</Text>
          <Text style={styles.qiblaDegrees}>
            Kıble açısı {angle}° · İstanbul
          </Text>
        </View>

        <View style={styles.qiblaLabel}>
          <Text style={{ fontSize: 12, color: colors.muted }}>
            📱 Pusulayı kullanmak için cihazınızı düz bir zemine koyun
          </Text>
        </View>
      </View>

      <View style={styles.infoCards}>
        <View style={styles.infoCard}>
          <Text style={styles.infoValue}>
            {distance.toLocaleString("tr-TR")} km
          </Text>
          <Text style={styles.infoLabel}>Mekke'ye Uzaklık</Text>
        </View>
        <View style={styles.infoCard}>
          <Text style={styles.infoValue}>{angle}°</Text>
          <Text style={styles.infoLabel}>Kıble Açısı</Text>
        </View>
        <View style={styles.infoCard}>
          <Text style={styles.infoValue}>القبلة</Text>
          <Text style={styles.infoLabel}>Arapça Yazılışı</Text>
        </View>
        <View style={styles.infoCard}>
          <Text style={styles.infoValue}>Otomatik</Text>
          <Text style={styles.infoLabel}>Sensör Durumu</Text>
        </View>
      </View>

      <View style={styles.locationFooter}>
        <Text style={{ fontSize: 13, color: colors.muted }}>
          📍 İstanbul, Fatih · 41.01°K, 28.95°D
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.bg, padding: 16 },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingVertical: 4,
    marginBottom: 8,
  },
  headerTitle: { fontSize: 20, fontWeight: "700", color: colors.fg, flex: 1 },
  compassCard: {
    backgroundColor: colors.surface,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 24,
    alignItems: "center",
    marginBottom: 16,
  },
  compassRing: {
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
    backgroundColor: "#fcfcfd",
    borderWidth: 2,
    borderColor: colors.border,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  dirLabel: {
    position: "absolute",
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 1,
    color: colors.muted,
  },
  needleContainer: {
    width: 180,
    height: 180,
    alignItems: "center",
    justifyContent: "center",
  },
  needle: {
    width: 4,
    height: 170,
    backgroundColor: colors.accent,
    borderRadius: 2,
    position: "absolute",
    top: 5,
  },
  centerDot: {
    position: "absolute",
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: colors.accentWarm,
  },
  qiblaInfo: { alignItems: "center", marginTop: 16 },
  qiblaDirection: {
    fontSize: 28,
    fontWeight: "700",
    color: colors.accent,
  },
  qiblaDegrees: { fontSize: 14, color: colors.muted, marginTop: 4 },
  qiblaLabel: {
    marginTop: 16,
    padding: 8,
    backgroundColor: colors.bg,
    borderRadius: 12,
  },
  infoCards: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginBottom: 16,
  },
  infoCard: {
    width: "48%",
    padding: 16,
    backgroundColor: colors.surface,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: "center",
  },
  infoValue: {
    fontSize: 20,
    fontWeight: "700",
    color: colors.fg,
  },
  infoLabel: {
    fontSize: 11,
    color: colors.muted,
    marginTop: 4,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  locationFooter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    backgroundColor: colors.surface,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
  },
});
