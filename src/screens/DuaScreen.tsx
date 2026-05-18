import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { colors } from "../utils/theme";
import { duas, duaCategories } from "../data/duas";

export default function DuaScreen() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [search, setSearch] = useState("");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filtered = duas.filter((d) => {
    if (activeCategory !== "all" && d.category !== activeCategory) return false;
    if (search) {
      const s = search.toLowerCase();
      if (
        !d.translation.toLowerCase().includes(s) &&
        !d.arabic.includes(s)
      )
        return false;
    }
    return true;
  });

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Dualar</Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categories}
        contentContainerStyle={{ gap: 8 }}
      >
        {duaCategories.map((cat) => (
          <TouchableOpacity
            key={cat.key}
            style={[
              styles.catItem,
              activeCategory === cat.key && styles.catItemActive,
            ]}
            onPress={() => setActiveCategory(cat.key)}
          >
            <Text
              style={[
                styles.catText,
                activeCategory === cat.key && styles.catTextActive,
              ]}
            >
              {cat.label}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.searchBar}>
        <Text style={{ fontSize: 14, color: colors.muted }}>🔍</Text>
        <TextInput
          placeholder="Dua ara..."
          placeholderTextColor={colors.muted}
          style={styles.searchInput}
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
              style={styles.duaCard}
              onPress={() => setExpandedId(isExpanded ? null : dua.id)}
              activeOpacity={0.7}
            >
              <Text style={styles.duaArabic}>{dua.arabic}</Text>
              <Text style={styles.duaTranslation} numberOfLines={isExpanded ? undefined : 3}>
                {dua.translation}
              </Text>
              <Text style={styles.duaSource}>{dua.source}</Text>
              {isExpanded && (
                <View style={styles.duaActions}>
                  <TouchableOpacity style={styles.btnCopy}>
                    <Text style={{ fontSize: 12, color: colors.accent, fontWeight: "500" }}>
                      Kopyala
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.btnShare}>
                    <Text style={{ fontSize: 12, color: colors.muted, fontWeight: "500" }}>
                      Paylaş
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
            </TouchableOpacity>
          );
        })}
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
  headerTitle: { fontSize: 20, fontWeight: "700", color: colors.fg, flex: 1 },
  categories: { marginBottom: 12 },
  catItem: {
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
  },
  catItemActive: {
    backgroundColor: colors.accent,
    borderColor: colors.accent,
  },
  catText: { fontSize: 13, fontWeight: "500", color: colors.muted },
  catTextActive: { color: "#fff" },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingVertical: 10,
    marginBottom: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: colors.fg,
    padding: 0,
  },
  duaList: { gap: 10 },
  duaCard: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 18,
  },
  duaArabic: {
    fontSize: 20,
    color: colors.fg,
    lineHeight: 36,
    marginBottom: 8,
    textAlign: "right",
    fontFamily: "serif",
    writingDirection: "rtl",
  },
  duaTranslation: {
    fontSize: 14,
    color: colors.muted,
    lineHeight: 22,
    marginBottom: 8,
  },
  duaSource: {
    fontSize: 11,
    color: colors.muted,
    backgroundColor: colors.bg,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    alignSelf: "flex-start",
    overflow: "hidden",
  },
  duaActions: {
    flexDirection: "row",
    gap: 8,
    marginTop: 10,
  },
  btnCopy: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
    backgroundColor: "#e6f2ed",
  },
  btnShare: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
    backgroundColor: colors.bg,
  },
});
