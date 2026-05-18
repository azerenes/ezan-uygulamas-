export interface PrayerTime {
  name: string;
  arabic: string;
  time: string;
  icon: string;
}

export interface PrayerTimings {
  date: string;
  hijri: string;
  gregorian: string;
  location: string;
  method: string;
  prayers: PrayerTime[];
}

const hijriMonths = [
  "Muharrem", "Safer", "Rebîülevvel", "Rebîülâhir",
  "Cemâziyelevvel", "Cemâziyelâhir", "Receb", "Şaban",
  "Ramazan", "Şevval", "Zilkade", "Zilhicce",
];

function getHijriDate(): string {
  const now = new Date();
  const date = now.getDate();
  const month = now.getMonth();
  const year = now.getFullYear();

  const julianDay = Math.floor(
    1461 * (year + 4800 + (month - 14) / 12) / 4 +
    367 * (month - 2 - 12 * ((month - 14) / 12)) / 12 -
    3 * ((year + 4900 + (month - 14) / 12) / 100) / 4 +
    date - 32075
  );

  const hijriYear = Math.floor((julianDay - 1948440) / 354.367);
  const hijriDay = julianDay - 1948440 - Math.floor(hijriYear * 354.367);
  const hijriMonth = Math.ceil(hijriDay / 29.5);
  const hijriDate = Math.floor(hijriDay - (hijriMonth - 1) * 29.5);

  const monthName = hijriMonths[Math.min(hijriMonth - 1, 11)] || "Şevval";
  return `${hijriDate} ${monthName} ${hijriYear - 579}`;
}

function getGregorianDate(): string {
  const now = new Date();
  const days = [
    "Pazar", "Pazartesi", "Salı", "Çarşamba",
    "Perşembe", "Cuma", "Cumartesi",
  ];
  const months = [
    "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran",
    "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık",
  ];
  return `${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()} ${days[now.getDay()]}`;
}

function calculatePrayerTimes(
  lat: number,
  lon: number,
  date: Date = new Date()
): PrayerTime[] {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const dayOfYear = Math.floor(
    275 * month / 9 - 2 * Math.floor((month + 9) / 12) +
    Math.floor((month + 9) % 12 / 10) * (Math.floor((year - Math.floor(year / 4) * 4 + 4) / 4) - 1) +
    day - 30
  );

  const d = (2 * Math.PI / 365) * dayOfYear;
  const declination = 0.4095 * Math.sin(d - 1.39);

  const latRad = lat * (Math.PI / 180);
  const declRad = declination;

  function hourAngle(altitudeDeg: number): number {
    const sinAlt = Math.sin(altitudeDeg * (Math.PI / 180));
    const cosHa = (sinAlt - Math.sin(latRad) * Math.sin(declRad)) /
      (Math.cos(latRad) * Math.cos(declRad));
    if (cosHa > 1) return 0;
    if (cosHa < -1) return Math.PI;
    return Math.acos(cosHa);
  }

  function toTime(hours: number): string {
    const h = Math.floor(hours);
    const m = Math.round((hours - h) * 60);
    return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}`;
  }

  const timezoneOffset = 3;
  const timeOffset = lon / 15;
  const equation =
    0.0052 * Math.sin(2 * d - 1.43) - 0.0061 * Math.sin(d + 0.34);

  const noonUtc = 12 - timeOffset - equation;

  const sunriseHa = hourAngle(-0.833);
  const sunsetHa = hourAngle(-0.833);
  const fajrHa = hourAngle(-18);
  const ishaHa = hourAngle(-18);

  const asrFactor = 1 / Math.tan(Math.atan(1 + Math.tan(Math.abs(latRad - declRad))));
  const cosAsr = (Math.sin(Math.atan(asrFactor)) - Math.sin(latRad) * Math.sin(declRad)) /
    (Math.cos(latRad) * Math.cos(declRad));
  const asrHa = Math.acos(Math.max(-1, Math.min(1, cosAsr)));

  const fajr = noonUtc - fajrHa * (180 / Math.PI) / 15 + timezoneOffset;
  const sunrise = noonUtc - sunriseHa * (180 / Math.PI) / 15 + timezoneOffset;
  const noon = noonUtc + timezoneOffset;
  const asr = noonUtc + asrHa * (180 / Math.PI) / 15 + timezoneOffset;
  const sunset = noonUtc + sunsetHa * (180 / Math.PI) / 15 + timezoneOffset;
  const isha = noonUtc + ishaHa * (180 / Math.PI) / 15 + timezoneOffset;

  return [
    { name: "İmsak", arabic: "الفجر", time: toTime(fajr), icon: "🌅" },
    { name: "Güneş", arabic: "الشروق", time: toTime(sunrise), icon: "☀" },
    { name: "Öğle", arabic: "الظهر", time: toTime(noon), icon: "☕" },
    { name: "İkindi", arabic: "العصر", time: toTime(asr), icon: "🏙" },
    { name: "Akşam", arabic: "المغرب", time: toTime(sunset), icon: "🌄" },
    { name: "Yatsı", arabic: "العشاء", time: toTime(isha), icon: "🌃" },
  ];
}

export function getPrayerTimes(lat: number, lon: number): PrayerTimings {
  const prayers = calculatePrayerTimes(lat, lon);
  return {
    date: getGregorianDate(),
    hijri: getHijriDate(),
    gregorian: getGregorianDate(),
    location: `${lat.toFixed(2)}, ${lon.toFixed(2)}`,
    method: "Diyanet İşleri Başkanlığı",
    prayers,
  };
}

export function getNextPrayerIndex(prayers: PrayerTime[]): number {
  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  for (let i = 0; i < prayers.length; i++) {
    const [h, m] = prayers[i].time.split(":").map(Number);
    if (h * 60 + m > currentMinutes) return i;
  }
  return 0;
}

export function getCountdownTo(time: string): string {
  const now = new Date();
  const [h, m] = time.split(":").map(Number);
  const target = new Date(now);
  target.setHours(h, m, 0, 0);

  if (target <= now) {
    target.setDate(target.getDate() + 1);
  }

  const diff = target.getTime() - now.getTime();
  const hours = Math.floor(diff / 3600000);
  const mins = Math.floor((diff % 3600000) / 60000);
  const secs = Math.floor((diff % 60000) / 1000);

  return `${hours.toString().padStart(2, "0")}:${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
}
