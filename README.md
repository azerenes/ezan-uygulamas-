<p align="center">
  <img src="https://img.icons8.com/fluency/96/null/islam.png" width="80" />
</p>

<h1 align="center">EZANTAKİPPRO</h1>

<p align="center">
  <strong>Modern ve kapsamlı namaz vakti uygulaması</strong>
  <br>
  Ezan vakitleri · Dua kütüphanesi · Tesbih · Kıble pusulası · Kur'an AI
</p>

<p align="center">
  <img src="https://img.shields.io/badge/platform-Android-brightgreen?style=flat-square" />
  <img src="https://img.shields.io/badge/React%20Native-Expo-000?style=flat-square&logo=expo" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript" />
  <img src="https://img.shields.io/badge/license-MIT-blue?style=flat-square" />
</p>

<br>

---

## ✨ Özellikler

| # | Özellik | Açıklama |
|---|---------|----------|
| 🌅 | **Ezan Vakitleri** | Diyanet yöntemiyle hesaplanan 6 vakit. İmsak, Güneş, Öğle, İkindi, Akşam, Yatsı |
| ⏳ | **Canlı Geri Sayım** | Bir sonraki namaz vaktine kalan süre, saniye saniye güncellenir |
| 📖 | **Günün Ayeti** | 153 ayetlik havuzdan her açılışta sıradaki ayet. Ana ekranda görüntülenir |
| 🕋 | **Dualar** | 16 kategoride 85 dua. Arapça metin, Türkçe meali ve kaynağı ile |
| 📿 | **Tesbih** | 5 farklı tesbih sayacı (33/33/33/100/100) |
| 🧭 | **Kıble Pusulası** | Manyetik sensörle gerçek zamanlı kıble yönü. Mekke'ye uzaklık bilgisi |
| 🤖 | **Kur'an AI** | 50+ İslami soruya ayetlerle cevap. Hadis veritabanı desteği (30 hadis) |
| 🔔 | **Akıllı Bildirimler** | Ezan bildirimi, günün ayeti (09:00/21:00), vakit hatırlatıcısı |
| 📍 | **Konum Seçimi** | 25 şehir, 62 ilçe — anlık değiştirme imkanı |
| 🌙 | **Koyu Tema** | Otomatik kaydedilen, gece dostu karanlık tema |

<br>

## 📱 Ekran Görüntüleri

```
┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐
│   Ana Sayfa      │  │   Kıble         │  │   Kur'an AI     │
│                  │  │                 │  │                 │
│  🌅 İmsak 03:52  │  │     🧭          │  │  🤖 Soru Sor    │
│  ☀ Güneş 05:47  │  │   ⬇ Güneydoğu  │  │  ┌───────────┐  │
│  ☕ Öğle  13:04  │  │   147° · 2500km │  │  │ alkol?    │  │
│  🏙 İkindi 16:40 │  │     Kabe'ye     │  │  └───────────┘  │
│  🌄 Akşam 20:06  │  │     doğru       │  │  Hadis: 🔛     │
│  🌃 Yatsı 21:35  │  │                 │  │  [Cevap]        │
└─────────────────┘  └─────────────────┘  └─────────────────┘
```

<br>

## 🚀 Kurulum

### APK (Önerilen)

En güncel APK'yı [buradan indirin](https://expo.dev/accounts/azerenes/projects/ezan-takip/builds/366415e1-4c93-471d-a27f-804ee80c67f3).

> APK'yı telefona yüklemek için Android cihazınızda "Bilinen kaynaklardan uygulama yüklemeye" izin vermeniz gerekebilir.

### Geliştirici

```bash
# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npx expo start

# Web üzerinde test et
npx expo start --web

# APK oluştur (EAS Cloud Build)
npx eas build -p android --profile preview
```

<br>

## 📦 Veritabanı

| Veri | Adet | Detay |
|------|:----:|-------|
| Sureler | 114 | Tüm Kur'an sureleri (isim, Arapça, anlam, ayet sayısı) |
| Ayetler | 153 | Günlük ayet havuzu, her açılışta sıradaki |
| Dualar | 85 | 16 kategoride, Arapça metin + meal + kaynak |
| İslami Sorular | 50+ | Kur'an ve sünnet ışığında cevaplar |
| Hadisler | 30 | Kütüb-i Sitte kaynaklı, açılıp kapanabilir |
| Konumlar | 62 | 25 şehir, her biri 1-3 ilçe |

<br>

## 🔧 Teknik Altyapı

- **Framework:** React Native (Expo SDK 54)
- **Dil:** TypeScript
- **Navigasyon:** @react-navigation (Tab + Stack)
- **Bildirimler:** expo-notifications
- **Sensörler:** expo-sensors (Magnetometer)
- **Depolama:** AsyncStorage
- **Build:** EAS Cloud Build
- **Vakit Hesabı:** Diyanet İşleri Başkanlığı yöntemi (güneş açısı: −18°/−0.833°)

### Mimari

```
src/
├── context/        # ThemeContext, LocationContext
├── data/           # ayahs, duas, prayerTimes, quranAnswers, hadithAnswers, surahs
├── screens/        # Home, PrayerTimes, Dhikr, Dua, Qibla, Settings, QuranScreen
├── navigation/     # AppNavigator (Tab + Stack)
└── utils/          # qibla, notifications, theme
```

<br>

## 👤 Hesap Bilgileri

- **Expo:** azerenes
- **GitHub:** [@azerenes](https://github.com/azerenes)

<br>

## 📄 Lisans

MIT © 2026 — azerenes

<br>

---

<p align="center">
  <sub>EZANTAKİPPRO — İslam'ın ruhunu teknolojiyle buluşturan uygulama</sub>
  <br>
  <sub>Her namaz bir huzur, her dua bir umuttur.</sub>
</p>
