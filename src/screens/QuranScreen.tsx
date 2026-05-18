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
import { useTheme } from "../context/ThemeContext";
import {
  findQuranAnswer,
  suggestQuestions,
  type QuranAnswer,
} from "../data/quranAnswers";
import { getRandomAyah, dailyAyahs } from "../data/ayahs";

export default function QuranScreen() {
  const { colors, isDark } = useTheme();
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState<QuranAnswer | null>(null);
  const [showAyah, setShowAyah] = useState(true);
  const [currentAyah, setCurrentAyah] = useState(dailyAyahs[0]);
  const [hasAsked, setHasAsked] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);

  const suggestions = suggestQuestions();

  function handleAsk(q?: string) {
    const text = (q || question).trim();
    if (!text) return;
    const result = findQuranAnswer(text);
    setAnswer(result);
    setHasAsked(true);
    setShowSuggestions(false);
  }

  function refreshAyah() {
    setCurrentAyah(getRandomAyah());
    setShowAyah(true);
  }

  function handleSuggestion(s: string) {
    setQuestion(s);
    handleAsk(s);
  }

  return (
    <KeyboardAvoidingView
      style={[styles.container, { backgroundColor: colors.bg }]}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <Text style={[styles.headerTitle, { color: colors.fg }]}>
            Kur'an
          </Text>
        </View>

        <View
          style={[
            styles.ayahCard,
            {
              backgroundColor: colors.surface,
              borderColor: colors.border,
            },
          ]}
        >
          <View style={styles.ayahHeader}>
            <Text style={[styles.ayahHeaderLabel, { color: colors.accent }]}>
              {showAyah ? currentAyah.surah : "Günün Ayeti"}
            </Text>
            <TouchableOpacity
              onPress={refreshAyah}
              style={[styles.refreshBtn, { backgroundColor: isDark ? colors.surfaceAlt : "#e6f2ed" }]}
            >
              <Text style={{ fontSize: 12, color: colors.accent, fontWeight: "500" }}>
                🔄 Yenile
              </Text>
            </TouchableOpacity>
          </View>
          {showAyah && (
            <>
              <Text
                style={[
                  styles.ayahArabic,
                  {
                    color: colors.fg,
                  },
                ]}
              >
                {currentAyah.text}
              </Text>
              <Text
                style={[
                  styles.ayahTranslation,
                  {
                    color: colors.muted,
                  },
                ]}
              >
                {currentAyah.translation}
              </Text>
              <Text
                style={[
                  styles.ayahReference,
                  { color: colors.accentGreen },
                ]}
              >
                {currentAyah.surah} {currentAyah.ayah}
              </Text>
            </>
          )}
          {!showAyah && (
            <TouchableOpacity onPress={refreshAyah}>
              <Text
                style={{
                  fontSize: 14,
                  color: colors.muted,
                  textAlign: "center",
                }}
              >
                Günün ayetini görmek için dokun
              </Text>
            </TouchableOpacity>
          )}
        </View>

        <View
          style={[
            styles.qaSection,
            {
              backgroundColor: colors.surface,
              borderColor: colors.border,
            },
          ]}
        >
          <Text style={[styles.qaTitle, { color: colors.fg }]}>
            🤖 Kur'an AI
          </Text>
          <Text style={[styles.qaSubtitle, { color: colors.muted }]}>
            İslam ve Kur'an hakkında merak ettiğin her şeyi sor. Kur'an
            ayetleriyle cevaplıyorum.
          </Text>

          <View style={styles.inputRow}>
            <TextInput
              style={[
                styles.input,
                {
                  backgroundColor: colors.bg,
                  color: colors.fg,
                  borderColor: colors.border,
                },
              ]}
              placeholder="Sorunu yaz (ör. alkol haram mı?)"
              placeholderTextColor={colors.muted}
              value={question}
              onChangeText={(t) => {
                setQuestion(t);
                setShowSuggestions(true);
              }}
              onSubmitEditing={() => handleAsk()}
              returnKeyType="search"
            />
            <TouchableOpacity
              style={[styles.askBtn, { backgroundColor: colors.accent }]}
              onPress={() => handleAsk()}
            >
              <Text style={styles.askBtnText}>Sor</Text>
            </TouchableOpacity>
          </View>

          {showSuggestions && suggestions.length > 0 && !hasAsked && (
            <View style={styles.suggestions}>
              <Text style={[styles.suggestTitle, { color: colors.muted }]}>
                Önerilen Sorular:
              </Text>
              <View style={styles.suggestionChips}>
                {suggestions.map((s, i) => (
                  <TouchableOpacity
                    key={i}
                    style={[
                      styles.chip,
                      {
                        backgroundColor: isDark
                          ? colors.surfaceAlt
                          : colors.bg,
                        borderColor: colors.border,
                      },
                    ]}
                    onPress={() => handleSuggestion(s)}
                  >
                    <Text
                      style={{ fontSize: 13, color: colors.accent, fontWeight: "500" }}
                    >
                      {s}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          )}

          {hasAsked && (
            <View
              style={[
                styles.answerCard,
                {
                  backgroundColor: isDark
                    ? colors.surfaceAlt
                    : "#f0f8f5",
                  borderColor: colors.accent + "40",
                },
              ]}
            >
              <View style={styles.answerHeader}>
                <Text style={[styles.answerQ, { color: colors.fg }]}>
                  ❓ {question}
                </Text>
              </View>
              <View
                style={[
                  styles.answerDivider,
                  { backgroundColor: colors.border },
                ]}
              />
              {answer ? (
                <>
                  <Text
                    style={[
                      styles.answerArabic,
                      {
                        color: colors.fg,
                      },
                    ]}
                  >
                    {answer.arabic}
                  </Text>
                  <Text
                    style={[styles.answerText, { color: colors.fg }]}
                  >
                    {answer.answer}
                  </Text>
                  <Text
                    style={[
                      styles.answerSource,
                      { color: colors.accentGreen },
                    ]}
                  >
                    {answer.surah} Suresi, {answer.ayah}
                  </Text>
                </>
              ) : (
                <Text style={[styles.answerText, { color: colors.muted }]}>
                  Bu soruya henüz bir cevap bulamadım. Lütfen farklı bir
                  şekilde sormayı dene veya önerilen sorulardan birini dene.
                </Text>
              )}
              <TouchableOpacity
                style={[
                  styles.newQuestionBtn,
                  { borderColor: colors.accent },
                ]}
                onPress={() => {
                  setHasAsked(false);
                  setQuestion("");
                  setShowSuggestions(true);
                }}
              >
                <Text
                  style={{
                    fontSize: 14,
                    color: colors.accent,
                    fontWeight: "500",
                  }}
                >
                  Yeni Soru Sor
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { padding: 16, paddingBottom: 32 },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingVertical: 4,
    marginBottom: 8,
  },
  headerTitle: { fontSize: 20, fontWeight: "700", flex: 1 },
  ayahCard: {
    borderRadius: 18,
    borderWidth: 1,
    padding: 20,
    marginBottom: 20,
  },
  ayahHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  ayahHeaderLabel: { fontSize: 14, fontWeight: "600" },
  refreshBtn: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  ayahArabic: {
    fontSize: 24,
    lineHeight: 40,
    textAlign: "center",
    marginBottom: 12,
    fontFamily: "serif",
  },
  ayahTranslation: {
    fontSize: 15,
    lineHeight: 24,
    textAlign: "center",
    marginBottom: 8,
  },
  ayahReference: { fontSize: 12, fontWeight: "500", textAlign: "center" },
  qaSection: {
    borderRadius: 18,
    borderWidth: 1,
    padding: 20,
  },
  qaTitle: { fontSize: 18, fontWeight: "700", marginBottom: 4 },
  qaSubtitle: { fontSize: 13, marginBottom: 16, lineHeight: 20 },
  inputRow: { flexDirection: "row", gap: 8, marginBottom: 12 },
  input: {
    flex: 1,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 14,
    borderWidth: 1,
  },
  askBtn: {
    borderRadius: 12,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  askBtnText: { color: "#fff", fontWeight: "600", fontSize: 15 },
  suggestions: { marginBottom: 8 },
  suggestTitle: { fontSize: 12, fontWeight: "500", marginBottom: 8 },
  suggestionChips: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  chip: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
  },
  answerCard: {
    marginTop: 8,
    padding: 16,
    borderRadius: 14,
    borderWidth: 1,
  },
  answerHeader: { marginBottom: 4 },
  answerQ: { fontSize: 14, fontWeight: "600" },
  answerDivider: { height: 1, marginVertical: 12 },
  answerArabic: {
    fontSize: 20,
    lineHeight: 36,
    textAlign: "right",
    marginBottom: 12,
    fontFamily: "serif",
  },
  answerText: { fontSize: 15, lineHeight: 24 },
  answerSource: { fontSize: 12, fontWeight: "500", marginTop: 8 },
  newQuestionBtn: {
    marginTop: 16,
    paddingVertical: 10,
    borderRadius: 12,
    borderWidth: 1,
    alignItems: "center",
  },
});
