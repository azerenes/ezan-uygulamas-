import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Switch,
  Modal,
  FlatList,
} from "react-native";
import { useTheme } from "../context/ThemeContext";
import { useLocation, type LocationData } from "../context/LocationContext";
import {
  requestNotificationPermission,
  schedulePrayerNotifications,
  sendDailyAyahNotification,
} from "../utils/notifications";

export default function SettingsScreen() {
  const { colors, isDark, toggleTheme } = useTheme();
  const { location, setLocation, locations } = useLocation();

  const [ezanNotification, setEzanNotification] = useState(true);
  const [ezanSound, setEzanSound] = useState(true);
  const [reminder, setReminder] = useState(false);
  const [silentMode, setSilentMode] = useState(false);
  const [dailyAyah, setDailyAyah] = useState(false);
  const [showLocationModal, setShowLocationModal] = useState(false);

  const groupedLocations = locations.reduce(
    (acc: Record<string, LocationData[]>, loc) => {
      if (!acc[loc.city]) acc[loc.city] = [];
      acc[loc.city].push(loc);
      return acc;
    },
    {}
  );

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.bg }]}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={[styles.headerTitle, { color: colors.fg }]}>Ayarlar</Text>
        </View>

        <Text style={[styles.groupTitle, { color: colors.muted }]}>BİLDİRİMLER</Text>
        <View style={[styles.settingGroup, { backgroundColor: colors.surface, borderColor: colors.border }]}>
          <SettingRow
            icon="🔔" bg="#e6f2ed"
            label="Ezan Bildirimi"
            desc="Her vakit girdiğinde bildirim gönder"
            value={
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
            }
            colors={colors}
          />
          <SettingRow
            icon="🔊" bg="#f5ede2"
            label="Ezan Sesi"
            desc="Vakit girdiğinde ezan çalsın"
            value={
              <Switch
                value={ezanSound}
                onValueChange={setEzanSound}
                trackColor={{ true: colors.accent }}
              />
            }
            colors={colors}
          />
          <SettingRow
            icon="⏰" bg="#e6ede6"
            label="İhtiyari Bildirimi"
            desc="Namaz vaktinden önce hatırlat"
            value={
              <Switch
                value={reminder}
                onValueChange={setReminder}
                trackColor={{ true: colors.accent }}
              />
            }
            colors={colors}
          />
          <SettingRow
            icon="📳" bg="#f5e6e6"
            label="Sessiz Mod"
            desc="Sadece titreşim ile bildirim"
            value={
              <Switch
                value={silentMode}
                onValueChange={setSilentMode}
                trackColor={{ true: colors.accent }}
              />
            }
            colors={colors}
          />
        </View>

        <Text style={[styles.groupTitle, { color: colors.muted }]}>AYET BİLDİRİMLERİ</Text>
        <View style={[styles.settingGroup, { backgroundColor: colors.surface, borderColor: colors.border }]}>
          <SettingRow
            icon="📖" bg="#e6f2ed"
            label="Günün Ayeti"
            desc="Günde 2 kez ayet bildirimi (09:00 / 21:00)"
            value={
              <Switch
                value={dailyAyah}
                onValueChange={async (v) => {
                  setDailyAyah(v);
                  if (v) {
                    await requestNotificationPermission();
                    await sendDailyAyahNotification();
                  }
                }}
                trackColor={{ true: colors.accent }}
              />
            }
            colors={colors}
          />
        </View>

        <Text style={[styles.groupTitle, { color: colors.muted }]}>KONUM</Text>
        <View style={[styles.settingGroup, { backgroundColor: colors.surface, borderColor: colors.border }]}>
          <TouchableOpacity
            style={styles.settingItem}
            onPress={() => setShowLocationModal(true)}
          >
            <View style={styles.siLeft}>
              <View style={[styles.siIcon, { backgroundColor: "#e6f2ed" }]}>
                <Text>📍</Text>
              </View>
              <View>
                <Text style={[styles.siLabel, { color: colors.fg }]}>Konum</Text>
                <Text style={[styles.siDesc, { color: colors.muted }]}>
                  {location.city}, {location.district}
                </Text>
              </View>
            </View>
            <Text style={{ fontSize: 13, color: colors.accent, fontWeight: "500" }}>
              Değiştir →
            </Text>
          </TouchableOpacity>

          <View style={styles.settingItem}>
            <View style={styles.siLeft}>
              <View style={[styles.siIcon, { backgroundColor: "#f5ede2" }]}>
                <Text>📋</Text>
              </View>
              <View>
                <Text style={[styles.siLabel, { color: colors.fg }]}>Hesaplama Yöntemi</Text>
                <Text style={[styles.siDesc, { color: colors.muted }]}>
                  Diyanet İşleri Başkanlığı
                </Text>
              </View>
            </View>
          </View>
        </View>

        <Text style={[styles.groupTitle, { color: colors.muted }]}>GÖRÜNÜM</Text>
        <View style={[styles.settingGroup, { backgroundColor: colors.surface, borderColor: colors.border }]}>
          <SettingRow
            icon="🌙" bg="#e6f2ed"
            label="Koyu Tema"
            desc="Karanlık tema kullan"
            value={
              <Switch
                value={isDark}
                onValueChange={toggleTheme}
                trackColor={{ true: colors.accent }}
              />
            }
            colors={colors}
          />
          <SettingRow
            icon="🌟" bg="#f5ede2"
            label="Dil"
            desc="Türkçe"
            value={<Text style={{ fontSize: 13, color: colors.accent, fontWeight: "500" }}>Türkçe</Text>}
            colors={colors}
          />
        </View>

        <Modal
          visible={showLocationModal}
          animationType="slide"
          transparent
          onRequestClose={() => setShowLocationModal(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={[styles.modalContent, { backgroundColor: colors.surface }]}>
              <View style={styles.modalHeader}>
                <Text style={[styles.modalTitle, { color: colors.fg }]}>Konum Seç</Text>
                <TouchableOpacity onPress={() => setShowLocationModal(false)}>
                  <Text style={[styles.modalClose, { color: colors.accent }]}>Kapat</Text>
                </TouchableOpacity>
              </View>
              <FlatList
                data={Object.entries(groupedLocations)}
                keyExtractor={(item) => item[0]}
                renderItem={({ item: [city, districts] }) => (
                  <View style={styles.cityGroup}>
                    <Text style={[styles.cityName, { color: colors.accent }]}>{city}</Text>
                    {districts.map((loc, idx) => (
                      <TouchableOpacity
                        key={idx}
                        style={[
                          styles.districtItem,
                          {
                            backgroundColor:
                              loc.city === location.city &&
                              loc.district === location.district
                                ? colors.accent + "18"
                                : "transparent",
                          },
                        ]}
                        onPress={async () => {
                          await setLocation(loc);
                          setShowLocationModal(false);
                        }}
                      >
                        <Text
                          style={[
                            styles.districtText,
                            {
                              color:
                                loc.city === location.city &&
                                loc.district === location.district
                                  ? colors.accent
                                  : colors.fg,
                              fontWeight:
                                loc.city === location.city &&
                                loc.district === location.district
                                  ? "600"
                                  : "400",
                            },
                          ]}
                        >
                          {loc.district}
                        </Text>
                        {loc.city === location.city && loc.district === location.district && (
                          <Text style={{ color: colors.accent, fontSize: 12 }}>✓</Text>
                        )}
                      </TouchableOpacity>
                    ))}
                  </View>
                )}
              />
            </View>
          </View>
        </Modal>
      </View>
    </ScrollView>
  );
}

function SettingRow({
  icon,
  bg,
  label,
  desc,
  value,
  colors,
}: {
  icon: string;
  bg: string;
  label: string;
  desc: string;
  value: React.ReactNode;
  colors: any;
}) {
  return (
    <View style={styles.settingItem}>
      <View style={styles.siLeft}>
        <View style={[styles.siIcon, { backgroundColor: bg }]}>
          <Text>{icon}</Text>
        </View>
        <View>
          <Text style={[styles.siLabel, { color: colors.fg }]}>{label}</Text>
          <Text style={[styles.siDesc, { color: colors.muted }]}>{desc}</Text>
        </View>
      </View>
      {value}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { padding: 16, paddingBottom: 32 },
  header: { flexDirection: "row", alignItems: "center", gap: 12, paddingVertical: 4, marginBottom: 8 },
  headerTitle: { fontSize: 20, fontWeight: "700", flex: 1 },
  groupTitle: { fontSize: 14, fontWeight: "600", paddingVertical: 4, marginTop: 8 },
  settingGroup: { borderRadius: 12, borderWidth: 1, overflow: "hidden", marginBottom: 8 },
  settingItem: {
    flexDirection: "row", alignItems: "center", justifyContent: "space-between",
    padding: 16,
  },
  siLeft: { flexDirection: "row", alignItems: "center", gap: 12, flex: 1 },
  siIcon: { width: 32, height: 32, borderRadius: 8, alignItems: "center", justifyContent: "center" },
  siLabel: { fontSize: 14, fontWeight: "500" },
  siDesc: { fontSize: 12, marginTop: 1 },
  actionBtn: { paddingHorizontal: 12, paddingVertical: 6, borderRadius: 20 },
  modalOverlay: { flex: 1, justifyContent: "flex-end", backgroundColor: "rgba(0,0,0,0.5)" },
  modalContent: { borderTopLeftRadius: 20, borderTopRightRadius: 20, padding: 20, maxHeight: "80%" },
  modalHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 16 },
  modalTitle: { fontSize: 18, fontWeight: "700" },
  modalClose: { fontSize: 15, fontWeight: "500" },
  cityGroup: { marginBottom: 16 },
  cityName: { fontSize: 16, fontWeight: "700", marginBottom: 8, paddingHorizontal: 4 },
  districtItem: {
    flexDirection: "row", justifyContent: "space-between", alignItems: "center",
    paddingVertical: 10, paddingHorizontal: 12, borderRadius: 8, marginBottom: 2,
  },
  districtText: { fontSize: 15 },
});
