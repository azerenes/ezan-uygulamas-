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

export const prayerTimesData: PrayerTimings = {
  date: "2026-05-18",
  hijri: "29 Şevval 1447",
  gregorian: "18 Mayıs 2026 Pazartesi",
  location: "İstanbul, Fatih",
  method: "Diyanet İşleri Başkanlığı",
  prayers: [
    { name: "İmsak / Sabah", arabic: "الفجر", time: "04:12", icon: "🌅" },
    { name: "Güneş", arabic: "الشروق", time: "05:47", icon: "☀" },
    { name: "Öğle", arabic: "الظهر", time: "12:58", icon: "☕" },
    { name: "İkindi", arabic: "العصر", time: "16:40", icon: "🏙" },
    { name: "Akşam", arabic: "المغرب", time: "20:06", icon: "🌄" },
    { name: "Yatsı", arabic: "العشاء", time: "21:35", icon: "🌃" },
  ],
};

export function getNextPrayer(prayers: PrayerTime[]): { index: number; prayer: PrayerTime } | null {
  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  for (let i = 0; i < prayers.length; i++) {
    const [h, m] = prayers[i].time.split(":").map(Number);
    const prayerMinutes = h * 60 + m;
    if (prayerMinutes > currentMinutes) {
      return { index: i, prayer: prayers[i] };
    }
  }
  return null;
}

export function getCountdown(time: string): string {
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
