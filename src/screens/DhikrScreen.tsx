import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { colors } from "../utils/theme";

interface DhikrPreset {
  id: string;
  title: string;
  arabic: string;
  target: number;
  icon: string;
  bg: string;
}

const presets: DhikrPreset[] = [
  {
    id: "subhanallah",
    title: "Subhanallah",
    arabic: "سُبْحَانَ اللّٰه",
    target: 33,
    icon: "📿",
    bg: "#e6f2ed",
  },
  {
    id: "hamd",
    title: "Elhamdülillah",
    arabic: "الْحَمْدُ لِلّٰه",
    target: 33,
    icon: "🌟",
    bg: "#f5ede2",
  },
  {
    id: "takbir",
    title: "Allahu Ekber",
    arabic: "اللّٰهُ أَكْبَر",
    target: 33,
    icon: "✨",
    bg: "#e6ede6",
  },
  {
    id: "istigfar",
    title: "Estağfirullah",
    arabic: "أَسْتَغْفِرُ اللّٰه",
    target: 100,
    icon: "🕋",
    bg: "#f5e6e6",
  },
];

export default function DhikrScreen() {
  const [count, setCount] = useState(0);
  const [target, setTarget] = useState(33);
  const [activePreset, setActivePreset] = useState("subhanallah");
  const [title, setTitle] = useState("Subhanallah");
  const [arabic, setArabic] = useState("سُبْحَانَ اللّٰه");

  const progress = target > 0 ? Math.min((count / target) * 100, 100) : 0;

  function selectPreset(p: DhikrPreset) {
    setActivePreset(p.id);
    setTarget(p.target);
    setTitle(p.title);
    setArabic(p.arabic);
    setCount(0);
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Zikir / Tesbih</Text>
      </View>

      <View style={styles.counterCard}>
        <Text style={styles.counterDisplay}>{count}</Text>
        <Text style={styles.counterLabel}>
          {title} / {arabic}
        </Text>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: `${progress}%` }]} />
        </View>

        <View style={styles.counterActions}>
          <TouchableOpacity
            style={styles.btnAction}
            onPress={() => setCount(Math.max(0, count - 1))}
          >
            <Text style={styles.btnActionText}>−</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnPlus}
            onPress={() => {
              if (count < target) {
                setCount(count + 1);
              } else {
                setCount(target);
              }
            }}
          >
            <Text style={styles.btnPlusText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnReset}
            onPress={() => setCount(0)}
          >
            <Text style={styles.btnResetText}>↻</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.presets}>
        {presets.map((p) => (
          <TouchableOpacity
            key={p.id}
            style={[
              styles.preset,
              activePreset === p.id && styles.presetActive,
            ]}
            onPress={() => selectPreset(p)}
          >
            <View style={[styles.presetIcon, { backgroundColor: p.bg }]}>
              <Text style={{ fontSize: 20 }}>{p.icon}</Text>
            </View>
            <View style={styles.presetText}>
              <Text style={styles.presetTitle}>{p.title}</Text>
              <Text style={styles.presetArabic}>{p.arabic}</Text>
            </View>
            <Text
              style={[
                styles.presetCount,
                activePreset === p.id && { backgroundColor: colors.accent, color: "#fff" },
              ]}
            >
              {p.target}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.vibrationHint}>
        Dokunma hissi destekleniyor · Sayaç otomatik kaydedilir
      </Text>
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
  headerTitle: { fontSize: 20, fontWeight: "700", color: colors.fg, flex: 1 },
  counterCard: {
    backgroundColor: colors.surface,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 32,
    alignItems: "center",
    marginBottom: 16,
  },
  counterDisplay: {
    fontSize: 72,
    fontWeight: "700",
    color: colors.accent,
    lineHeight: 80,
  },
  counterLabel: {
    fontSize: 14,
    color: colors.muted,
    marginBottom: 16,
    textAlign: "center",
  },
  progressBar: {
    width: "100%",
    height: 4,
    backgroundColor: colors.border,
    borderRadius: 2,
    overflow: "hidden",
    marginBottom: 16,
  },
  progressFill: {
    height: "100%",
    backgroundColor: colors.accent,
    borderRadius: 2,
  },
  counterActions: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 24,
  },
  btnAction: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: colors.bg,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: colors.border,
  },
  btnActionText: { fontSize: 24, color: colors.muted },
  btnPlus: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: colors.accent,
    alignItems: "center",
    justifyContent: "center",
  },
  btnPlusText: { fontSize: 32, color: "#fff" },
  btnReset: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#f5e6e6",
    alignItems: "center",
    justifyContent: "center",
  },
  btnResetText: { fontSize: 22, color: colors.danger },
  presets: { gap: 8 },
  preset: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    padding: 14,
    backgroundColor: colors.surface,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
  },
  presetActive: {
    borderColor: colors.accent,
    backgroundColor: "rgba(46, 168, 133, 0.06)",
  },
  presetIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  presetText: { flex: 1 },
  presetTitle: { fontSize: 14, fontWeight: "600", color: colors.fg },
  presetArabic: { fontSize: 14, color: colors.muted, marginTop: 2 },
  presetCount: {
    fontSize: 13,
    color: colors.muted,
    backgroundColor: colors.bg,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    overflow: "hidden",
  },
  vibrationHint: {
    textAlign: "center",
    fontSize: 11,
    color: colors.muted,
    marginTop: 16,
  },
});
