import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from "react-native";
import { useTheme } from "../context/ThemeContext";
import { duas, duaCategories } from "../data/duas";

export default function DuaScreen() {
  const { colors, isDark } = useTheme();
  const [activeCategory, setActiveCategory] = useState("all");
  const [search, setSearch] = useState("");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filtered = duas.filter((d) => {
    if (activeCategory !== "all" && d.category !== activeCategory) return false;
    if (search) {
      const s = search.toLowerCase();
      if (!d.translation.toLowerCase().includes(s) && !d.arabic.includes(s)) return false;
    }
    return true;
  });

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.bg }]}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={[styles.headerTitle, { color: colors.fg }]}>Dualar</Text>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categories} contentContainerStyle={{ gap: 8 }}>
          {duaCategories.map((cat) => (
            <TouchableOpacity
              key={cat.key}
              style={[styles.catItem, {
                backgroundColor: activeCategory === cat.key ? colors.accent : colors.surface,
                borderColor: activeCategory === cat.key ? colors.accent : colors.border,
              }]}
              onPress={() => setActiveCategory(cat.key)}
            >
              <Text style={[styles.catText, {
                color: activeCategory === cat.key ? "#fff" : colors.muted,
              }]}>
                {cat.label}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <View style={[styles.searchBar, { backgroundColor: colors.surface, borderColor: colors.border }]}>
          <Text style={{ fontSize: 14 }}>🔍</Text>
          <TextInput
            placeholder="Dua ara..."
            placeholderTextColor={colors.muted}
            style={[styles.searchInput, { color: colors.fg }]}
            value={search}
            onChangeText={setSearch}
          />
        </View>

        <View style={styles.duaList}>
          {filtered.map((dua) => {
            const isExpanded = expandedId === dua.id;
            return (
              <TouchableOpacity
                key={dua.id}
                style={[styles.duaCard, { backgroundColor: colors.surface, borderColor: colors.border }]}
                onPress={() => setExpandedId(isExpanded ? null : dua.id)}
                activeOpacity={0.7}
              >
                <Text style={[styles.duaArabic, { color: colors.fg }]}>{dua.arabic}</Text>
                <Text
                  style={[styles.duaTranslation, { color: colors.muted }]}
                  numberOfLines={isExpanded ? undefined : 3}
                >
                  {dua.translation}
                </Text>
                <Text style={[styles.duaSource, { backgroundColor: colors.bg, color: colors.muted }]}>
                  {dua.source}
                </Text>
                {isExpanded && (
                  <View style={styles.duaActions}>
                    <TouchableOpacity style={[styles.btnCopy, { backgroundColor: isDark ? colors.surfaceAlt : "#e6f2ed" }]}>
                      <Text style={{ fontSize: 12, color: colors.accent, fontWeight: "500" }}>Kopyala</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.btnShare, { backgroundColor: colors.bg }]}>
                      <Text style={{ fontSize: 12, color: colors.muted, fontWeight: "500" }}>Paylaş</Text>
                    </TouchableOpacity>
                  </View>
                )}
              </TouchableOpacity>
            );
          })}
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
  categories: { marginBottom: 12 },
  catItem: { paddingHorizontal: 18, paddingVertical: 8, borderRadius: 20, borderWidth: 1 },
  catText: { fontSize: 13, fontWeight: "500" },
  searchBar: {
    flexDirection: "row", alignItems: "center", gap: 8, padding: 10,
    borderRadius: 12, borderWidth: 1, marginBottom: 12,
  },
  searchInput: { flex: 1, fontSize: 14, padding: 0 },
  duaList: { gap: 10 },
  duaCard: { borderRadius: 12, borderWidth: 1, padding: 18 },
  duaArabic: { fontSize: 20, lineHeight: 36, marginBottom: 8, textAlign: "right", fontFamily: "serif" },
  duaTranslation: { fontSize: 14, lineHeight: 22, marginBottom: 8 },
  duaSource: { fontSize: 11, paddingHorizontal: 10, paddingVertical: 4, borderRadius: 20, alignSelf: "flex-start", overflow: "hidden" },
  duaActions: { flexDirection: "row", gap: 8, marginTop: 10 },
  btnCopy: { paddingHorizontal: 14, paddingVertical: 6, borderRadius: 20 },
  btnShare: { paddingHorizontal: 14, paddingVertical: 6, borderRadius: 20 },
});
