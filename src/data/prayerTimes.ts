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

  const d = (2 * Math.PI / 365) * (day + (month - 1) * 30);
  const declination =
    0.4095 * Math.sin(d - 1.39);
  const timeOffset = lon / 15;
  const equation =
    0.0052 * Math.sin(2 * d - 1.43) - 0.0061 * Math.sin(d + 0.34);

  const latRad = lat * (Math.PI / 180);
  const declRad = declination;

  function hourAngle(angle: number): number {
    const cosHa =
      (Math.sin(angle * (Math.PI / 180)) -
        Math.sin(latRad) * Math.sin(declRad)) /
      (Math.cos(latRad) * Math.cos(declRad));
    if (Math.abs(cosHa) > 1) return 0;
    return Math.acos(cosHa);
  }

  function toTime(hours: number): string {
    const h = Math.floor(hours);
    const m = Math.round((hours - h) * 60);
    return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}`;
  }

  const noon = 12 - timeOffset - equation;
  const sunrise = noon - hourAngle(90.833) * (180 / Math.PI) / 15;
  const sunset = noon + hourAngle(90.833) * (180 / Math.PI) / 15;
  const fajr = noon - hourAngle(108) * (180 / Math.PI) / 15;
  const isha = noon + hourAngle(108) * (180 / Math.PI) / 15;
  const asrFactor = 1 / Math.tan(Math.atan(1 + Math.tan(Math.abs(latRad - declRad))));
  const asr = noon + Math.acos(
    (Math.sin(Math.atan(asrFactor)) - Math.sin(latRad) * Math.sin(declRad)) /
      (Math.cos(latRad) * Math.cos(declRad))
  ) * (180 / Math.PI) / 15;

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
  const cityName = "";
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
