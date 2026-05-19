import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Magnetometer } from "expo-sensors";
import { useTheme } from "../context/ThemeContext";
import { useLocation } from "../context/LocationContext";
import { calculateQibla, getQiblaDirection, calculateDistance } from "../utils/qibla";

const SIZE = Math.min(Dimensions.get("window").width - 64, 280);
const TICK_COUNT = 36;
const DEG_PER_TICK = 10;

function tickMarks() {
  const ticks: React.ReactNode[] = [];
  for (let i = 0; i < TICK_COUNT; i++) {
    const deg = i * DEG_PER_TICK;
    const rad = (deg - 90) * (Math.PI / 180);
    const isMain = deg % 90 === 0;
    const isHalf = deg % 45 === 0;
    const len = isMain ? 16 : isHalf ? 11 : 6;
    const inner = SIZE / 2 - 22;
    const outer = inner + len;
    ticks.push(
      <View
        key={i}
        style={[
          styles.tick,
          {
            left: SIZE / 2 + inner * Math.cos(rad) - 1,
            top: SIZE / 2 + inner * Math.sin(rad) - (isMain ? 6 : 3),
            height: len,
            width: isMain ? 2 : 1,
            backgroundColor: isMain ? "#D4AF37" : "#555",
          },
        ]}
      />
    );
  }
  return ticks;
}

const DIRECTION_LABELS = [
  { label: "K", angle: 0 },
  { label: "KD", angle: 45 },
  { label: "D", angle: 90 },
  { label: "GD", angle: 135 },
  { label: "G", angle: 180 },
  { label: "GB", angle: 225 },
  { label: "B", angle: 270 },
  { label: "KB", angle: 315 },
];

export default function QiblaScreen() {
  const { colors, isDark } = useTheme();
  const { location } = useLocation();
  const [qiblaAngle, setQiblaAngle] = useState(0);
  const [direction, setDirection] = useState("");
  const [distance, setDistance] = useState(0);
  const [heading, setHeading] = useState(0);
  const [hasSensor, setHasSensor] = useState(true);

  useEffect(() => {
    const qibla = calculateQibla(location.lat, location.lon);
    setQiblaAngle(Math.round(qibla));
    setDirection(getQiblaDirection(qibla));
    setDistance(calculateDistance(location.lat, location.lon));
  }, [location]);

  useEffect(() => {
    let sub: any;
    const init = async () => {
      const available = await Magnetometer.isAvailableAsync();
      setHasSensor(available);
      if (available) {
        sub = Magnetometer.addListener((data) => {
          const { x, y } = data;
          let angle = Math.atan2(y, x) * (180 / Math.PI);
          if (angle < 0) angle += 360;
          setHeading(angle);
        });
        Magnetometer.setUpdateInterval(100);
      }
    };
    init();
    return () => {
      if (sub) sub.remove();
    };
  }, []);

  const relativeAngle = hasSensor ? (qiblaAngle - heading + 360) % 360 : qiblaAngle;
  const diff = Math.round(relativeAngle > 180 ? relativeAngle - 360 : relativeAngle);
  const isFacing = Math.abs(diff) <= 3;

  return (
    <View style={[styles.container, { backgroundColor: colors.bg }]}>
      <View style={styles.header}>
        <Text style={[styles.headerTitle, { color: colors.fg }]}>Kıble Pusulası</Text>
      </View>

      <View style={[styles.compassCard, { backgroundColor: colors.surface, borderColor: colors.border }]}>
        <View style={[styles.compassRing, { borderColor: colors.border }]}>
          {tickMarks()}

          {DIRECTION_LABELS.map(({ label, angle }) => {
            const rad = (angle - 90) * (Math.PI / 180);
            const r = SIZE / 2 - 36;
            return (
              <Text
                key={label}
                style={[
                  styles.dirLabel,
                  {
                    left: SIZE / 2 + r * Math.cos(rad) - 8,
                    top: SIZE / 2 + r * Math.sin(rad) - 8,
                    color: angle === 0 ? "#D4AF37" : colors.muted,
                  },
                ]}
              >
                {label}
              </Text>
            );
          })}

          <View
            style={[
              styles.qiblaMarker,
              {
                left: SIZE / 2 + (SIZE / 2 - 28) * Math.cos((qiblaAngle - 90) * (Math.PI / 180)) - 10,
                top: SIZE / 2 + (SIZE / 2 - 28) * Math.sin((qiblaAngle - 90) * (Math.PI / 180)) - 10,
              },
            ]}
          >
            <Text style={styles.kabeIcon}>🕋</Text>
          </View>

          <View
            style={[
              styles.needleContainer,
              { transform: [{ rotate: `${hasSensor ? heading : 0}deg` }] },
            ]}
          >
            <View style={styles.needleTop} />
            <View style={styles.needleBottom} />
          </View>

          <View style={[styles.centerDot, { backgroundColor: colors.accent }]} />
        </View>

        {!hasSensor && (
          <View style={[styles.sensorWarning, { backgroundColor: "#f5e6e6" }]}>
            <Text style={{ fontSize: 12, color: "#c0393f", textAlign: "center" }}>
              Pusula sensörü bulunamadı. Kıble açısı statik olarak gösteriliyor.
            </Text>
          </View>
        )}

        <View style={styles.qiblaInfo}>
          {isFacing && hasSensor ? (
            <View style={styles.facingBadge}>
              <Text style={{ fontSize: 32 }}>✅</Text>
              <Text style={[styles.qiblaDirection, { color: colors.success }]}>Kıbleye dönüksünüz</Text>
            </View>
          ) : (
            <View style={styles.facingBadge}>
              <Text style={{ fontSize: 28 }}>
                {diff > 0 ? "↩" : "↪"}
              </Text>
              <Text style={[styles.qiblaDirection, { color: colors.accentWarm }]}>
                {Math.abs(diff)}° {diff > 0 ? " sola" : " sağa"} dön
              </Text>
            </View>
          )}
          <Text style={[styles.qiblaDegrees, { color: colors.muted }]}>
            {direction} yönü · Kıble açısı {qiblaAngle}°
          </Text>
          {hasSensor && (
            <Text style={{ fontSize: 12, color: colors.muted, marginTop: 2 }}>
              Cihaz yönü: {Math.round(heading)}° · {location.city}
            </Text>
          )}
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
          <Text style={[styles.infoValue, { color: colors.fg }]}>{qiblaAngle}°</Text>
          <Text style={[styles.infoLabel, { color: colors.muted }]}>Kıble Açısı</Text>
        </View>
        <View style={[styles.infoCard, { backgroundColor: colors.surface, borderColor: colors.border }]}>
          <Text style={[styles.infoValue, { color: colors.fg }]}>القبلة</Text>
          <Text style={[styles.infoLabel, { color: colors.muted }]}>Arapça Yazılışı</Text>
        </View>
        <View style={[styles.infoCard, { backgroundColor: colors.surface, borderColor: colors.border }]}>
          <Text style={[styles.infoValue, { color: hasSensor ? colors.accent : colors.muted }]}>
            {hasSensor ? "Aktif" : "Pasif"}
          </Text>
          <Text style={[styles.infoLabel, { color: colors.muted }]}>Sensör Durumu</Text>
        </View>
      </View>

      <View style={[styles.locationFooter, { backgroundColor: colors.surface, borderColor: colors.border }]}>
        <Text style={{ fontSize: 13, color: colors.muted }}>
          📍 {location.city}, {location.district} · {location.lat}°K, {location.lon}°D
        </Text>
      </View>

      <View style={{ alignItems: "center", marginTop: 8 }}>
        <Text style={{ fontSize: 11, color: colors.muted }}>
          🕋 Kabe yönü sabit · Cihazı döndürerek kıbleyi bulun
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
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    borderWidth: 2,
  },
  tick: { position: "absolute", borderRadius: 1 },
  dirLabel: { position: "absolute", fontSize: 13, fontWeight: "700", width: 16, textAlign: "center" },
  qiblaMarker: {
    position: "absolute",
    width: 20,
    height: 20,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
  },
  kabeIcon: { fontSize: 16 },
  needleContainer: {
    width: 180,
    height: 180,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  needleTop: {
    position: "absolute",
    top: 5,
    width: 4,
    height: 85,
    backgroundColor: "#c0393f",
    borderRadius: 2,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  needleBottom: {
    position: "absolute",
    bottom: 5,
    width: 4,
    height: 85,
    backgroundColor: "#2ea885",
    borderRadius: 2,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },
  centerDot: { position: "absolute", width: 14, height: 14, borderRadius: 7 },
  sensorWarning: { marginTop: 12, padding: 8, borderRadius: 8, width: "100%" },
  qiblaInfo: { alignItems: "center", marginTop: 16 },
  facingBadge: { flexDirection: "row", alignItems: "center", gap: 8 },
  qiblaDirection: { fontSize: 22, fontWeight: "700" },
  qiblaDegrees: { fontSize: 13, marginTop: 4 },
  infoCards: { flexDirection: "row", flexWrap: "wrap", gap: 10, marginBottom: 16 },
  infoCard: { width: "48%", padding: 16, borderRadius: 12, borderWidth: 1, alignItems: "center" },
  infoValue: { fontSize: 20, fontWeight: "700" },
  infoLabel: { fontSize: 11, marginTop: 4, textTransform: "uppercase", letterSpacing: 0.5 },
  locationFooter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
  },
});
