import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useTheme } from "../context/ThemeContext";

const presets = [
  { id: "subhanallah", title: "Subhanallah", arabic: "سُبْحَانَ اللّٰه", target: 33, icon: "📿", bg: "#e6f2ed" },
  { id: "hamd", title: "Elhamdülillah", arabic: "الْحَمْدُ لِلّٰه", target: 33, icon: "🌟", bg: "#f5ede2" },
  { id: "takbir", title: "Allahu Ekber", arabic: "اللّٰهُ أَكْبَر", target: 33, icon: "✨", bg: "#e6ede6" },
  { id: "istigfar", title: "Estağfirullah", arabic: "أَسْتَغْفِرُ اللّٰه", target: 100, icon: "🕋", bg: "#f5e6e6" },
  { id: "salavat", title: "Salavat", arabic: "اللّٰهُمَّ صَلِّ عَلٰى مُحَمَّد", target: 100, icon: "🌹", bg: "#e6e6f5" },
];

export default function DhikrScreen() {
  const { colors, isDark } = useTheme();
  const [count, setCount] = useState(0);
  const [activePreset, setActivePreset] = useState("subhanallah");
  const [title, setTitle] = useState("Subhanallah");
  const [arabic, setArabic] = useState("سُبْحَانَ اللّٰه");
  const [target, setTarget] = useState(33);

  const progress = target > 0 ? Math.min((count / target) * 100, 100) : 0;

  function selectPreset(p: typeof presets[0]) {
    setActivePreset(p.id);
    setTarget(p.target);
    setTitle(p.title);
    setArabic(p.arabic);
    setCount(0);
  }

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.bg }]}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={[styles.headerTitle, { color: colors.fg }]}>Zikir / Tesbih</Text>
        </View>

        <View style={[styles.counterCard, { backgroundColor: colors.surface, borderColor: colors.border }]}>
          <Text style={[styles.counterDisplay, { color: colors.accent }]}>{count}</Text>
          <Text style={[styles.counterLabel, { color: colors.muted }]}>
            {title} / {arabic}
          </Text>
          <View style={[styles.progressBar, { backgroundColor: colors.border }]}>
            <View style={[styles.progressFill, { backgroundColor: colors.accent, width: `${progress}%` }]} />
          </View>

          <View style={styles.counterActions}>
            <TouchableOpacity
              style={[styles.btnAction, { backgroundColor: colors.bg, borderColor: colors.border }]}
              onPress={() => setCount(Math.max(0, count - 1))}
            >
              <Text style={{ fontSize: 24, color: colors.muted }}>−</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.btnPlus, { backgroundColor: colors.accent }]}
              onPress={() => {
                if (count < target) setCount(count + 1);
              }}
            >
              <Text style={styles.btnPlusText}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.btnReset, { backgroundColor: isDark ? colors.surfaceAlt : "#f5e6e6" }]}
              onPress={() => setCount(0)}
            >
              <Text style={{ fontSize: 22, color: colors.danger }}>↻</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.presets}>
          {presets.map((p) => (
            <TouchableOpacity
              key={p.id}
              style={[
                styles.preset,
                {
                  backgroundColor: colors.surface,
                  borderColor: activePreset === p.id ? colors.accent : colors.border,
                },
                activePreset === p.id && { backgroundColor: isDark ? "rgba(59,201,159,0.08)" : "rgba(46,168,133,0.06)" },
              ]}
              onPress={() => selectPreset(p)}
            >
              <View style={[styles.presetIcon, { backgroundColor: p.bg }]}>
                <Text style={{ fontSize: 20 }}>{p.icon}</Text>
              </View>
              <View style={styles.presetText}>
                <Text style={[styles.presetTitle, { color: colors.fg }]}>{p.title}</Text>
                <Text style={[styles.presetArabic, { color: colors.muted }]}>{p.arabic}</Text>
              </View>
              <Text
                style={[
                  styles.presetCount,
                  {
                    backgroundColor: activePreset === p.id ? colors.accent : colors.bg,
                    color: activePreset === p.id ? "#fff" : colors.muted,
                  },
                ]}
              >
                {p.target}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={[styles.vibrationHint, { color: colors.muted }]}>
          Dokunma hissi destekleniyor · Sayaç otomatik kaydedilir
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { padding: 16, paddingBottom: 32 },
  header: { flexDirection: "row", alignItems: "center", gap: 12, paddingVertical: 4, marginBottom: 8 },
  headerTitle: { fontSize: 20, fontWeight: "700", flex: 1 },
  counterCard: { borderRadius: 18, borderWidth: 1, padding: 32, alignItems: "center", marginBottom: 16 },
  counterDisplay: { fontSize: 72, fontWeight: "700", lineHeight: 80 },
  counterLabel: { fontSize: 14, marginBottom: 16, textAlign: "center" },
  progressBar: { width: "100%", height: 4, borderRadius: 2, marginBottom: 16, overflow: "hidden" },
  progressFill: { height: "100%", borderRadius: 2 },
  counterActions: { flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 24 },
  btnAction: { width: 56, height: 56, borderRadius: 28, alignItems: "center", justifyContent: "center", borderWidth: 1 },
  btnPlus: { width: 72, height: 72, borderRadius: 36, alignItems: "center", justifyContent: "center" },
  btnPlusText: { fontSize: 32, color: "#fff" },
  btnReset: { width: 56, height: 56, borderRadius: 28, alignItems: "center", justifyContent: "center" },
  presets: { gap: 8 },
  preset: { flexDirection: "row", alignItems: "center", gap: 14, padding: 14, borderRadius: 12, borderWidth: 1 },
  presetIcon: { width: 40, height: 40, borderRadius: 20, alignItems: "center", justifyContent: "center" },
  presetText: { flex: 1 },
  presetTitle: { fontSize: 14, fontWeight: "600" },
  presetArabic: { fontSize: 14, marginTop: 2 },
  presetCount: { fontSize: 13, paddingHorizontal: 10, paddingVertical: 4, borderRadius: 20, overflow: "hidden" },
  vibrationHint: { textAlign: "center", fontSize: 11, marginTop: 16 },
});
