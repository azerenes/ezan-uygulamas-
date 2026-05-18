import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { colors } from "../utils/theme";
import { findQuranAnswer, type QuranAnswer } from "../data/quranAnswers";
import { getRandomAyah } from "../data/ayahs";
import { dailyAyahs } from "../data/ayahs";

export default function QuranScreen() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState<QuranAnswer | null>(null);
  const [showAyah, setShowAyah] = useState(false);
  const [currentAyah, setCurrentAyah] = useState(dailyAyahs[0]);
  const [hasAsked, setHasAsked] = useState(false);

  function handleAsk() {
    if (!question.trim()) return;
    const result = findQuranAnswer(question);
    setAnswer(result);
    setHasAsked(true);
  }

  function refreshAyah() {
    const ayah = getRandomAyah();
    setCurrentAyah(ayah);
    setShowAyah(true);
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Kur'an</Text>
        </View>

        <View style={styles.ayahCard}>
          <View style={styles.ayahHeader}>
            <Text style={styles.ayahHeaderLabel}>
              {showAyah ? currentAyah.surah : "Günün Ayeti"}
            </Text>
            <TouchableOpacity onPress={refreshAyah} style={styles.refreshBtn}>
              <Text style={styles.refreshBtnText}>🔄 Yenile</Text>
            </TouchableOpacity>
          </View>
          {showAyah && (
            <>
              <Text style={styles.ayahArabic}>{currentAyah.text}</Text>
              <Text style={styles.ayahTranslation}>
                {currentAyah.translation}
              </Text>
              <Text style={styles.ayahReference}>
                {currentAyah.surah} {currentAyah.ayah}
              </Text>
            </>
          )}
          {!showAyah && (
            <TouchableOpacity onPress={refreshAyah}>
              <Text style={styles.ayahPlaceholder}>
                Günün ayetini görmek için dokun
              </Text>
            </TouchableOpacity>
          )}
        </View>

        <View style={styles.qaSection}>
          <Text style={styles.qaTitle}>Kur'an AI</Text>
          <Text style={styles.qaSubtitle}>
            İslam ve Kur'an hakkında sorularına cevap bul
          </Text>

          <View style={styles.inputRow}>
            <TextInput
              style={styles.input}
              placeholder="Sorunu yaz (ör. alkol haram mı?)"
              placeholderTextColor={colors.muted}
              value={question}
              onChangeText={setQuestion}
              onSubmitEditing={handleAsk}
              returnKeyType="search"
            />
            <TouchableOpacity style={styles.askBtn} onPress={handleAsk}>
              <Text style={styles.askBtnText}>Sor</Text>
            </TouchableOpacity>
          </View>

          {hasAsked && (
            <View style={styles.answerCard}>
              {answer ? (
                <>
                  <Text style={styles.answerQ}>
                    ❓ {question}
                  </Text>
                  <View style={styles.answerDivider} />
                  <Text style={styles.answerArabic}>{answer.arabic}</Text>
                  <Text style={styles.answerText}>{answer.answer}</Text>
                  <Text style={styles.answerSource}>
                    {answer.surah} {answer.ayah}
                  </Text>
                </>
              ) : (
                <View style={styles.answerCard}>
                  <Text style={styles.answerQ}>❓ {question}</Text>
                  <View style={styles.answerDivider} />
                  <Text style={[styles.answerText, { color: colors.muted }]}>
                    Bu soruya henüz bir cevap bulamadım. Lütfen farklı bir
                    şekilde sormayı dene.
                  </Text>
                </View>
              )}
            </View>
          )}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
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
  ayahCard: {
    backgroundColor: colors.surface,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 20,
    marginBottom: 20,
  },
  ayahHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  ayahHeaderLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.accent,
  },
  refreshBtn: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    backgroundColor: "#e6f2ed",
  },
  refreshBtnText: { fontSize: 12, color: colors.accent, fontWeight: "500" },
  ayahArabic: {
    fontSize: 24,
    color: colors.fg,
    lineHeight: 40,
    textAlign: "center",
    marginBottom: 12,
    fontFamily: "serif",
  },
  ayahTranslation: {
    fontSize: 15,
    color: colors.muted,
    lineHeight: 24,
    textAlign: "center",
    marginBottom: 8,
  },
  ayahReference: {
    fontSize: 12,
    color: colors.accentGreen,
    fontWeight: "500",
    textAlign: "center",
  },
  ayahPlaceholder: {
    fontSize: 14,
    color: colors.muted,
    textAlign: "center",
  },
  qaSection: {
    backgroundColor: colors.surface,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 20,
  },
  qaTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: colors.fg,
    marginBottom: 4,
  },
  qaSubtitle: {
    fontSize: 13,
    color: colors.muted,
    marginBottom: 16,
  },
  inputRow: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 16,
  },
  input: {
    flex: 1,
    backgroundColor: colors.bg,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 14,
    color: colors.fg,
    borderWidth: 1,
    borderColor: colors.border,
  },
  askBtn: {
    backgroundColor: colors.accent,
    borderRadius: 12,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  askBtnText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 15,
  },
  answerCard: {
    marginTop: 8,
  },
  answerQ: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.fg,
    marginBottom: 8,
  },
  answerDivider: {
    height: 1,
    backgroundColor: colors.border,
    marginBottom: 12,
  },
  answerArabic: {
    fontSize: 20,
    color: colors.fg,
    lineHeight: 36,
    textAlign: "right",
    marginBottom: 8,
    fontFamily: "serif",
  },
  answerText: {
    fontSize: 15,
    color: colors.fg,
    lineHeight: 24,
  },
  answerSource: {
    fontSize: 12,
    color: colors.accentGreen,
    fontWeight: "500",
    marginTop: 8,
  },
});
