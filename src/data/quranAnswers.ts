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
    keywords: ["alkol", "içki", "şarap", "hamr", "sarhoş", "içmek", "içecek", "bira", "viski", "votka", "şişe"],
    answer: "Evet, alkol ve tüm sarhoş edici içecekler Kur'an'da haram kılınmıştır. İçki (hamr) şeytan işi bir pislik olarak nitelendirilmiş ve kesin bir dille yasaklanmıştır. Ayette 'artık bunlardan uzak durun ki kurtuluşa eresiniz' buyrulur.",
    surah: "Maide",
    ayah: "90-91",
    arabic: "يَا أَيُّهَا الَّذِينَ آمَنُوا إِنَّمَا الْخَمْرُ وَالْمَيْسِرُ وَالْأَنْصَابُ وَالْأَزْلَامُ رِجْسٌ مِنْ عَمَلِ الشَّيْطَانِ فَاجْتَنِبُوهُ لَعَلَّكُمْ تُفْلِحُونَ"
  },
  {
    question: "Namaz farz mı?",
    keywords: ["namaz", "salat", "farz", "kıl", "ibadet", "namaz kıl"],
    answer: "Evet, namaz (salat) her Müslümana farz kılınmıştır. Kur'an'da namazın belirli vakitlerde yerine getirilmesi emredilmiştir. Namaz dinin direğidir ve müminler üzerine vakitleri belirlenmiş bir farzdır.",
    surah: "Nisa",
    ayah: "103",
    arabic: "إِنَّ الصَّلَاةَ كَانَتْ عَلَى الْمُؤْمِنِينَ كِتَابًا مَوْقُوتًا"
  },
  {
    question: "Domuz eti haram mı?",
    keywords: ["domuz", "haram", "et", "yenmez", "hayvan", "domuz eti"],
    answer: "Domuz eti Kur'an'da açıkça haram kılınmıştır. Müslümanlara domuz eti, kan, Allah'tan başkası adına kesilen hayvanlar ve ölmüş hayvan eti yasaklanmıştır.",
    surah: "Bakara",
    ayah: "173",
    arabic: "إِنَّمَا حَرَّمَ عَلَيْكُمُ الْمَيْتَةَ وَالدَّمَ وَلَحْمَ الْخِنْزِيرِ وَمَا أُهِلَّ بِهِ لِغَيْرِ اللَّهِ"
  },
  {
    question: "Faiz haram mı?",
    keywords: ["faiz", "riba", "para", "faizli", "kredi", "faiz almak"],
    answer: "Faiz (riba) Kur'an'da kesin olarak haram kılınmıştır. Allah faizi yasaklamış, ticareti helal kılmıştır. Faiz yiyenler, şeytan çarpmış gibi kalkarlar.",
    surah: "Bakara",
    ayah: "275-276",
    arabic: "وَأَحَلَّ اللَّهُ الْبَيْعَ وَحَرَّمَ الرِّبَا"
  },
  {
    question: "Oruç farz mı?",
    keywords: ["oruç", "ramazan", "tutmak", "oruçlu"],
    answer: "Evet, Ramazan ayında oruç tutmak her Müslümana farz kılınmıştır. Oruç, Allah'a yakınlaşma ve takva sahibi olma vesilesidir. Kur'an'da 'Oruç sizden öncekilere farz kılındığı gibi size de farz kılındı' buyrulur.",
    surah: "Bakara",
    ayah: "183",
    arabic: "يَا أَيُّهَا الَّذِينَ آمَنُوا كُتِبَ عَلَيْكُمُ الصِّيَامُ كَمَا كُتِبَ عَلَى الَّذِينَ مِنْ قَبْلِكُمْ لَعَلَّكُمْ تَتَّقُونَ"
  },
  {
    question: "Zekat nedir?",
    keywords: ["zekat", "vergi", "mal", "fakir", "yardım", "sadaka"],
    answer: "Zekat, İslam'ın beş şartından biridir. Belirli bir miktardaki maldan yılda bir kez verilir. Kur'an'da zekatın sekiz sınıf için olduğu belirtilmiştir: fakirler, miskinler, zekat toplayanlar, kalpleri ısındırılacak olanlar, köleler, borçlular, Allah yolunda olanlar ve yolcular.",
    surah: "Tevbe",
    ayah: "60",
    arabic: "إِنَّمَا الصَّدَقَاتُ لِلْفُقَرَاءِ وَالْمَسَاكِينِ وَالْعَامِلِينَ عَلَيْهَا"
  },
  {
    question: "Kumar haram mı?",
    keywords: ["kumar", "şans", "bahis", "tombala", "piyango", "iddaa"],
    answer: "Evet, kumar (meysir) Kur'an'da haram kılınmıştır. Kumar şeytan işi bir pisliktir ve Müslümanlardan uzak durması istenmiştir. Kumar, içki ve fal okları şeytanın pis işlerindendir.",
    surah: "Maide",
    ayah: "90",
    arabic: "يَا أَيُّهَا الَّذِينَ آمَنُوا إِنَّمَا الْخَمْرُ وَالْمَيْسِرُ وَالْأَنْصَابُ وَالْأَزْلَامُ رِجْسٌ مِنْ عَمَلِ الشَّيْطَانِ فَاجْتَنِبُوهُ"
  },
  {
    question: "Zina haram mı?",
    keywords: ["zina", "ilişki", "evlilik dışı", "nikah", "aldatma", "haram ilişki"],
    answer: "Zina Kur'an'da kesin olarak haram kılınmış ve büyük günahlardan sayılmıştır. Müslümanlar zinaya yaklaşmamakla emrolunmuştur. 'Zinaya yaklaşmayın, çünkü o hayasızlıktır ve kötü bir yoldur' buyrulur.",
    surah: "İsra",
    ayah: "32",
    arabic: "وَلَا تَقْرَبُوا الزِّنَا ۖ إِنَّهُ كَانَ فَاحِشَةً وَسَاءَ سَبِيلًا"
  },
  {
    question: "Tesettür farz mı?",
    keywords: ["tesettür", "başörtü", "örtü", "hijab", "türban", "kapanmak"],
    answer: "Evet, Kur'an'da kadın ve erkek için tesettür emredilmiştir. Kadınların başörtüsü ile örtünmesi, ziynetlerini göstermemeleri ve her iki cinsin de iffetli olması emredilmiştir. Erkekler de gözlerini haramdan sakınmakla emrolunmuştur.",
    surah: "Nur",
    ayah: "31",
    arabic: "وَقُلْ لِلْمُؤْمِنَاتِ يَغْضُضْنَ مِنْ أَبْصَارِهِنَّ وَيَحْفَظْنَ فُرُوجَهُنَّ وَلَا يُبْدِينَ زِينَتَهُنَّ"
  },
  {
    question: "Hac farz mı?",
    keywords: ["hac", "kabe", "mekke", "ziyaret", "umre"],
    answer: "Evet, hac gücü yeten her Müslümana ömründe bir kez farz kılınmıştır. Allah'a karşı görevlerini yerine getiren kimseler için Kabe'yi ziyaret etmek Allah'ın bir emridir.",
    surah: "Ali İmran",
    ayah: "97",
    arabic: "وَلِلَّهِ عَلَى النَّاسِ حِجُّ الْبَيْتِ مَنِ اسْتَطَاعَ إِلَيْهِ سَبِيلًا"
  },
  {
    question: "Kuran nedir?",
    keywords: ["kuran", "kitap", "ilahi", "vahiy", "kuran-ı kerim", "mushaf"],
    answer: "Kur'an-ı Kerim, Allah'ın Cebrail (as) aracılığıyla Hz. Muhammed (sav)'e vahyettiği son ilahi kitaptır. İnsanlık için bir rehber, rahmet ve müjde olarak gönderilmiştir. İçinde hiçbir çelişki yoktur ve Allah tarafından korunmaktadır.",
    surah: "Bakara",
    ayah: "185",
    arabic: "شَهْرُ رَمَضَانَ الَّذِي أُنْزِلَ فِيهِ الْقُرْآنُ هُدًى لِلنَّاسِ وَبَيِّنَاتٍ مِنَ الْهُدَىٰ وَالْفُرْقَانِ"
  },
  {
    question: "Yalan haram mı?",
    keywords: ["yalan", "söylemek", "doğru", "yanlış", "yalancı"],
    answer: "Evet, yalan söylemek büyük günahlardandır ve münafıklık alametidir. Allah doğru sözlü olmayı emreder, yalanı ve yalancı şahitliği yasaklar. Cennete ancak doğru sözlüler girecektir.",
    surah: "Hac",
    ayah: "30",
    arabic: "فَاجْتَنِبُوا الرِّجْسَ مِنَ الْأَوْثَانِ وَاجْتَنِبُوا قَوْلَ الزُّورِ"
  },
  {
    question: "Gıybet nedir?",
    keywords: ["gıybet", "dedikodu", "arkadan konuşmak", "çekiştirmek", "gıybet etmek"],
    answer: "Gıybet, bir Müslüman kardeşinin arkasından hoşlanmayacağı şekilde konuşmaktır. Kur'an'da bu davranış 'ölü kardeşinin etini yemek' olarak nitelendirilerek şiddetle yasaklanmıştır. Gıybet büyük günahlardandır.",
    surah: "Hucurat",
    ayah: "12",
    arabic: "يَا أَيُّهَا الَّذِينَ آمَنُوا اجْتَنِبُوا كَثِيرًا مِنَ الظَّنِّ إِنَّ بَعْضَ الظَّنِّ إِثْمٌ"
  },
  {
    question: "Kurban kesmek gerekli mi?",
    keywords: ["kurban", "bayram", "kesmek", "hayvan"],
    answer: "Kurban, imkanı olan Müslümanlara vaciptir (Hanefi'ye göre). Kur'an'da 'Rabbin için namaz kıl ve kurban kes' buyrulmuştur. Kurban Allah'a yakınlaşma vesilesidir.",
    surah: "Kevser",
    ayah: "2",
    arabic: "فَصَلِّ لِرَبِّكَ وَانْحَرْ"
  },
  {
    question: "Cihad nedir?",
    keywords: ["cihad", "savaş", "gayret", "mücadele"],
    answer: "Cihad, Allah yolunda çaba göstermek, gayret etmektir. En büyük cihad nefse karşı yapılanıdır. Kur'an müminleri Allah yolunda cihada çağırır. Cihad sadece savaş değil, ilimle, malla ve canla Allah yolunda olmaktır.",
    surah: "Hac",
    ayah: "78",
    arabic: "وَجَاهِدُوا فِي اللَّهِ حَقَّ جِهَادِهِ"
  },
  {
    question: "Allah'ın sıfatları nelerdir?",
    keywords: ["allah", "sıfat", "esma", "allahın sıfatları", "isim"],
    answer: "Allah'ın birçok güzel ismi ve sıfatı vardır (Esma-ül Hüsna). Kur'an'da 'En güzel isimler Allah'ındır, O'na o isimlerle dua edin' buyrulur. Allah'ın sıfatlarından bazıları: Rahman (çok merhametli), Rahim (çok bağışlayıcı), Alim (her şeyi bilen), Kadir (her şeye gücü yeten), Semi (işiten), Basir (gören).",
    surah: "A'raf",
    ayah: "180",
    arabic: "وَلِلَّهِ الْأَسْمَاءُ الْحُسْنَىٰ فَادْعُوهُ بِهَا"
  },
  {
    question: "Kadınların şahitliği erkeklerin yarısı mı?",
    keywords: ["şahit", "kadın", "şahitlik", "şahid"],
    answer: "Kur'an'da borç yazma konusunda iki kadının bir erkeğe bedel olması, o dönemde kadınların ticari işlere yeterince aşina olmaması sebebiyledir. Bu hüküm borç yazma işlemine özeldir, genel bir şahitlik hükmü değildir. Diğer konularda bir kadının şahitliği bir erkeğin şahitliğine eşittir.",
    surah: "Bakara",
    ayah: "282",
    arabic: "وَاسْتَشْهِدُوا شَهِيدَيْنِ مِنْ رِجَالِكُمْ فَإِنْ لَمْ يَكُونَا رَجُلَيْنِ فَرَجُلٌ وَامْرَأَتَانِ"
  },
  {
    question: "Evrim teorisi İslam'a uygun mu?",
    keywords: ["evrim", "teori", "darwin", "maymun", "insanın yaratılışı"],
    answer: "Kur'an'a göre insan, Allah tarafından özel bir şekilde yaratılmıştır. Allah Adem'i topraktan yaratmış, sonra ona ruhundan üflemiştir. İnsanın bir maymundan geldiği görüşü Kur'an öğretisiyle bağdaşmaz. Ancak diğer canlılar arasında türlerin çeşitlenmesi Allah'ın yaratma sisteminin bir parçası olarak görülebilir.",
    surah: "Hicr",
    ayah: "26",
    arabic: "وَلَقَدْ خَلَقْنَا الْإِنْسَانَ مِنْ صَلْصَالٍ مِنْ حَمَإٍ مَسْنُونٍ"
  },
  {
    question: "Müzik haram mı?",
    keywords: ["müzik", "şarkı", "musiki", "çalgı", "enstrüman"],
    answer: "Kur'an'da müzik aletleriyle ilgili açık bir hüküm bulunmamaktadır. Ancak boş sözlerden (lehve'l hadis) bahseden ayet bazı alimler tarafından müzikle ilişkilendirilmiştir. Müzik konusunda İslam alimleri arasında farklı görüşler bulunmaktadır; bazıları helal, bazıları haram saymıştır.",
    surah: "Lokman",
    ayah: "6",
    arabic: "وَمِنَ النَّاسِ مَنْ يَشْتَرِي لَهْوَ الْحَدِيثِ لِيُضِلَّ عَنْ سَبِيلِ اللَّهِ"
  },
  {
    question: "Kadın erkek eşit midir?",
    keywords: ["kadın erkek", "eşitlik", "cinsiyet", "kadın hakları"],
    answer: "Kur'an'a göre kadın ve erkek Allah katında eşit değere sahiptir. İkisi de aynı nefisten yaratılmıştır ve yaptıkları iyiliklere karşılık aynı ödülü alırlar. Ancak biyolojik ve sosyal farklılıklar sebebiyle bazı hak ve sorumluluklarda farklılaşma olabilir. Bu farklılık üstünlük değil, uyum içindir.",
    surah: "Nisa",
    ayah: "1",
    arabic: "يَا أَيُّهَا النَّاسُ اتَّقُوا رَبَّكُمُ الَّذِي خَلَقَكُمْ مِنْ نَفْسٍ وَاحِدَةٍ"
  },
];

export function findQuranAnswer(question: string): QuranAnswer | null {
  const lower = question.toLowerCase().replace(/[?.,!]/g, "");

  let best: QuranAnswer | null = null;
  let bestScore = 0;

  for (const item of quranAnswers) {
    let score = 0;
    for (const kw of item.keywords) {
      if (lower.includes(kw)) {
        score += 10;
      }
    }

    const words = lower.split(/\s+/);
    for (const w of words) {
      if (w.length > 2) {
        for (const kw of item.keywords) {
          if (kw.includes(w) || w.includes(kw)) {
            score += 3;
          }
        }
      }
    }

    if (score > bestScore) {
      bestScore = score;
      best = item;
    }
  }

  if (bestScore === 0) return null;
  return best;
}

export function suggestQuestions(): string[] {
  return [
    "Alkol haram mı?",
    "Namaz farz mı?",
    "Faiz haram mı?",
    "Domuz eti neden haram?",
    "Kadın erkek eşit midir?",
    "Müzik haram mı?",
    "Evrim İslam'a uygun mu?",
    "Gıybet nedir?",
  ];
}
