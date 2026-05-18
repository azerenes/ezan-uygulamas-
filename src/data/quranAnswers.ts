export interface QuranAnswer {
  question: string;
  keywords: string[];
  answer: string;
  surah: string;
  ayah: string;
  arabic: string;
}

export const quranAnswers: QuranAnswer[] = [
  {
    question: "Alkol haram mı?",
    keywords: ["alkol", "içki", "şarap", "hamr", "sarhoş", "içmek", "içecek"],
    answer: "Evet, alkol ve tüm sarhoş edici içecekler Kur'an'da haram kılınmıştır. İçki (hamr) şeytan işi bir pislik olarak nitelendirilmiş ve kesin bir dille yasaklanmıştır.",
    surah: "Maide",
    ayah: "90-91",
    arabic: "يَا أَيُّهَا الَّذِينَ آمَنُوا إِنَّمَا الْخَمْرُ وَالْمَيْسِرُ وَالْأَنْصَابُ وَالْأَزْلَامُ رِجْسٌ مِنْ عَمَلِ الشَّيْطَانِ فَاجْتَنِبُوهُ لَعَلَّكُمْ تُفْلِحُونَ"
  },
  {
    question: "Namaz farz mı?",
    keywords: ["namaz", "salat", "farz", "kıl", "ibadet"],
    answer: "Evet, namaz (salat) her Müslümana farz kılınmıştır. Kur'an'da namazın belirli vakitlerde yerine getirilmesi emredilmiştir.",
    surah: "Nisa",
    ayah: "103",
    arabic: "إِنَّ الصَّلَاةَ كَانَتْ عَلَى الْمُؤْمِنِينَ كِتَابًا مَوْقُوتًا"
  },
  {
    question: "Domuz eti neden haram?",
    keywords: ["domuz", "haram", "et", "yenmez", "hayvan"],
    answer: "Domuz eti Kur'an'da açıkça haram kılınmıştır. Müslümanlara domuz eti, kan, Allah'tan başkası adına kesilen hayvanlar ve ölmüş hayvan eti yasaklanmıştır.",
    surah: "Bakara",
    ayah: "173",
    arabic: "إِنَّمَا حَرَّمَ عَلَيْكُمُ الْمَيْتَةَ وَالدَّمَ وَلَحْمَ الْخِنْزِيرِ وَمَا أُهِلَّ بِهِ لِغَيْرِ اللَّهِ"
  },
  {
    question: "Faiz neden haram?",
    keywords: ["faiz", "riba", "haram", "para", "faizli"],
    answer: "Faiz (riba) Kur'an'da kesin olarak haram kılınmıştır. Allah faizi yasaklamış, ticareti helal kılmıştır.",
    surah: "Bakara",
    ayah: "275-276",
    arabic: "وَأَحَلَّ اللَّهُ الْبَيْعَ وَحَرَّمَ الرِّبَا"
  },
  {
    question: "Oruç farz mı?",
    keywords: ["oruç", "ramazan", "farz", "tutmak"],
    answer: "Evet, Ramazan ayında oruç tutmak her Müslümana farz kılınmıştır. Oruç, Allah'a yakınlaşma ve takva sahibi olma vesilesidir.",
    surah: "Bakara",
    ayah: "183",
    arabic: "يَا أَيُّهَا الَّذِينَ آمَنُوا كُتِبَ عَلَيْكُمُ الصِّيَامُ كَمَا كُتِبَ عَلَى الَّذِينَ مِنْ قَبْلِكُمْ لَعَلَّكُمْ تَتَّقُونَ"
  },
  {
    question: "Zekat nedir?",
    keywords: ["zekat", "vergi", "mal", "fakir", "yardım"],
    answer: "Zekat, İslam'ın beş şartından biridir. Belirli bir miktardaki maldan yılda bir kez verilir ve Kur'an'da sekiz sınıf için belirtilmiştir.",
    surah: "Tevbe",
    ayah: "60",
    arabic: "إِنَّمَا الصَّدَقَاتُ لِلْفُقَرَاءِ وَالْمَسَاكِينِ وَالْعَامِلِينَ عَلَيْهَا"
  },
  {
    question: "Kumar haram mı?",
    keywords: ["kumar", "şans", "bahis", "tombala", "piyango"],
    answer: "Evet, kumar (meysir) Kur'an'da haram kılınmıştır. Kumar şeytan işi bir pisliktir ve Müslümanlardan uzak durması istenmiştir.",
    surah: "Maide",
    ayah: "90",
    arabic: "يَا أَيُّهَا الَّذِينَ آمَنُوا إِنَّمَا الْخَمْرُ وَالْمَيْسِرُ وَالْأَنْصَابُ وَالْأَزْلَامُ رِجْسٌ مِنْ عَمَلِ الشَّيْطَانِ فَاجْتَنِبُوهُ"
  },
  {
    question: "Zina neden haram?",
    keywords: ["zina", "ilişki", "evlilik dışı", "haram", "nikah"],
    answer: "Zina Kur'an'da kesin olarak haram kılınmış ve büyük günahlardan sayılmıştır. Müslümanlar zinaya yaklaşmamakla emrolunmuştur.",
    surah: "İsra",
    ayah: "32",
    arabic: "وَلَا تَقْرَبُوا الزِّنَا ۖ إِنَّهُ كَانَ فَاحِشَةً وَسَاءَ سَبِيلًا"
  },
  {
    question: "Tesettür farz mı?",
    keywords: ["tesettür", "başörtü", "örtü", "hijab", "tesettür"],
    answer: "Evet, Kur'an'da kadın ve erkek için tesettür emredilmiştir. Kadınların başörtüsü ile örtünmesi ve her iki cinsin de iffetli olması emredilmiştir.",
    surah: "Nur",
    ayah: "31",
    arabic: "وَقُلْ لِلْمُؤْمِنَاتِ يَغْضُضْنَ مِنْ أَبْصَارِهِنَّ وَيَحْفَظْنَ فُرُوجَهُنَّ وَلَا يُبْدِينَ زِينَتَهُنَّ"
  },
  {
    question: "Hac farz mı?",
    keywords: ["hac", "kabe", "mekke", "farz", "ziyaret"],
    answer: "Evet, hac gücü yeten her Müslümana ömründe bir kez farz kılınmıştır.",
    surah: "Ali İmran",
    ayah: "97",
    arabic: "وَلِلَّهِ عَلَى النَّاسِ حِجُّ الْبَيْتِ مَنِ اسْتَطَاعَ إِلَيْهِ سَبِيلًا"
  },
  {
    question: "Kuran nedir?",
    keywords: ["kuran", "kitap", "ilahi", "vahiy"],
    answer: "Kur'an, Allah'ın Hz. Muhammed (sav)'e vahyettiği son ilahi kitaptır. Rehber, rahmet ve müjde olarak gönderilmiştir.",
    surah: "Bakara",
    ayah: "185",
    arabic: "شَهْرُ رَمَضَانَ الَّذِي أُنْزِلَ فِيهِ الْقُرْآنُ هُدًى لِلنَّاسِ وَبَيِّنَاتٍ مِنَ الْهُدَىٰ وَالْفُرْقَانِ"
  },
  {
    question: "Yalan haram mı?",
    keywords: ["yalan", "söylemek", "doğru", "yanlış"],
    answer: "Evet, yalan söylemek büyük günahlardandır. Allah doğru sözlü olmayı emreder, yalanı yasaklar.",
    surah: "Hac",
    ayah: "30",
    arabic: "فَاجْتَنِبُوا الرِّجْسَ مِنَ الْأَوْثَانِ وَاجْتَنِبُوا قَوْلَ الزُّورِ"
  },
  {
    question: "Gıybet nedir?",
    keywords: ["gıybet", "dedikodu", "arkadan", "konuşmak"],
    answer: "Gıybet, bir kimsenin arkasından hoşlanmayacağı şekilde konuşmaktır. Kur'an'da ölü kardeşinin etini yemeye benzetilerek şiddetle yasaklanmıştır.",
    surah: "Hucurat",
    ayah: "12",
    arabic: "يَا أَيُّهَا الَّذِينَ آمَنُوا اجْتَنِبُوا كَثِيرًا مِنَ الظَّنِّ إِنَّ بَعْضَ الظَّنِّ إِثْمٌ"
  },
  {
    question: "Kurban kesmek gerekli mi?",
    keywords: ["kurban", "bayram", "kesmek", "hayvan"],
    answer: "Kurban, imkanı olan Müslümanlara sünnet-i müekkededir. Kur'an'da kurban ibadeti emredilmiştir.",
    surah: "Kevser",
    ayah: "2",
    arabic: "فَصَلِّ لِرَبِّكَ وَانْحَرْ"
  },
  {
    question: "İçki haram mı?",
    keywords: ["içki", "alkol", "sarhoş", "içki"],
    answer: "Evet, içki (hamr) Kur'an'da şeytan işi pislik olarak nitelendirilmiş ve kesin olarak haram kılınmıştır.",
    surah: "Maide",
    ayah: "90",
    arabic: "يَا أَيُّهَا الَّذِينَ آمَنُوا إِنَّمَا الْخَمْرُ وَالْمَيْسِرُ وَالْأَنْصَابُ وَالْأَزْلَامُ رِجْسٌ مِنْ عَمَلِ الشَّيْطَانِ"
  },
  {
    question: "Cihad nedir?",
    keywords: ["cihad", "savaş", "cihad"],
    answer: "Cihad, Allah yolunda çaba göstermektir. En büyük cihad nefse karşı yapılanıdır. Kur'an cihadı emretmiştir.",
    surah: "Hac",
    ayah: "78",
    arabic: "وَجَاهِدُوا فِي اللَّهِ حَقَّ جِهَادِهِ"
  },
];

export function findQuranAnswer(question: string): QuranAnswer | null {
  const lower = question.toLowerCase();
  let best: QuranAnswer | null = null;
  let bestScore = 0;

  for (const item of quranAnswers) {
    let score = 0;
    for (const kw of item.keywords) {
      if (lower.includes(kw)) {
        score += 10;
      }
    }
    if (score > bestScore) {
      bestScore = score;
      best = item;
    }
  }

  return best;
}
