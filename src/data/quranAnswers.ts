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
    keywords: ["alkol", "içki", "şarap", "hamr", "sarhoş", "içecek", "bira", "viski", "votka"],
    answer: "Evet, alkol ve tüm sarhoş edici içecekler Kur'an'da haram kılınmıştır. 'Ey iman edenler! İçki, kumar, dikili taşlar ve fal okları şeytan işi birer pisliktir. Bunlardan uzak durun ki kurtuluşa eresiniz.' buyrulur.",
    surah: "Maide",
    ayah: "90-91",
    arabic: "يَا أَيُّهَا الَّذِينَ آمَنُوا إِنَّمَا الْخَمْرُ وَالْمَيْسِرُ وَالْأَنْصَابُ وَالْأَزْلَامُ رِجْسٌ مِنْ عَمَلِ الشَّيْطَانِ فَاجْتَنِبُوهُ لَعَلَّكُمْ تُفْلِحُونَ"
  },
  {
    question: "Kumar haram mı?",
    keywords: ["kumar", "şans oyunu", "bahis", "tombala", "piyango", "iddaa", "kumarbaz"],
    answer: "Evet, kumar (meysir) Kur'an'da haram kılınmıştır. 'İçki, kumar, dikili taşlar ve fal okları şeytan işi birer pisliktir. Bunlardan uzak durun ki kurtuluşa eresiniz.' buyrulur. Kumar, insanlar arasında düşmanlık ve kin tohumları eker.",
    surah: "Maide",
    ayah: "90-91",
    arabic: "يَا أَيُّهَا الَّذِينَ آمَنُوا إِنَّمَا الْخَمْرُ وَالْمَيْسِرُ وَالْأَنْصَابُ وَالْأَزْلَامُ رِجْسٌ مِنْ عَمَلِ الشَّيْطَانِ فَاجْتَنِبُوهُ لَعَلَّكُمْ تُفْلِحُونَ"
  },
  {
    question: "Domuz eti haram mı?",
    keywords: ["domuz", "domuz eti", "domuz yağı"],
    answer: "Domuz eti Kur'an'da açıkça haram kılınmıştır. Allah Müslümanlara ölmüş hayvan etini, kanı, domuz etini ve Allah'tan başkası adına kesilen hayvanları yasaklamıştır.",
    surah: "Bakara",
    ayah: "173",
    arabic: "إِنَّمَا حَرَّمَ عَلَيْكُمُ الْمَيْتَةَ وَالدَّمَ وَلَحْمَ الْخِنْزِيرِ وَمَا أُهِلَّ بِهِ لِغَيْرِ اللَّهِ"
  },
  {
    question: "Faiz haram mı?",
    keywords: ["faiz", "riba", "faizli", "kredi faizi"],
    answer: "Faiz (riba) Kur'an'da kesin olarak haram kılınmıştır. 'Allah alışverişi helal, faizi haram kılmıştır. Kime Rabbinden bir öğüt gelir de faizden vazgeçerse, geçmişi kendinedir. Onun işi Allah'a kalmıştır.' buyrulur. Faiz yiyenler şeytan çarpmış gibi kalkarlar.",
    surah: "Bakara",
    ayah: "275-276",
    arabic: "وَأَحَلَّ اللَّهُ الْبَيْعَ وَحَرَّمَ الرِّبَا"
  },
  {
    question: "Oruç farz mı?",
    keywords: ["oruç", "ramazan", "oruc", "oruçlu"],
    answer: "Evet, Ramazan ayında oruç tutmak her Müslümana farz kılınmıştır. 'Ey iman edenler! Oruç, sizden öncekilere farz kılındığı gibi size de farz kılındı. Umulur ki korunursunuz.' buyrulur. Oruç, Allah'a yakınlaşma ve takva sahibi olma vesilesidir.",
    surah: "Bakara",
    ayah: "183",
    arabic: "يَا أَيُّهَا الَّذِينَ آمَنُوا كُتِبَ عَلَيْكُمُ الصِّيَامُ كَمَا كُتِبَ عَلَى الَّذِينَ مِنْ قَبْلِكُمْ لَعَلَّكُمْ تَتَّقُونَ"
  },
  {
    question: "Zekat nedir?",
    keywords: ["zekat", "zeket", "mal vergisi"],
    answer: "Zekat, İslam'ın beş şartından biridir. Belirli bir miktardaki maldan yılda bir kez verilir. Kur'an'da zekatın sekiz sınıf için olduğu belirtilmiştir: fakirler, miskinler, zekat toplayanlar, kalpleri ısındırılacak olanlar, köleler, borçlular, Allah yolunda olanlar ve yolcular.",
    surah: "Tevbe",
    ayah: "60",
    arabic: "إِنَّمَا الصَّدَقَاتُ لِلْفُقَرَاءِ وَالْمَسَاكِينِ وَالْعَامِلِينَ عَلَيْهَا"
  },
  {
    question: "Namaz farz mı?",
    keywords: ["namaz", "salat", "namaz kıl"],
    answer: "Evet, namaz (salat) her Müslümana farz kılınmıştır. Kur'an'da 'Şüphesiz namaz, müminler üzerine vakitleri belirlenmiş bir farzdır' buyrulur. Namaz dinin direğidir ve İslam'ın beş şartından biridir.",
    surah: "Nisa",
    ayah: "103",
    arabic: "إِنَّ الصَّلَاةَ كَانَتْ عَلَى الْمُؤْمِنِينَ كِتَابًا مَوْقُوتًا"
  },
  {
    question: "Zina neden haram?",
    keywords: ["zina", "evlilik dışı", "aldatma", "nikahsız ilişki"],
    answer: "Zina Kur'an'da kesin olarak haram kılınmıştır. 'Zinaya yaklaşmayın! Çünkü o, hayâsızlıktır ve çok kötü bir yoldur.' buyrulur. Zina büyük günahlardan sayılır ve Müslümanların kesinlikle uzak durması gerekir.",
    surah: "İsra",
    ayah: "32",
    arabic: "وَلَا تَقْرَبُوا الزِّنَا ۖ إِنَّهُ كَانَ فَاحِشَةً وَسَاءَ سَبِيلًا"
  },
  {
    question: "Tesettür farz mı?",
    keywords: ["tesettür", "başörtü", "örtü", "hijab", "türban", "kapanma"],
    answer: "Evet, Kur'an'da kadın ve erkek için tesettür emredilmiştir. 'Mümin kadınlara söyle, gözlerini haramdan sakınsınlar, iffetlerini korusunlar ve ziynetlerini açığa vurmasınlar. Başörtülerini yakalarının üzerine salsınlar.' buyrulur. Erkekler de gözlerini haramdan sakınmakla emrolunmuştur.",
    surah: "Nur",
    ayah: "31",
    arabic: "وَقُلْ لِلْمُؤْمِنَاتِ يَغْضُضْنَ مِنْ أَبْصَارِهِنَّ وَيَحْفَظْنَ فُرُوجَهُنَّ وَلَا يُبْدِينَ زِينَتَهُنَّ"
  },
  {
    question: "Hac farz mı?",
    keywords: ["hac", "kabe", "mekke", "umre"],
    answer: "Evet, hac gücü yeten her Müslümana ömründe bir kez farz kılınmıştır. 'Gitmeye gücü yetenlerin Kabe'yi haccetmesi, Allah'ın insanlar üzerinde bir hakkıdır.' buyrulur. Hac, İslam'ın beş şartından biridir.",
    surah: "Ali İmran",
    ayah: "97",
    arabic: "وَلِلَّهِ عَلَى النَّاسِ حِجُّ الْبَيْتِ مَنِ اسْتَطَاعَ إِلَيْهِ سَبِيلًا"
  },
  {
    question: "Kuran-ı Kerim nedir?",
    keywords: ["kuran", "mushaf", "kitabullah"],
    answer: "Kur'an-ı Kerim, Allah'ın Cebrail (as) aracılığıyla Hz. Muhammed (sav)'e vahyettiği son ilahi kitaptır. 'Ramazan ayı ki insanlara yol gösterici, doğrunun ve doğruyu eğriden ayırmanın açık delilleri olarak Kur'an indirilmiştir.' buyrulur. İçinde hiçbir çelişki yoktur ve Allah tarafından korunmaktadır.",
    surah: "Bakara",
    ayah: "185",
    arabic: "شَهْرُ رَمَضَانَ الَّذِي أُنْزِلَ فِيهِ الْقُرْآنُ هُدًى لِلنَّاسِ وَبَيِّنَاتٍ مِنَ الْهُدَىٰ وَالْفُرْقَانِ"
  },
  {
    question: "Yalan söylemek haram mı?",
    keywords: ["yalan", "yalancı", "yalan söyle"],
    answer: "Evet, yalan söylemek büyük günahlardandır. 'Batıl sözlerden kaçının' buyrulur. Yalan münafıklık alametidir ve cennete ancak doğru sözlüler girecektir.",
    surah: "Hac",
    ayah: "30",
    arabic: "فَاجْتَنِبُوا الرِّجْسَ مِنَ الْأَوْثَانِ وَاجْتَنِبُوا قَوْلَ الزُّورِ"
  },
  {
    question: "Gıybet nedir?",
    keywords: ["gıybet", "dedikodu", "arkadan konuş"],
    answer: "Gıybet, bir Müslüman kardeşinin arkasından hoşlanmayacağı şeyle anmaktır. Kur'an'da 'Biriniz diğerinizi arkasından çekiştirmesin. Ölü kardeşinin etini yemekten hoşlanır mı?' buyrularak şiddetle yasaklanmıştır. Gıybet büyük günahlardandır.",
    surah: "Hucurat",
    ayah: "12",
    arabic: "يَا أَيُّهَا الَّذِينَ آمَنُوا اجْتَنِبُوا كَثِيرًا مِنَ الظَّنِّ إِنَّ بَعْضَ الظَّنِّ إِثْمٌ"
  },
  {
    question: "Kurban kesmek gerekli mi?",
    keywords: ["kurban", "kurban bayram"],
    answer: "Kurban, imkanı olan Müslümanlara vaciptir (Hanefi'ye göre). Kur'an'da 'Rabbin için namaz kıl ve kurban kes' buyrulmuştur. Kurban Allah'a yakınlaşma vesilesidir ve etinden fakirler de faydalanır.",
    surah: "Kevser",
    ayah: "2",
    arabic: "فَصَلِّ لِرَبِّكَ وَانْحَرْ"
  },
  {
    question: "Cihad nedir?",
    keywords: ["cihad", "cihat", "gazilik"],
    answer: "Cihad, Allah yolunda çaba göstermek, gayret etmektir. En büyük cihad nefse karşı yapılanıdır. 'Allah yolunda hakkıyla cihad edin' buyrulur. Cihad sadece savaş değil, ilimle, malla ve canla Allah yolunda olmaktır.",
    surah: "Hac",
    ayah: "78",
    arabic: "وَجَاهِدُوا فِي اللَّهِ حَقَّ جِهَادِهِ"
  },
  {
    question: "Allah'ın isimleri nelerdir?",
    keywords: ["esma", "allahın ismi", "allahın sıfat"],
    answer: "Allah'ın 99 güzel ismi vardır (Esma-ül Hüsna). 'En güzel isimler Allah'ındır. O'na o isimlerle dua edin' buyrulur. Bunlardan bazıları: Rahman (çok merhametli), Rahim (çok bağışlayıcı), Alim (her şeyi bilen), Kadir (her şeye gücü yeten), Semi (her şeyi işiten), Basir (her şeyi gören), Aziz (güçlü), Hakim (hikmet sahibi).",
    surah: "A'raf",
    ayah: "180",
    arabic: "وَلِلَّهِ الْأَسْمَاءُ الْحُسْنَىٰ فَادْعُوهُ بِهَا"
  },
  {
    question: "Kadın şahitliği hakkında ne deniyor?",
    keywords: ["kadın şahit", "kadının şahitliği"],
    answer: "Kur'an'da borç yazma konusunda iki kadının bir erkeğe bedel olması, o dönemde kadınların ticari işlere yeterince aşina olmaması sebebiyledir. Bu hüküm borç yazma işlemine özeldir. Diğer konularda bir kadının şahitliği bir erkeğin şahitliğine eşittir. Nisa 34'te de aynı prensip görülür.",
    surah: "Bakara",
    ayah: "282",
    arabic: "وَاسْتَشْهِدُوا شَهِيدَيْنِ مِنْ رِجَالِكُمْ فَإِنْ لَمْ يَكُونَا رَجُلَيْنِ فَرَجُلٌ وَامْرَأَتَانِ"
  },
  {
    question: "Evrim teorisi İslam'a uygun mu?",
    keywords: ["evrim", "darwin", "maymun"],
    answer: "Kur'an'a göre insan, Allah tarafından özel bir şekilde yaratılmıştır. 'Andolsun biz insanı kuru bir çamurdan, şekillenmiş bir balçıktan yarattık' buyrulur. Allah Adem'i topraktan yaratmış, sonra ona ruhundan üflemiştir. İnsanın maymundan geldiği görüşü Kur'an öğretisiyle bağdaşmaz.",
    surah: "Hicr",
    ayah: "26",
    arabic: "وَلَقَدْ خَلَقْنَا الْإِنْسَانَ مِنْ صَلْصَالٍ مِنْ حَمَإٍ مَسْنُونٍ"
  },
  {
    question: "Müzik dinlemek günah mı?",
    keywords: ["müzik", "şarkı", "musiki", "enstrüman"],
    answer: "Kur'an'da müzikle ilgili açık bir hüküm bulunmamaktadır. 'İnsanlardan öylesi vardır ki bilgisizce Allah yolundan saptırmak için boş sözleri satın alır' ayeti bazı alimlerce müzikle ilişkilendirilmiştir. Müzik konusunda İslam alimleri farklı görüşlere sahiptir. Önemli olan içeriğin Allah'ı anmaktan alıkoymamasıdır.",
    surah: "Lokman",
    ayah: "6",
    arabic: "وَمِنَ النَّاسِ مَنْ يَشْتَرِي لَهْوَ الْحَدِيثِ لِيُضِلَّ عَنْ سَبِيلِ اللَّهِ"
  },
  {
    question: "Kadın erkek eşit midir?",
    keywords: ["kadın erkek eşit", "cinsiyet eşit"],
    answer: "Kur'an'a göre kadın ve erkek Allah katında eşit değere sahiptir. 'Ey insanlar! Sizi bir tek nefisten yaratan ve ondan eşini yaratan Rabbinize karşı gelmekten sakının' buyrulur. İkisi de aynı nefisten yaratılmıştır. Ancak biyolojik ve sosyal farklılıklar sebebiyle bazı hak ve sorumluluklarda farklılaşma olabilir. Bu farklılık üstünlük değil, uyum içindir. Allah katında en üstün olan en takvalı olandır.",
    surah: "Nisa",
    ayah: "1",
    arabic: "يَا أَيُّهَا النَّاسُ اتَّقُوا رَبَّكُمُ الَّذِي خَلَقَكُمْ مِنْ نَفْسٍ وَاحِدَةٍ"
  },
  {
    question: "İslam'ın şartları nelerdir?",
    keywords: ["islamın şart", "islam şart"],
    answer: "İslam'ın beş şartı vardır: 1) Kelime-i Şehadet getirmek, 2) Namaz kılmak, 3) Oruç tutmak, 4) Zekat vermek, 5) Hacca gitmek. Bunlar İslam'ın temel direkleridir.",
    surah: "Bakara",
    ayah: "177",
    arabic: "لَيْسَ الْبِرَّ أَنْ تُوَلُّوا وُجُوهَكُمْ قِبَلَ الْمَشْرِقِ وَالْمَغْرِبِ وَلَٰكِنَّ الْبِرَّ مَنْ آمَنَ بِاللَّهِ"
  },
  {
    question: "İmanın şartları nelerdir?",
    keywords: ["imanın şart", "iman şart"],
    answer: "İmanın şartı altıdır: 1) Allah'a inanmak, 2) Meleklerine inanmak, 3) Kitaplarına inanmak, 4) Peygamberlerine inanmak, 5) Ahiret gününe inanmak, 6) Kadere (hayır ve şer) inanmak.",
    surah: "Bakara",
    ayah: "285",
    arabic: "آمَنَ الرَّسُولُ بِمَا أُنْزِلَ إِلَيْهِ مِنْ رَبِّهِ وَالْمُؤْمِنُونَ"
  },
  {
    question: "İçki haram mı?",
    keywords: ["içki", "alkol"],
    answer: "Evet, içki (hamr) Kur'an'da haram kılınmıştır. Maide Suresi 90. ayette 'Ey iman edenler! İçki, kumar, dikili taşlar ve fal okları şeytan işi birer pisliktir. Bunlardan uzak durun ki kurtuluşa eresiniz.' buyrulmuştur.",
    surah: "Maide",
    ayah: "90",
    arabic: "يَا أَيُّهَا الَّذِينَ آمَنُوا إِنَّمَا الْخَمْرُ وَالْمَيْسِرُ وَالْأَنْصَابُ وَالْأَزْلَامُ رِجْسٌ مِنْ عَمَلِ الشَّيْطَانِ"
  },
  {
    question: "Hırsızlık haram mı?",
    keywords: ["hırsızlık", "çalmak", "hırsız"],
    answer: "Evet, hırsızlık Kur'an'da haram kılınmıştır ve cezası belirtilmiştir. 'Hırsız erkek ve hırsız kadının, kazandıklarına karşılık Allah'tan bir ceza olarak ellerini kesin' buyrulur. Allah çok bağışlayandır.",
    surah: "Maide",
    ayah: "38",
    arabic: "وَالسَّارِقُ وَالسَّارِقَةُ فَاقْطَعُوا أَيْدِيَهُمَا جَزَاءً بِمَا كَسَبَا"
  },
  {
    question: "Öldürmek haram mı?",
    keywords: ["öldürmek", "cinayet", "adam öldür"],
    answer: "Evet, haksız yere bir insanı öldürmek Kur'an'da en büyük günahlardan sayılmıştır. 'Kim bir insanı, bir can karşılığı veya yeryüzünde bir bozgunculuk olmaksızın öldürürse, bütün insanları öldürmüş gibi olur' buyrulur.",
    surah: "Maide",
    ayah: "32",
    arabic: "مَنْ قَتَلَ نَفْسًا بِغَيْرِ نَفْسٍ أَوْ فَسَادٍ فِي الْأَرْضِ فَكَأَنَّمَا قَتَلَ النَّاسَ جَمِيعًا"
  },
  {
    question: "Kadına şiddet haram mı?",
    keywords: ["kadına şiddet", "şiddet", "kadın döv"],
    answer: "Kur'an kadınlara iyi davranılmasını emreder. 'Onlarla iyi geçinin' ve 'Onları boşasanız bile güzellikle boşayın' buyrulur. Peygamberimiz 'Sizin en hayırlınız, hanımına karşı en iyi davrananınızdır' buyurmuştur. Şiddet asla İslam'ın onayladığı bir davranış değildir.",
    surah: "Nisa",
    ayah: "19",
    arabic: "وَعَاشِرُوهُنَّ بِالْمَعْرُوفِ"
  },
  {
    question: "Rüşvet haram mı?",
    keywords: ["rüşvet", "rüşvetçi"],
    answer: "Evet, rüşvet vermek ve almak Kur'an'da yasaklanmıştır. 'İnsanların mallarından bir kısmını bile bile günah yollarla yemek için rüşvet olarak hakimlere vermeyin' buyrulur. Rüşvet büyük günahlardandır.",
    surah: "Bakara",
    ayah: "188",
    arabic: "وَلَا تَأْكُلُوا أَمْوَالَكُمْ بَيْنَكُمْ بِالْبَاطِلِ وَتُدْلُوا بِهَا إِلَى الْحُكَّامِ"
  },
  {
    question: "Anne babaya nasıl davranmalı?",
    keywords: ["anne baba", "ebeveyn", "ana baba"],
    answer: "Kur'an anne babaya iyilik etmeyi ve onlara saygılı olmayı emreder. 'Rabbin, kendisinden başkasına ibadet etmemenizi ve ana-babaya iyilik etmenizi emretti. Onlardan biri veya ikisi yanında yaşlanırsa, onlara 'öf' bile deme, onları azarlama, ikisine de güzel söz söyle' buyrulur.",
    surah: "İsra",
    ayah: "23",
    arabic: "وَقَضَىٰ رَبُّكَ أَلَّا تَعْبُدُوا إِلَّا إِيَّاهُ وَبِالْوَالِدَيْنِ إِحْسَانًا"
  },
  {
    question: "Yetim hakkı nedir?",
    keywords: ["yetim", "öksüz"],
    answer: "Kur'an yetimlerin hakkının korunmasını emreder. 'Yetim malına, erginlik çağına erişinceye kadar en güzel şeklin dışında yaklaşmayın' buyrulur. Yetim malı yemek büyük günahlardandır.",
    surah: "En'am",
    ayah: "152",
    arabic: "وَلَا تَقْرَبُوا مَالَ الْيَتِيمِ إِلَّا بِالَّتِي هِيَ أَحْسَنُ"
  },
  {
    question: "Kefaret nedir?",
    keywords: ["kefaret", "keffaret"],
    answer: "Kefaret, bir günah veya hata sonucu yapılması gereken ibadet veya davranıştır. Örneğin yemin bozma kefareti: on fakiri doyurmak veya giydirmek ya da bir köle azat etmektir. Oruç kefareti ise 60 gün oruç tutmaktır.",
    surah: "Maide",
    ayah: "89",
    arabic: "لَا يُؤَاخِذُكُمُ اللَّهُ بِاللَّغْوِ فِي أَيْمَانِكُمْ"
  },
  {
    question: "Tövbe nasıl edilir?",
    keywords: ["tövbe", "tewbe", "pişman"],
    answer: "Tövbe, işlenen günahtan pişmanlık duyup Allah'a yönelmektir. 'Ey iman edenler! Allah'a içten bir tövbe ile tövbe edin' buyrulur. Tövbenin üç şartı vardır: 1) Günahı terk etmek, 2) Pişmanlık duymak, 3) Bir daha yapmamaya karar vermek.",
    surah: "Tahrim",
    ayah: "8",
    arabic: "يَا أَيُّهَا الَّذِينَ آمَنُوا تُوبُوا إِلَى اللَّهِ تَوْبَةً نَصُوحًا"
  },
  {
    question: "Kıyamet ne zaman kopacak?",
    keywords: ["kıyamet", "kıyamet ne zaman"],
    answer: "Kıyametin ne zaman kopacağı sadece Allah'ın bilgisindedir. 'Sana kıyameti sorarlar: Ne zaman gelip çatacak? De ki: Onun bilgisi Rabbimin katındadır' buyrulur. Kıyametin alametleri Kur'an'da ve hadislerde bildirilmiştir.",
    surah: "A'raf",
    ayah: "187",
    arabic: "يَسْأَلُونَكَ عَنِ السَّاعَةِ أَيَّانَ مُرْسَاهَا ۖ قُلْ إِنَّمَا عِلْمُهَا عِنْدَ رَبِّي"
  },
  {
    question: "Cennet nasıl bir yerdir?",
    keywords: ["cennet", "cennete gir"],
    answer: "Cennet, müminlere vaat edilen sonsuz nimetler diyarıdır. 'Orada canların çektiği ve gözlerin hoşlandığı her şey vardır' buyrulur. Kur'an'da cennet: altından ırmaklar akan, meyveleri ve gölgeleri sürekli olan, hurilerin ve güzel sarayların bulunduğu bir yer olarak tasvir edilir.",
    surah: "Zuhruf",
    ayah: "71",
    arabic: "فِيهَا مَا تَشْتَهِيهِ الْأَنْفُسُ وَتَلَذُّ الْأَعْيُنُ"
  },
  {
    question: "Cehennem nasıl bir yerdir?",
    keywords: ["cehennem", "cehenneme"],
    answer: "Cehennem, kafirler ve günahkarlar için hazırlanmış şiddetli azap yeridir. Kur'an'da cehennem için 'şiddetli bir azap, kaynar su, irin, karanlık, zincirler ve demir halkalar' tasvirleri vardır. Müminler cehennemden Allah'a sığınmalıdır.",
    surah: "Bakara",
    ayah: "24",
    arabic: "فَاتَّقُوا النَّارَ الَّتِي وَقُودُهَا النَّاسُ وَالْحِجَارَةُ"
  },
];

function wordBoundaryCheck(text: string, keyword: string): boolean {
  const regex = new RegExp(
    "(?:^|[\\s,.;:!?\\-])" +
      keyword.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&") +
      "(?=[\\s,.;:!?\\-]|$)",
    "i"
  );
  return regex.test(text);
}

export function findQuranAnswer(question: string): QuranAnswer | null {
  const lower = question.toLowerCase().trim().replace(/[?.,!]+$/, "");

  let best: QuranAnswer | null = null;
  let bestScore = -1;

  for (const item of quranAnswers) {
    let score = 0;

    for (const kw of item.keywords) {
      if (wordBoundaryCheck(lower, kw)) {
        score += 20;
      }

      if (lower.includes(kw)) {
        score += 10;
      }
    }

    const words = lower.split(/\s+/);
    for (const w of words) {
      if (w.length < 3) continue;
      for (const kw of item.keywords) {
        if (kw.includes(w) && w.length >= kw.length / 2) {
          score += 5;
        }
      }
    }

    if (score > bestScore) {
      bestScore = score;
      best = item;
    }
  }

  if (bestScore <= 0) return null;
  return best;
}

export function suggestQuestions(): string[] {
  return [
    "Kumar haram mı?",
    "Alkol haram mı?",
    "Domuz eti haram mı?",
    "Faiz haram mı?",
    "Namaz farz mı?",
    "Oruç farz mı?",
    "Tesettür farz mı?",
    "İslamın şartları nelerdir?",
    "Kıyamet ne zaman kopacak?",
    "Kadına şiddet haram mı?",
  ];
}
