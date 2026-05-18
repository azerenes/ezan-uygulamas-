import React, { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export interface LocationData {
  city: string;
  district: string;
  lat: number;
  lon: number;
}

interface LocationContextType {
  location: LocationData;
  setLocation: (loc: LocationData) => Promise<void>;
  locations: LocationData[];
}

const defaultLocation: LocationData = {
  city: "İstanbul",
  district: "Fatih",
  lat: 41.01,
  lon: 28.95,
};

const turkishCities: LocationData[] = [
  { city: "İstanbul", district: "Fatih", lat: 41.01, lon: 28.95 },
  { city: "İstanbul", district: "Kadıköy", lat: 40.99, lon: 29.03 },
  { city: "İstanbul", district: "Üsküdar", lat: 41.03, lon: 29.02 },
  { city: "İstanbul", district: "Beşiktaş", lat: 41.08, lon: 29.01 },
  { city: "İstanbul", district: "Başakşehir", lat: 41.08, lon: 28.80 },
  { city: "İstanbul", district: "Maltepe", lat: 40.93, lon: 29.15 },
  { city: "İstanbul", district: "Sarıyer", lat: 41.17, lon: 29.05 },
  { city: "İstanbul", district: "Pendik", lat: 40.88, lon: 29.23 },
  { city: "Ankara", district: "Çankaya", lat: 39.92, lon: 32.85 },
  { city: "Ankara", district: "Keçiören", lat: 39.98, lon: 32.86 },
  { city: "Ankara", district: "Yenimahalle", lat: 39.97, lon: 32.80 },
  { city: "İzmir", district: "Konak", lat: 38.42, lon: 27.14 },
  { city: "İzmir", district: "Karşıyaka", lat: 38.46, lon: 27.10 },
  { city: "İzmir", district: "Bornova", lat: 38.47, lon: 27.22 },
  { city: "Bursa", district: "Osmangazi", lat: 40.19, lon: 29.06 },
  { city: "Bursa", district: "Nilüfer", lat: 40.17, lon: 28.98 },
  { city: "Bursa", district: "Yıldırım", lat: 40.19, lon: 29.12 },
  { city: "Antalya", district: "Muratpaşa", lat: 36.89, lon: 30.71 },
  { city: "Antalya", district: "Konyaaltı", lat: 36.87, lon: 30.63 },
  { city: "Antalya", district: "Alanya", lat: 36.55, lon: 32.00 },
  { city: "Adana", district: "Seyhan", lat: 37.00, lon: 35.32 },
  { city: "Adana", district: "Çukurova", lat: 36.99, lon: 35.25 },
  { city: "Konya", district: "Selçuklu", lat: 37.87, lon: 32.48 },
  { city: "Konya", district: "Meram", lat: 37.84, lon: 32.44 },
  { city: "Gaziantep", district: "Şahinbey", lat: 37.07, lon: 37.38 },
  { city: "Gaziantep", district: "Şehitkamil", lat: 37.08, lon: 37.36 },
  { city: "Mersin", district: "Akdeniz", lat: 36.80, lon: 34.63 },
  { city: "Mersin", district: "Mezitli", lat: 36.75, lon: 34.52 },
  { city: "Samsun", district: "İlkadım", lat: 41.29, lon: 36.33 },
  { city: "Samsun", district: "Atakum", lat: 41.33, lon: 36.28 },
  { city: "Trabzon", district: "Ortahisar", lat: 41.00, lon: 39.72 },
  { city: "Diyarbakır", district: "Kayapınar", lat: 37.91, lon: 40.23 },
  { city: "Kayseri", district: "Kocasinan", lat: 38.72, lon: 35.48 },
  { city: "Kayseri", district: "Melikgazi", lat: 38.75, lon: 35.49 },
  { city: "Eskişehir", district: "Tepebaşı", lat: 39.78, lon: 30.52 },
  { city: "Erzurum", district: "Yakutiye", lat: 39.90, lon: 41.27 },
  { city: "Malatya", district: "Battalgazi", lat: 38.35, lon: 38.31 },
  { city: "Kocaeli", district: "İzmit", lat: 40.77, lon: 29.92 },
  { city: "Kocaeli", district: "Gebze", lat: 40.80, lon: 29.44 },
  { city: "Sakarya", district: "Adapazarı", lat: 40.78, lon: 30.40 },
  { city: "Balıkesir", district: "Altıeylül", lat: 39.65, lon: 27.89 },
  { city: "Balıkesir", district: "Edremit", lat: 39.59, lon: 27.02 },
  { city: "Tekirdağ", district: "Süleymanpaşa", lat: 40.98, lon: 27.51 },
  { city: "Çanakkale", district: "Merkez", lat: 40.16, lon: 26.41 },
  { city: "Muğla", district: "Menteşe", lat: 37.22, lon: 28.37 },
  { city: "Muğla", district: "Fethiye", lat: 36.62, lon: 29.12 },
  { city: "Aydın", district: "Efeler", lat: 37.84, lon: 27.84 },
  { city: "Aydın", district: "Kuşadası", lat: 37.86, lon: 27.26 },
  { city: "Denizli", district: "Pamukkale", lat: 37.78, lon: 29.09 },
  { city: "Hatay", district: "Antakya", lat: 36.20, lon: 36.16 },
  { city: "Hatay", district: "İskenderun", lat: 36.58, lon: 36.17 },
  { city: "Van", district: "İpekyolu", lat: 38.50, lon: 43.37 },
  { city: "Şanlıurfa", district: "Haliliye", lat: 37.16, lon: 38.79 },
  { city: "Elazığ", district: "Merkez", lat: 38.68, lon: 39.22 },
  { city: "Afyon", district: "Merkez", lat: 38.76, lon: 30.54 },
  { city: "Kütahya", district: "Merkez", lat: 39.42, lon: 29.98 },
  { city: "Zonguldak", district: "Merkez", lat: 41.45, lon: 31.79 },
  { city: "Manisa", district: "Yunusemre", lat: 38.61, lon: 27.43 },
  { city: "Edirne", district: "Merkez", lat: 41.68, lon: 26.56 },
];

const LocationContext = createContext<LocationContextType>({
  location: defaultLocation,
  setLocation: async () => {},
  locations: turkishCities,
});

export function LocationProvider({ children }: { children: React.ReactNode }) {
  const [location, setLoc] = useState<LocationData>(defaultLocation);

  useEffect(() => {
    AsyncStorage.getItem("@location").then((val) => {
      if (val) {
        try {
          setLoc(JSON.parse(val));
        } catch {}
      }
    });
  }, []);

  const setLocation = async (loc: LocationData) => {
    setLoc(loc);
    await AsyncStorage.setItem("@location", JSON.stringify(loc));
  };

  return (
    <LocationContext.Provider
      value={{ location, setLocation, locations: turkishCities }}
    >
      {children}
    </LocationContext.Provider>
  );
}

export function useLocation() {
  return useContext(LocationContext);
}
