import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Switch,
} from "react-native";
import { colors } from "../utils/theme";
import { requestNotificationPermission, schedulePrayerNotifications, sendDailyAyahNotification } from "../utils/notifications";

export default function SettingsScreen() {
  const [ezanNotification, setEzanNotification] = useState(true);
  const [ezanSound, setEzanSound] = useState(true);
  const [reminder, setReminder] = useState(false);
  const [silentMode, setSilentMode] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Ayarlar</Text>
      </View>

      <Text style={styles.groupTitle}>BİLDİRİMLER</Text>
      <View style={styles.settingGroup}>
        <View style={styles.settingItem}>
          <View style={styles.siLeft}>
            <View style={[styles.siIcon, { backgroundColor: "#e6f2ed" }]}>
              <Text>🔔</Text>
            </View>
            <View>
              <Text style={styles.siLabel}>Ezan Bildirimi</Text>
              <Text style={styles.siDesc}>
                Her vakit girdiğinde bildirim gönder
              </Text>
            </View>
          </View>
          <Switch
            value={ezanNotification}
            onValueChange={async (v) => {
              setEzanNotification(v);
              if (v) {
                await requestNotificationPermission();
                schedulePrayerNotifications();
              }
            }}
            trackColor={{ true: colors.accent }}
          />
        </View>

        <View style={styles.settingItem}>
          <View style={styles.siLeft}>
            <View style={[styles.siIcon, { backgroundColor: "#f5ede2" }]}>
              <Text>🔊</Text>
            </View>
            <View>
              <Text style={styles.siLabel}>Ezan Sesi</Text>
              <Text style={styles.siDesc}>
                Vakit girdiğinde ezan çalsın
              </Text>
            </View>
          </View>
          <Switch
            value={ezanSound}
            onValueChange={setEzanSound}
            trackColor={{ true: colors.accent }}
          />
        </View>

        <View style={styles.settingItem}>
          <View style={styles.siLeft}>
            <View style={[styles.siIcon, { backgroundColor: "#e6ede6" }]}>
              <Text>⏰</Text>
            </View>
            <View>
              <Text style={styles.siLabel}>İhtiyari Bildirimi</Text>
              <Text style={styles.siDesc}>
                Namaz vaktinden önce hatırlat
              </Text>
            </View>
          </View>
          <Switch
            value={reminder}
            onValueChange={setReminder}
            trackColor={{ true: colors.accent }}
          />
        </View>

        <View style={styles.settingItem}>
          <View style={styles.siLeft}>
            <View style={[styles.siIcon, { backgroundColor: "#f5e6e6" }]}>
              <Text>📳</Text>
            </View>
            <View>
              <Text style={styles.siLabel}>Sessiz Mod</Text>
              <Text style={styles.siDesc}>
                Sadece titreşim ile bildirim
              </Text>
            </View>
          </View>
          <Switch
            value={silentMode}
            onValueChange={setSilentMode}
            trackColor={{ true: colors.accent }}
          />
        </View>
      </View>

      <Text style={styles.groupTitle}>AYET BİLDİRİMLERİ</Text>
      <View style={styles.settingGroup}>
        <View style={styles.settingItem}>
          <View style={styles.siLeft}>
            <View style={[styles.siIcon, { backgroundColor: "#e6f2ed" }]}>
              <Text>📖</Text>
            </View>
            <View>
              <Text style={styles.siLabel}>Günün Ayeti</Text>
              <Text style={styles.siDesc}>
                Günde 2 kez ayet bildirimi gönder
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.actionBtn}
            onPress={async () => {
              await requestNotificationPermission();
              await sendDailyAyahNotification();
            }}
          >
            <Text style={{ fontSize: 12, color: colors.accent, fontWeight: "500" }}>
              Aktif Et
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.groupTitle}>KONUM</Text>
      <View style={styles.settingGroup}>
        <View style={styles.settingItem}>
          <View style={styles.siLeft}>
            <View style={[styles.siIcon, { backgroundColor: "#e6f2ed" }]}>
              <Text>📍</Text>
            </View>
            <View>
              <Text style={styles.siLabel}>Konum</Text>
              <Text style={styles.siDesc}>İstanbul, Fatih</Text>
            </View>
          </View>
          <Text style={{ fontSize: 13, color: colors.muted }}>Değiştir</Text>
        </View>

        <View style={styles.settingItem}>
          <View style={styles.siLeft}>
            <View style={[styles.siIcon, { backgroundColor: "#f5ede2" }]}>
              <Text>📋</Text>
            </View>
            <View>
              <Text style={styles.siLabel}>Hesaplama Yöntemi</Text>
              <Text style={styles.siDesc}>
                Diyanet İşleri Başkanlığı
              </Text>
            </View>
          </View>
          <Text style={{ fontSize: 13, color: colors.muted }}>Değiştir</Text>
        </View>
      </View>

      <Text style={styles.groupTitle}>GÖRÜNÜM</Text>
      <View style={styles.settingGroup}>
        <View style={styles.settingItem}>
          <View style={styles.siLeft}>
            <View style={[styles.siIcon, { backgroundColor: "#e6f2ed" }]}>
              <Text>🌙</Text>
            </View>
            <View>
              <Text style={styles.siLabel}>Tema</Text>
              <Text style={styles.siDesc}>Koyu tema kullan</Text>
            </View>
          </View>
          <Switch
            value={darkTheme}
            onValueChange={setDarkTheme}
            trackColor={{ true: colors.accent }}
          />
        </View>

        <View style={styles.settingItem}>
          <View style={styles.siLeft}>
            <View style={[styles.siIcon, { backgroundColor: "#f5ede2" }]}>
              <Text>🌟</Text>
            </View>
            <View>
              <Text style={styles.siLabel}>Dil</Text>
              <Text style={styles.siDesc}>Türkçe · English</Text>
            </View>
          </View>
          <Text style={{ fontSize: 13, color: colors.muted }}>Değiştir</Text>
        </View>
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
  groupTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.muted,
    paddingVertical: 4,
    marginTop: 8,
  },
  settingGroup: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    overflow: "hidden",
    marginBottom: 8,
  },
  settingItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
  },
  siLeft: { flexDirection: "row", alignItems: "center", gap: 12, flex: 1 },
  siIcon: {
    width: 32,
    height: 32,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  siLabel: { fontSize: 14, fontWeight: "500", color: colors.fg },
  siDesc: { fontSize: 12, color: colors.muted, marginTop: 1 },
  actionBtn: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    backgroundColor: "#e6f2ed",
  },
});
