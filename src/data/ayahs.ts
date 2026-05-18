export interface Ayah {
  id: string;
  text: string;
  translation: string;
  surah: string;
  ayah: string;
}

export const dailyAyahs: Ayah[] = [
  {
    id: "1",
    text: "إِنَّ اللَّهَ مَعَ الصَّابِرِينَ",
    translation: "Şüphesiz Allah sabredenlerle beraberdir.",
    surah: "Bakara",
    ayah: "153"
  },
  {
    id: "2",
    text: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا",
    translation: "Muhakkak zorlukla beraber bir kolaylık vardır.",
    surah: "İnşirah",
    ayah: "5"
  },
  {
    id: "3",
    text: "رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي",
    translation: "Rabbim! Göğsümü genişlet, işimi kolaylaştır.",
    surah: "Taha",
    ayah: "25-26"
  },
  {
    id: "4",
    text: "وَمَنْ يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ",
    translation: "Kim Allah'a tevekkül ederse, O ona yeter.",
    surah: "Talak",
    ayah: "3"
  },
  {
    id: "5",
    text: "وَرَحْمَتِي وَسِعَتْ كُلَّ شَيْءٍ",
    translation: "Rahmetim her şeyi kuşatmıştır.",
    surah: "A'raf",
    ayah: "156"
  },
  {
    id: "6",
    text: "لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا",
    translation: "Allah hiç kimseye gücünün yeteceğinden başka yüklemez.",
    surah: "Bakara",
    ayah: "286"
  },
  {
    id: "7",
    text: "إِنَّ اللَّهَ لَا يُغَيِّرُ مَا بِقَوْمٍ حَتَّىٰ يُغَيِّرُوا مَا بِأَنْفُسِهِمْ",
    translation: "Bir toplum kendilerindekini değiştirinceye kadar Allah onlarda bir değişiklik yapmaz.",
    surah: "Ra'd",
    ayah: "11"
  },
  {
    id: "8",
    text: "وَلَقَدْ خَلَقْنَا الْإِنْسَانَ وَنَعْلَمُ مَا تُوَسْوِسُ بِهِ نَفْسُهُ",
    translation: "Andolsun insanı biz yarattık ve nefsinin ona ne vesvese verdiğini biliriz.",
    surah: "Kaf",
    ayah: "16"
  },
  {
    id: "9",
    text: "فَاذْكُرُونِي أَذْكُرْكُمْ وَاشْكُرُوا لِي وَلَا تَكْفُرُونِ",
    translation: "Beni anın ki ben de sizi anayım. Bana şükredin, nankörlük etmeyin.",
    surah: "Bakara",
    ayah: "152"
  },
  {
    id: "10",
    text: "إِنَّ رَحْمَتَ اللَّهِ قَرِيبٌ مِنَ الْمُحْسِنِينَ",
    translation: "Şüphesiz Allah'ın rahmeti iyilik yapanlara yakındır.",
    surah: "A'raf",
    ayah: "56"
  },
  {
    id: "11",
    text: "وَمَا أَرْسَلْنَاكَ إِلَّا رَحْمَةً لِلْعَالَمِينَ",
    translation: "Seni ancak âlemlere rahmet olarak gönderdik.",
    surah: "Enbiya",
    ayah: "107"
  },
  {
    id: "12",
    text: "قُلْ يَا عِبَادِيَ الَّذِينَ أَسْرَفُوا عَلَىٰ أَنْفُسِهِمْ لَا تَقْنَطُوا مِنْ رَحْمَةِ اللَّهِ",
    translation: "De ki: Ey kendilerine kötülük edip aşırı giden kullarım! Allah'ın rahmetinden ümit kesmeyin.",
    surah: "Zümer",
    ayah: "53"
  },
  {
    id: "13",
    text: "وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ",
    translation: "Kullarım sana beni sorduğunda, ben şüphesiz onlara yakınım.",
    surah: "Bakara",
    ayah: "186"
  },
  {
    id: "14",
    text: "إِنَّ اللَّهَ يُحِبُّ التَّوَّابِينَ وَيُحِبُّ الْمُتَطَهِّرِينَ",
    translation: "Allah çok tövbe edenleri sever ve temizlenenleri sever.",
    surah: "Bakara",
    ayah: "222"
  },
  {
    id: "15",
    text: "وَقَضَىٰ رَبُّكَ أَلَّا تَعْبُدُوا إِلَّا إِيَّاهُ وَبِالْوَالِدَيْنِ إِحْسَانًا",
    translation: "Rabbin, kendisinden başkasına ibadet etmemenizi ve ana-babaya iyilik etmenizi emretti.",
    surah: "İsra",
    ayah: "23"
  },
];

export function getRandomAyah(): Ayah {
  return dailyAyahs[Math.floor(Math.random() * dailyAyahs.length)];
}
