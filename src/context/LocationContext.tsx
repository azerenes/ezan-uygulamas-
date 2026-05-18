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
  { city: "Ankara", district: "Çankaya", lat: 39.92, lon: 32.85 },
  { city: "İzmir", district: "Konak", lat: 38.42, lon: 27.14 },
  { city: "Bursa", district: "Osmangazi", lat: 40.19, lon: 29.06 },
  { city: "Antalya", district: "Muratpaşa", lat: 36.89, lon: 30.71 },
  { city: "Adana", district: "Seyhan", lat: 37.00, lon: 35.32 },
  { city: "Konya", district: "Selçuklu", lat: 37.87, lon: 32.48 },
  { city: "Gaziantep", district: "Şahinbey", lat: 37.07, lon: 37.38 },
  { city: "Mersin", district: "Akdeniz", lat: 36.80, lon: 34.63 },
  { city: "Samsun", district: "İlkadım", lat: 41.29, lon: 36.33 },
  { city: "Trabzon", district: "Ortahisar", lat: 41.00, lon: 39.72 },
  { city: "Diyarbakır", district: "Kayapınar", lat: 37.91, lon: 40.23 },
  { city: "Kayseri", district: "Kocasinan", lat: 38.72, lon: 35.48 },
  { city: "Eskişehir", district: "Tepebaşı", lat: 39.78, lon: 30.52 },
  { city: "Erzurum", district: "Yakutiye", lat: 39.90, lon: 41.27 },
  { city: "Malatya", district: "Battalgazi", lat: 38.35, lon: 38.31 },
  { city: "Kocaeli", district: "İzmit", lat: 40.77, lon: 29.92 },
  { city: "Sakarya", district: "Adapazarı", lat: 40.78, lon: 30.40 },
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
