export function calculateQibla(lat: number, lon: number): number {
  const kaabaLat = 21.4225;
  const kaabaLon = 39.8262;

  const dLon = (kaabaLon - lon) * (Math.PI / 180);
  const lat1 = lat * (Math.PI / 180);
  const lat2 = kaabaLat * (Math.PI / 180);

  const y = Math.sin(dLon);
  const x = Math.cos(lat1) * Math.tan(lat2) - Math.sin(lat1) * Math.cos(dLon);

  let angle = Math.atan2(y, x) * (180 / Math.PI);
  angle = (angle + 360) % 360;

  return angle;
}

export function getQiblaDirection(angle: number): string {
  if (angle >= 337.5 || angle < 22.5) return "Kuzey";
  if (angle >= 22.5 && angle < 67.5) return "Kuzeydoğu";
  if (angle >= 67.5 && angle < 112.5) return "Doğu";
  if (angle >= 112.5 && angle < 157.5) return "Güneydoğu";
  if (angle >= 157.5 && angle < 202.5) return "Güney";
  if (angle >= 202.5 && angle < 247.5) return "Güneybatı";
  if (angle >= 247.5 && angle < 292.5) return "Batı";
  return "Kuzeybatı";
}

export function calculateDistance(lat: number, lon: number): number {
  const kaabaLat = 21.4225;
  const kaabaLon = 39.8262;
  const R = 6371;

  const dLat = (kaabaLat - lat) * (Math.PI / 180);
  const dLon = (kaabaLon - lon) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat * (Math.PI / 180)) *
      Math.cos(kaabaLat * (Math.PI / 180)) *
      Math.sin(dLon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return Math.round(R * c);
}
