import { hadithAnswers } from "./hadithAnswers";

export interface QuranAnswer {
  question: string;
  keywords: string[];
  answer: string;
  surah: string;
  ayah?: string;
  arabic: string;
}

interface Fallback {
  keywords: string[];
  answer: string;
  surah: string;
  ayah: string;
  arabic: string;
}

const fallbackAnswers: Fallback[] = [
  {
    keywords: ["helal", "helal mi", "caiz mi"],
    answer: "İslam'da helal ve haram Allah tarafından belirlenmiştir. 'Ey iman edenler! Allah'ın size helal kıldığı temiz şeyleri haram etmeyin ve sınırı aşmayın. Allah sınırı aşanları sevmez.' buyrulur. Bir şeyin helal veya haram olduğunu öğrenmek için Kur'an ve sünnete başvurmak gerekir. Şüpheli şeylerden kaçınmak takva sahiplerinin yoludur.",
    surah: "Maide",
    ayah: "87",
    arabic: "يَا أَيُّهَا الَّذِينَ آمَنُوا لَا تُحَرِّمُوا طَيِّبَاتِ مَا أَحَلَّ اللَّهُ لَكُمْ وَلَا تَعْتَدُوا"
  },
  {
    keywords: ["günah", "büyük günah", "küçük günah"],
    answer: "Günah, Allah'ın emir ve yasaklarına aykırı davranmaktır. 'Kim bir kötülük yapar veya kendine zulmeder, sonra da Allah'tan bağışlanma dilerse, Allah'ı çok bağışlayıcı ve merhametli bulur.' buyrulur. Büyük günahlar (kebair) Kur'an'da özellikle uyarılan günahlardır: şirk, adam öldürme, zina, hırsızlık, yalan, faiz gibi. Küçük günahlar ise tövbe ve iyi amellerle affolunabilir.",
    surah: "Nisa",
    ayah: "110",
    arabic: "وَمَنْ يَعْمَلْ سُوءًا أَوْ يَظْلِمْ نَفْسَهُ ثُمَّ يَسْتَغْفِرِ اللَّهَ يَجِدِ اللَّهَ غَفُورًا رَحِيمًا"
  },
  {
    keywords: ["ibadet", "ibadet etmek"],
    answer: "İbadet, Allah'a kulluk etmek ve O'nun rızasını kazanmak için yapılan her türlü güzel davranıştır. 'Ben cinleri ve insanları ancak bana ibadet etsinler diye yarattım' buyrulur. Namaz, oruç, zekat, hac gibi farz ibadetlerin yanında, dua, zikir, sadaka ve güzel ahlak da ibadettir. İbadetler Allah'a yakınlaşma vesilesidir.",
    surah: "Zariyat",
    ayah: "56",
    arabic: "وَمَا خَلَقْتُ الْجِنَّ وَالْإِنْسَ إِلَّا لِيَعْبُدُونِ"
  },
  {
    keywords: ["ölüm", "ölmek", "ahiret", "kabir"],
    answer: "Ölüm bir son değil, ahiret hayatının başlangıcıdır. 'Her nefis ölümü tadacaktır. Sonra bize döndürüleceksiniz' buyrulur. Kabir hayatı (berzah) ile başlayan ahiret süreci, mahşer, hesap, cennet ve cehennemi kapsar. Mümin için ölüm, Rabbine kavuşma vesilesidir. Peygamberimiz 'Kabir, ahiretin ilk durağıdır' buyurmuştur. Ölümü çok anmak ve ona hazırlıklı olmak tavsiye edilmiştir.",
    surah: "Mülk",
    ayah: "2",
    arabic: "الَّذِي خَلَقَ الْمَوْتَ وَالْحَيَاةَ لِيَبْلُوَكُمْ أَيُّكُمْ أَحْسَنُ عَمَلًا"
  },
  {
    keywords: ["sabır", "sabretmek"],
    answer: "Sabır, İslam'da en değerli erdemlerdendir. 'Ey iman edenler! Sabredin, sabırda yarışın, nöbet tutun ve Allah'tan korkun ki kurtuluşa eresiniz' buyrulur. Kur'an'da 'Allah sabredenlerle beraberdir' ve 'Muhakkak zorlukla beraber bir kolaylık vardır' müjdesi verilir. Sabır: musibetlere karşı, ibadete devamda ve günahlardan kaçınmakta olmak üzere üç kısımdır.",
    surah: "Ali İmran",
    ayah: "200",
    arabic: "يَا أَيُّهَا الَّذِينَ آمَنُوا اصْبِرُوا وَصَابِرُوا وَرَابِطُوا وَاتَّقُوا اللَّهَ لَعَلَّكُمْ تُفْلِحُونَ"
  },
  {
    keywords: ["şükür", "şükretmek"],
    answer: "Şükür, Allah'ın verdiği nimetlere karşı kalp, dil ve organlarla teşekkür etmektir. 'Andolsun, şükrederseniz artırırım. Nankörlük ederseniz azabım şiddetlidir' buyrulur. Şükür: nimeti vereni tanımak, nimeti O'ndan bilmek ve nimeti O'nun rızası doğrultusunda kullanmaktır. Şükredenlere Allah daha fazlasını vaat eder.",
    surah: "İbrahim",
    ayah: "7",
    arabic: "لَئِنْ شَكَرْتُمْ لَأَزِيدَنَّكُمْ"
  },
  {
    keywords: ["dua", "dua etmek"],
    answer: "Dua, kulun Allah'a yalvarması, O'ndan istemesidir. 'Bana dua edin, size cevap vereyim' buyrulur. Dua ibadetin özüdür. Duanın kabul olması için: helal yemek, içtenlikle yalvarmak, ısrarla istemek, hayırlı şeyler dilemek gerekir. Peygamberimiz 'Dua, müminin silahıdır' buyurmuştur. Dua, Allah ile kul arasındaki en güçlü bağdır.",
    surah: "Mümin",
    ayah: "60",
    arabic: "وَقَالَ رَبُّكُمُ ادْعُونِي أَسْتَجِبْ لَكُمْ"
  },
  {
    keywords: ["adalet", "adil", "doğruluk"],
    answer: "Adalet, İslam'ın temel prensiplerindendir. 'Şüphesiz Allah size adaleti, iyiliği ve akrabaya vermeyi emreder' buyrulur. 'Bir topluluğa olan kininiz sizi adaletsizliğe sürüklemesin. Adil olun ki bu takvaya en yakın olandır.' Adalet, herkese hakkını vermek, ölçülü ve dengeli olmaktır. Allah adaletli olanları sever.",
    surah: "Nahl",
    ayah: "90",
    arabic: "إِنَّ اللَّهَ يَأْمُرُ بِالْعَدْلِ وَالْإِحْسَانِ"
  },
  {
    keywords: ["merhamet", "yardım", "iyilik"],
    answer: "Merhamet ve yardımlaşma İslam ahlakının temelidir. 'Kim bir iyiliğe aracılık ederse, ondan kendisine bir pay vardır' buyrulur. 'Komşusu açken tok yatan bizden değildir' hadisi müminlerin birbirine karşı sorumluluğunu anlatır. Sadaka, zekat, infak gibi yardım türleri Kur'an'da emredilmiştir. Allah merhamet edenleri sever.",
    surah: "Maide",
    ayah: "2",
    arabic: "وَتَعَاوَنُوا عَلَى الْبِرِّ وَالتَّقْوَىٰ وَلَا تَعَاوَنُوا عَلَى الْإِثْمِ وَالْعُدْوَانِ"
  },
  {
    keywords: ["tövbe", "tewbe", "af", "bağışlanma"],
    answer: "Tövbe, işlenen günahtan pişmanlık duyup bir daha yapmamaya karar vererek Allah'a yönelmektir. 'Ey iman edenler! Allah'a içten bir tövbe ile tövbe edin' buyrulur. Tövbenin şartları: günahı hemen bırakmak, pişmanlık duymak, bir daha yapmamaya niyet etmek, kul hakkı varsa helalleşmek. Allah tövbe edenleri çok sever ve günahları bağışlar.",
    surah: "Tahrim",
    ayah: "8",
    arabic: "يَا أَيُّهَا الَّذِينَ آمَنُوا تُوبُوا إِلَى اللَّهِ تَوْبَةً نَصُوحًا"
  },
  {
    keywords: ["imtihan", "sınav", "belalar"],
    answer: "Dünya hayatı bir imtihandır. 'Andolsun ki sizi biraz korku, biraz açlık, biraz da mallardan, canlardan ve ürünlerden eksiltmekle deneriz. Sabredenleri müjdele' buyrulur. Belalar ve musibetler günahlara kefaret olabilir, sabredenlerin derecesi yükselir. Mümin başına gelen her şeyde bir hayır olduğunu bilir. Allah hiç kimseye gücünün üstünde yük yüklemez.",
    surah: "Bakara",
    ayah: "155",
    arabic: "وَلَنَبْلُوَنَّكُمْ بِشَيْءٍ مِنَ الْخَوْفِ وَالْجُوعِ"
  },
  {
    keywords: ["peygamber", "resul", "nebi"],
    answer: "Peygamberler, Allah'ın insanlara yol göstermek için seçtiği elçilerdir. 'Andolsun, her ümmete 'Allah'a kulluk edin ve tağuttan kaçının' diyen bir peygamber gönderdik' buyrulur. Kur'an'da 25 peygamberin adı geçer. İlk peygamber Hz. Adem, son peygamber Hz. Muhammed'dir (sav). Peygamberlere iman imanın şartlarındandır. Peygamberler günahsızdır (ismet sıfatı) ve en güzel ahlaka sahiptir.",
    surah: "Nahl",
    ayah: "36",
    arabic: "وَلَقَدْ بَعَثْنَا فِي كُلِّ أُمَّةٍ رَسُولًا"
  },
  {
    keywords: ["melek", "meleklere iman"],
    answer: "Melekler, Allah'ın nurdan yarattığı varlıklardır. 'Peygamber ve beraberindeki müminler, Rabbine ve meleklerine, kitaplarına ve peygamberlerine iman ettiler' buyrulur. Dört büyük melek: Cebrail (vahiy), Mikail (rızık), İsrafil (sur), Azrail (ölüm). Melekler sürekli Allah'a ibadet eder, insanların amellerini kaydeder ve dua ederler. Meleklere iman imanın şartıdır.",
    surah: "Bakara",
    ayah: "285",
    arabic: "آمَنَ الرَّسُولُ بِمَا أُنْزِلَ إِلَيْهِ مِنْ رَبِّهِ وَالْمُؤْمِنُونَ"
  },
  {
    keywords: ["kader", "kadere iman"],
    answer: "Kader, Allah'ın her şeyi önceden takdir etmesidir. 'Şüphesiz biz her şeyi bir kader ile yarattık' buyrulur. Kader, hayır ve şerri de kapsar. Ancak insanın iradesi vardır ve seçimlerinden sorumludur. 'İnsana çalışmasından başka bir şey yoktur.' Kader inancı, başa gelen şeylere isyan etmeden sabretmeyi ve Allah'a güvenmeyi sağlar.",
    surah: "Kamer",
    ayah: "49",
    arabic: "إِنَّا كُلَّ شَيْءٍ خَلَقْنَاهُ بِقَدَرٍ"
  },
  {
    keywords: ["namaz vakit", "vakit namaz"],
    answer: "Namaz, belirlenen vakitlerde kılınması farz olan bir ibadettir. 'Şüphesiz namaz, müminler üzerine vakitleri belirlenmiş bir farzdır' buyrulur. Beş vakit namaz: sabah (imsak/güneş arası), öğle (öğle vaktinde), ikindi (ikindi vaktinde), akşam (akşam vaktinde) ve yatsı (yatsı vaktinde). Namazın önemi hakkında Peygamberimiz 'Namaz dinin direğidir' buyurmuştur.",
    surah: "Nisa",
    ayah: "103",
    arabic: "إِنَّ الصَّلَاةَ كَانَتْ عَلَى الْمُؤْمِنِينَ كِتَابًا مَوْقُوتًا"
  },
  {
    keywords: ["gusül", "boy abdest", "cünüp"],
    answer: "Gusül (boy abdesti), cünüplükten, hayız ve nifastan temizlenmek için yapılan dini yıkanmadır. 'Eğer cünüp iseniz iyice temizlenin' buyrulur. Gusül gerektiren durumlar: cinsel ilişki, ihtilam (uykuda boşalma), hayız ve nifasın bitmesi. Gusül: ağza ve burna su vermek, bütün bedeni yıkamaktır. Gusülsüz iken namaz kılmak, Kur'an okumak, Kabe'yi tavaf etmek caiz değildir.",
    surah: "Maide",
    ayah: "6",
    arabic: "وَإِنْ كُنْتُمْ جُنُبًا فَاطَّهَّرُوا"
  },
  {
    keywords: ["abdest", "namaz abdesti"],
    answer: "Abdest, namaz gibi ibadetler için yapılan dini temizliktir. 'Ey iman edenler! Namaz kılmaya kalktığınızda yüzlerinizi, dirseklere kadar ellerinizi yıkayın, başlarınızı mesh edin ve topuklara kadar ayaklarınızı yıkayın' buyrulur. Abdestin farzları dörttür: yüzü yıkamak, elleri dirseklere kadar yıkamak, başı mesh etmek, ayakları yıkamak. Abdest namazın anahtarıdır.",
    surah: "Maide",
    ayah: "6",
    arabic: "يَا أَيُّهَا الَّذِينَ آمَنُوا إِذَا قُمْتُمْ إِلَى الصَّلَاةِ فَاغْسِلُوا وُجُوهَكُمْ"
  },
  {
    keywords: ["sünnet", "sünnet namaz", "nafile"],
    answer: "Sünnet, Peygamberimiz (sav)'in farz dışında yaptığı ve devam ettiği ibadetlerdir. 'Andolsun, Allah'ın Resulünde sizin için güzel bir örnek vardır' buyrulur. Sünnetler: müekkede (pek pekişmiş) ve gayr-i müekkede (pekişmemiş) olarak ikiye ayrılır. Beş vakit namazın sünnetleri, teheccüd, kuşluk, evvabin namazı gibi sünnetler vardır. Sünnete uymak Allah sevgisinin alametidir.",
    surah: "Ahzab",
    ayah: "21",
    arabic: "لَقَدْ كَانَ لَكُمْ فِي رَسُولِ اللَّهِ أُسْوَةٌ حَسَنَةٌ"
  },
  {
    keywords: ["sadaka", "infak", "hayır"],
    answer: "Sadaka, Allah rızası için yapılan her türlü mali yardım ve güzel davranıştır. 'Sadakaları açıktan verirseniz ne güzel, gizleyip fakirlere verirseniz bu sizin için daha hayırlıdır' buyrulur. Sadaka sadece para ile olmaz: bir gülümseme, güzel söz, birine yol göstermek de sadakadır. Sadaka belaları defeder, ömrü bereketlendirir. Veren el alan elden üstündür.",
    surah: "Bakara",
    ayah: "271",
    arabic: "إِنْ تُبْدُوا الصَّدَقَاتِ فَنِعِمَّا هِيَ"
  },
];

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
    keywords: ["domuz", "domuz eti"],
    answer: "Domuz eti Kur'an'da açıkça haram kılınmıştır. Allah Müslümanlara ölmüş hayvan etini, kanı, domuz etini ve Allah'tan başkası adına kesilen hayvanları yasaklamıştır.",
    surah: "Bakara",
    ayah: "173",
    arabic: "إِنَّمَا حَرَّمَ عَلَيْكُمُ الْمَيْتَةَ وَالدَّمَ وَلَحْمَ الْخِنْزِيرِ وَمَا أُهِلَّ بِهِ لِغَيْرِ اللَّهِ"
  },
  {
    question: "Faiz haram mı?",
    keywords: ["faiz", "riba", "kredi faizi"],
    answer: "Faiz (riba) Kur'an'da kesin olarak haram kılınmıştır. 'Allah alışverişi helal, faizi haram kılmıştır. Kime Rabbinden bir öğüt gelir de faizden vazgeçerse, geçmişi kendinedir. Onun işi Allah'a kalmıştır.' buyrulur. Faiz yiyenler şeytan çarpmış gibi kalkarlar.",
    surah: "Bakara",
    ayah: "275-276",
    arabic: "وَأَحَلَّ اللَّهُ الْبَيْعَ وَحَرَّمَ الرِّبَا"
  },
  {
    question: "Oruç farz mı?",
    keywords: ["oruç", "ramazan", "oruc"],
    answer: "Evet, Ramazan ayında oruç tutmak her Müslümana farz kılınmıştır. 'Ey iman edenler! Oruç, sizden öncekilere farz kılındığı gibi size de farz kılındı. Umulur ki korunursunuz.' buyrulur. Oruç, Allah'a yakınlaşma ve takva sahibi olma vesilesidir.",
    surah: "Bakara",
    ayah: "183",
    arabic: "يَا أَيُّهَا الَّذِينَ آمَنُوا كُتِبَ عَلَيْكُمُ الصِّيَامُ كَمَا كُتِبَ عَلَى الَّذِينَ مِنْ قَبْلِكُمْ لَعَلَّكُمْ تَتَّقُونَ"
  },
  {
    question: "Zekat nedir?",
    keywords: ["zekat", "zeket"],
    answer: "Zekat, İslam'ın beş şartından biridir. Belirli bir miktardaki maldan yılda bir kez verilir. Kur'an'da zekatın sekiz sınıf için olduğu belirtilmiştir: fakirler, miskinler, zekat toplayanlar, kalpleri ısındırılacak olanlar, köleler, borçlular, Allah yolunda olanlar ve yolcular.",
    surah: "Tevbe",
    ayah: "60",
    arabic: "إِنَّمَا الصَّدَقَاتُ لِلْفُقَرَاءِ وَالْمَسَاكِينِ وَالْعَامِلِينَ عَلَيْهَا"
  },
  {
    question: "Namaz farz mı?",
    keywords: ["namaz", "salat"],
    answer: "Evet, namaz (salat) her Müslümana farz kılınmıştır. Kur'an'da 'Şüphesiz namaz, müminler üzerine vakitleri belirlenmiş bir farzdır' buyrulur. Namaz dinin direğidir ve İslam'ın beş şartından biridir.",
    surah: "Nisa",
    ayah: "103",
    arabic: "إِنَّ الصَّلَاةَ كَانَتْ عَلَى الْمُؤْمِنِينَ كِتَابًا مَوْقُوتًا"
  },
  {
    question: "Zina neden haram?",
    keywords: ["zina", "evlilik dışı", "aldatma", "nikahsız"],
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
    keywords: ["kuran", "mushaf", "kitap"],
    answer: "Kur'an-ı Kerim, Allah'ın Cebrail (as) aracılığıyla Hz. Muhammed (sav)'e vahyettiği son ilahi kitaptır. 'Ramazan ayı ki insanlara yol gösterici, doğrunun ve doğruyu eğriden ayırmanın açık delilleri olarak Kur'an indirilmiştir.' buyrulur. İçinde hiçbir çelişki yoktur ve Allah tarafından korunmaktadır.",
    surah: "Bakara",
    ayah: "185",
    arabic: "شَهْرُ رَمَضَانَ الَّذِي أُنْزِلَ فِيهِ الْقُرْآنُ هُدًى لِلنَّاسِ وَبَيِّنَاتٍ مِنَ الْهُدَىٰ وَالْفُرْقَانِ"
  },
  {
    question: "Yalan söylemek haram mı?",
    keywords: ["yalan", "yalancı"],
    answer: "Evet, yalan söylemek büyük günahlardandır. 'Batıl sözlerden kaçının' buyrulur. Yalan münafıklık alametidir ve cennete ancak doğru sözlüler girecektir.",
    surah: "Hac",
    ayah: "30",
    arabic: "فَاجْتَنِبُوا الرِّجْسَ مِنَ الْأَوْثَانِ وَاجْتَنِبُوا قَوْلَ الزُّورِ"
  },
  {
    question: "Gıybet nedir?",
    keywords: ["gıybet", "dedikodu", "çekiştirme"],
    answer: "Gıybet, bir Müslüman kardeşinin arkasından hoşlanmayacağı şeyle anmaktır. Kur'an'da 'Biriniz diğerinizi arkasından çekiştirmesin. Ölü kardeşinin etini yemekten hoşlanır mı?' buyrularak şiddetle yasaklanmıştır. Gıybet büyük günahlardandır.",
    surah: "Hucurat",
    ayah: "12",
    arabic: "يَا أَيُّهَا الَّذِينَ آمَنُوا اجْتَنِبُوا كَثِيرًا مِنَ الظَّنِّ إِنَّ بَعْضَ الظَّنِّ إِثْمٌ"
  },
  {
    question: "Kurban kesmek gerekli mi?",
    keywords: ["kurban", "kurban bayramı"],
    answer: "Kurban, imkanı olan Müslümanlara vaciptir (Hanefi'ye göre). Kur'an'da 'Rabbin için namaz kıl ve kurban kes' buyrulmuştur. Kurban Allah'a yakınlaşma vesilesidir ve etinden fakirler de faydalanır.",
    surah: "Kevser",
    ayah: "2",
    arabic: "فَصَلِّ لِرَبِّكَ وَانْحَرْ"
  },
  {
    question: "Cihad nedir?",
    keywords: ["cihad", "cihat"],
    answer: "Cihad, Allah yolunda çaba göstermek, gayret etmektir. En büyük cihad nefse karşı yapılanıdır. 'Allah yolunda hakkıyla cihad edin' buyrulur. Cihad sadece savaş değil, ilimle, malla ve canla Allah yolunda olmaktır.",
    surah: "Hac",
    ayah: "78",
    arabic: "وَجَاهِدُوا فِي اللَّهِ حَقَّ جِهَادِهِ"
  },
  {
    question: "Allah'ın isimleri nelerdir?",
    keywords: ["esma", "allahın ismi", "sıfat"],
    answer: "Allah'ın 99 güzel ismi vardır (Esma-ül Hüsna). 'En güzel isimler Allah'ındır. O'na o isimlerle dua edin' buyrulur. Bunlardan bazıları: Rahman (çok merhametli), Rahim (çok bağışlayıcı), Alim (her şeyi bilen), Kadir (her şeye gücü yeten), Semi (her şeyi işiten), Basir (her şeyi gören), Aziz (güçlü), Hakim (hikmet sahibi).",
    surah: "A'raf",
    ayah: "180",
    arabic: "وَلِلَّهِ الْأَسْمَاءُ الْحُسْنَىٰ فَادْعُوهُ بِهَا"
  },
  {
    question: "Kadın şahitliği hakkında ne deniyor?",
    keywords: ["kadın şahit", "şahitlik"],
    answer: "Kur'an'da borç yazma konusunda iki kadının bir erkeğe bedel olması, o dönemde kadınların ticari işlere yeterince aşina olmaması sebebiyledir. Bu hüküm borç yazma işlemine özeldir. Diğer konularda bir kadının şahitliği bir erkeğin şahitliğine eşittir.",
    surah: "Bakara",
    ayah: "282",
    arabic: "وَاسْتَشْهِدُوا شَهِيدَيْنِ مِنْ رِجَالِكُمْ فَإِنْ لَمْ يَكُونَا رَجُلَيْنِ فَرَجُلٌ وَامْرَأَتَانِ"
  },
  {
    question: "Evrim teorisi İslam'a uygun mu?",
    keywords: ["evrim", "darwin"],
    answer: "Kur'an'a göre insan, Allah tarafından özel bir şekilde yaratılmıştır. 'Andolsun biz insanı kuru bir çamurdan, şekillenmiş bir balçıktan yarattık' buyrulur. Allah Adem'i topraktan yaratmış, sonra ona ruhundan üflemiştir. İnsanın maymundan geldiği görüşü Kur'an öğretisiyle bağdaşmaz.",
    surah: "Hicr",
    ayah: "26",
    arabic: "وَلَقَدْ خَلَقْنَا الْإِنْسَانَ مِنْ صَلْصَالٍ مِنْ حَمَإٍ مَسْنُونٍ"
  },
  {
    question: "Müzik dinlemek günah mı?",
    keywords: ["müzik", "şarkı", "musiki"],
    answer: "Kur'an'da müzikle ilgili açık bir hüküm bulunmamaktadır. 'İnsanlardan öylesi vardır ki bilgisizce Allah yolundan saptırmak için boş sözleri satın alır' ayeti bazı alimlerce müzikle ilişkilendirilmiştir. Müzik konusunda İslam alimleri farklı görüşlere sahiptir. Önemli olan içeriğin Allah'ı anmaktan alıkoymamasıdır.",
    surah: "Lokman",
    ayah: "6",
    arabic: "وَمِنَ النَّاسِ مَنْ يَشْتَرِي لَهْوَ الْحَدِيثِ لِيُضِلَّ عَنْ سَبِيلِ اللَّهِ"
  },
  {
    question: "Kadın erkek eşit midir?",
    keywords: ["kadın erkek eşit", "cinsiyet"],
    answer: "Kur'an'a göre kadın ve erkek Allah katında eşit değere sahiptir. 'Ey insanlar! Sizi bir tek nefisten yaratan ve ondan eşini yaratan Rabbinize karşı gelmekten sakının' buyrulur. İkisi de aynı nefisten yaratılmıştır. Allah katında en üstün olan en takvalı olandır.",
    surah: "Nisa",
    ayah: "1",
    arabic: "يَا أَيُّهَا النَّاسُ اتَّقُوا رَبَّكُمُ الَّذِي خَلَقَكُمْ مِنْ نَفْسٍ وَاحِدَةٍ"
  },
  {
    question: "İslam'ın şartları nelerdir?",
    keywords: ["islamın şartı", "islam şartı"],
    answer: "İslam'ın beş şartı vardır: 1) Kelime-i Şehadet getirmek, 2) Namaz kılmak, 3) Oruç tutmak, 4) Zekat vermek, 5) Hacca gitmek. Bunlar İslam'ın temel direkleridir.",
    surah: "Bakara",
    ayah: "177",
    arabic: "لَيْسَ الْبِرَّ أَنْ تُوَلُّوا وُجُوهَكُمْ قِبَلَ الْمَشْرِقِ وَالْمَغْرِبِ وَلَٰكِنَّ الْبِرَّ مَنْ آمَنَ بِاللَّهِ"
  },
  {
    question: "İmanın şartları nelerdir?",
    keywords: ["imanın şartı", "iman şartı"],
    answer: "İmanın şartı altıdır: 1) Allah'a inanmak, 2) Meleklerine inanmak, 3) Kitaplarına inanmak, 4) Peygamberlerine inanmak, 5) Ahiret gününe inanmak, 6) Kadere (hayır ve şer) inanmak.",
    surah: "Bakara",
    ayah: "285",
    arabic: "آمَنَ الرَّسُولُ بِمَا أُنْزِلَ إِلَيْهِ مِنْ رَبِّهِ وَالْمُؤْمِنُونَ"
  },
  {
    question: "Hırsızlık haram mı?",
    keywords: ["hırsızlık", "çalmak", "hırsız"],
    answer: "Evet, hırsızlık Kur'an'da haram kılınmıştır ve cezası belirtilmiştir. 'Hırsız erkek ve hırsız kadının, kazandıklarına karşılık Allah'tan bir ceza olarak ellerini kesin' buyrulur.",
    surah: "Maide",
    ayah: "38",
    arabic: "وَالسَّارِقُ وَالسَّارِقَةُ فَاقْطَعُوا أَيْدِيَهُمَا جَزَاءً بِمَا كَسَبَا"
  },
  {
    question: "Öldürmek haram mı?",
    keywords: ["öldürmek", "cinayet"],
    answer: "Evet, haksız yere bir insanı öldürmek Kur'an'da en büyük günahlardan sayılmıştır. 'Kim bir insanı, bir can karşılığı veya yeryüzünde bir bozgunculuk olmaksızın öldürürse, bütün insanları öldürmüş gibi olur' buyrulur.",
    surah: "Maide",
    ayah: "32",
    arabic: "مَنْ قَتَلَ نَفْسًا بِغَيْرِ نَفْسٍ أَوْ فَسَادٍ فِي الْأَرْضِ فَكَأَنَّمَا قَتَلَ النَّاسَ جَمِيعًا"
  },
  {
    question: "Kadına şiddet haram mı?",
    keywords: ["kadına şiddet", "kadın döv"],
    answer: "Kur'an kadınlara iyi davranılmasını emreder. 'Onlarla iyi geçinin' buyrulur. Peygamberimiz 'Sizin en hayırlınız, hanımına karşı en iyi davrananınızdır' buyurmuştur. Şiddet asla İslam'ın onayladığı bir davranış değildir.",
    surah: "Nisa",
    ayah: "19",
    arabic: "وَعَاشِرُوهُنَّ بِالْمَعْرُوفِ"
  },
  {
    question: "Rüşvet haram mı?",
    keywords: ["rüşvet"],
    answer: "Evet, rüşvet vermek ve almak Kur'an'da yasaklanmıştır. 'İnsanların mallarından bir kısmını bile bile günah yollarla yemek için rüşvet olarak hakimlere vermeyin' buyrulur. Rüşvet büyük günahlardandır.",
    surah: "Bakara",
    ayah: "188",
    arabic: "وَلَا تَأْكُلُوا أَمْوَالَكُمْ بَيْنَكُمْ بِالْبَاطِلِ وَتُدْلُوا بِهَا إِلَى الْحُكَّامِ"
  },
  {
    question: "Anne babaya nasıl davranmalı?",
    keywords: ["anne baba", "ebeveyn"],
    answer: "Kur'an anne babaya iyilik etmeyi ve onlara saygılı olmayı emreder. 'Rabbin, kendisinden başkasına ibadet etmemenizi ve ana-babaya iyilik etmenizi emretti. Onlardan biri veya ikisi yanında yaşlanırsa, onlara 'öf' bile deme, onları azarlama, ikisine de güzel söz söyle' buyrulur.",
    surah: "İsra",
    ayah: "23",
    arabic: "وَقَضَىٰ رَبُّكَ أَلَّا تَعْبُدُوا إِلَّا إِيَّاهُ وَبِالْوَالِدَيْنِ إِحْسَانًا"
  },
  {
    question: "Yetim hakkı nedir?",
    keywords: ["yetim", "yetim hakkı"],
    answer: "Kur'an yetimlerin hakkının korunmasını emreder. 'Yetim malına, erginlik çağına erişinceye kadar en güzel şeklin dışında yaklaşmayın' buyrulur. Yetim malı yemek büyük günahlardandır.",
    surah: "En'am",
    ayah: "152",
    arabic: "وَلَا تَقْرَبُوا مَالَ الْيَتِيمِ إِلَّا بِالَّتِي هِيَ أَحْسَنُ"
  },
  {
    question: "Kıyamet ne zaman kopacak?",
    keywords: ["kıyamet", "kıyamet zaman"],
    answer: "Kıyametin ne zaman kopacağı sadece Allah'ın bilgisindedir. 'Sana kıyameti sorarlar: Ne zaman gelip çatacak? De ki: Onun bilgisi Rabbimin katındadır' buyrulur. Kıyametin alametleri Kur'an'da ve hadislerde bildirilmiştir.",
    surah: "A'raf",
    ayah: "187",
    arabic: "يَسْأَلُونَكَ عَنِ السَّاعَةِ أَيَّانَ مُرْسَاهَا ۖ قُلْ إِنَّمَا عِلْمُهَا عِنْدَ رَبِّي"
  },
  {
    question: "Cennet nasıl bir yerdir?",
    keywords: ["cennet", "cennet nasıl"],
    answer: "Cennet, müminlere vaat edilen sonsuz nimetler diyarıdır. 'Orada canların çektiği ve gözlerin hoşlandığı her şey vardır' buyrulur. Kur'an'da cennet: altından ırmaklar akan, meyveleri ve gölgeleri sürekli olan bir yer olarak tasvir edilir.",
    surah: "Zuhruf",
    ayah: "71",
    arabic: "فِيهَا مَا تَشْتَهِيهِ الْأَنْفُسُ وَتَلَذُّ الْأَعْيُنُ"
  },
  {
    question: "Cehennem nasıl bir yerdir?",
    keywords: ["cehennem", "cehennem nasıl"],
    answer: "Cehennem, kafirler ve günahkarlar için hazırlanmış şiddetli azap yeridir. Kur'an'da cehennem için 'şiddetli bir azap, kaynar su, irin, karanlık, zincirler ve demir halkalar' tasvirleri vardır. Müminler cehennemden Allah'a sığınmalıdır.",
    surah: "Bakara",
    ayah: "24",
    arabic: "فَاتَّقُوا النَّارَ الَّتِي وَقُودُهَا النَّاسُ وَالْحِجَارَةُ"
  },
  {
    question: "İçki haram mı?",
    keywords: ["içki"],
    answer: "Evet, içki (hamr) Kur'an'da haram kılınmıştır. Maide Suresi 90. ayette 'Ey iman edenler! İçki, kumar, dikili taşlar ve fal okları şeytan işi birer pisliktir. Bunlardan uzak durun ki kurtuluşa eresiniz.' buyrulmuştur.",
    surah: "Maide",
    ayah: "90",
    arabic: "يَا أَيُّهَا الَّذِينَ آمَنُوا إِنَّمَا الْخَمْرُ وَالْمَيْسِرُ وَالْأَنْصَابُ وَالْأَزْلَامُ رِجْسٌ مِنْ عَمَلِ الشَّيْطَانِ"
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
    keywords: ["tövbe", "tövbe nasıl"],
    answer: "Tövbe, işlenen günahtan pişmanlık duyup Allah'a yönelmektir. 'Ey iman edenler! Allah'a içten bir tövbe ile tövbe edin' buyrulur. Tövbenin üç şartı vardır: 1) Günahı terk etmek, 2) Pişmanlık duymak, 3) Bir daha yapmamaya karar vermek.",
    surah: "Tahrim",
    ayah: "8",
    arabic: "يَا أَيُّهَا الَّذِينَ آمَنُوا تُوبُوا إِلَى اللَّهِ تَوْبَةً نَصُوحًا"
  },
  {
    question: "Kaza namazı nedir?",
    keywords: ["kaza namazı", "kaza namaz", "kadın namaz"],
    answer: "Kaza namazı, vaktinde kılınamayan farz namazların daha sonra kılınmasıdır. 'Namazlarınızı kılın, vaktinde kılamadıklarınızı da kaza edin' hadisi gereğince, vaktinde kılınmayan namazlar kaza edilmelidir. Özellikle kadınlar hayız ve nifas hallerinde kılamadıkları namazları kaza etmezler, ancak oruçları kaza ederler.",
    surah: "Nisa",
    ayah: "103",
    arabic: "إِنَّ الصَّلَاةَ كَانَتْ عَلَى الْمُؤْمِنِينَ كِتَابًا مَوْقُوتًا"
  },
  {
    question: "Fitre ve fidye nedir?",
    keywords: ["fitre", "fidye", "sadaka fitr"],
    answer: "Fitre (Sadaka-i Fıtır), Ramazan bayramına ulaşan ve maddi durumu yerinde olan her Müslümanın vermesi gereken bir sadakadır. Fidye ise oruç tutamayacak durumda olanların (yaşlı, kronik hasta) her gün için verdiği bedeldir. 'Oruca güç yetiremeyenler, bir yoksul doyuracak kadar fidye öder.' buyrulur.",
    surah: "Bakara",
    ayah: "184",
    arabic: "وَعَلَى الَّذِينَ يُطِيقُونَهُ فِدْيَةٌ طَعَامُ مِسْكِينٍ"
  },
];

const generalResponse: QuranAnswer = {
  question: "Genel sorular",
  keywords: [""],
  answer: "Bu konu hakkında Kur'an'da genel bir rehberlik bulunmaktadır. Kur'an, 'Doğrusu bu Kur'an, en doğru yola iletir ve salih ameller işleyen müminlere büyük bir mükafat olduğunu müjdeler.' buyrulur. Her konuda Allah'a danışmak ve Kur'an'a yönelmek en doğrusudur. Daha spesifik bir soru sormak istersen, önerilen sorulardan birini seçebilir veya sorunu daha açık bir şekilde yazabilirsin.",
  surah: "İsra Suresi, 9",
  arabic: "إِنَّ هَٰذَا الْقُرْآنَ يَهْدِي لِلَّتِي هِيَ أَقْوَمُ"
};

function wordBoundaryCheck(text: string, keyword: string): boolean {
  const escaped = keyword.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
  const regex = new RegExp(
    "(?:^|[\\s,.;:!?\\-])" + escaped + "(?=[\\s,.;:!?\\-]|$)",
    "i"
  );
  return regex.test(text);
}

function scoreItem(
  lower: string,
  keywords: string[],
  weight: number
): number {
  let score = 0;
  for (const kw of keywords) {
    if (wordBoundaryCheck(lower, kw)) {
      score += weight;
    }
    if (lower.includes(kw)) {
      score += Math.round(weight / 2);
    }
  }
  const words = lower.split(/\s+/);
  for (const w of words) {
    if (w.length < 3) continue;
    for (const kw of keywords) {
      if (kw.includes(w) && w.length >= kw.length / 2) {
        score += Math.round(weight / 4);
      }
    }
  }
  return score;
}

export function findQuranAnswer(question: string, includeHadith = true): QuranAnswer {
  const lower = question.toLowerCase().trim().replace(/[?.,!]+$/, "");

  let bestExact: QuranAnswer | null = null;
  let bestExactScore = -1;

  for (const item of quranAnswers) {
    const score = scoreItem(lower, item.keywords, 20);
    if (score > bestExactScore) {
      bestExactScore = score;
      bestExact = item;
    }
  }

  if (bestExactScore > 20) return bestExact!;

  let bestFallback: QuranAnswer | null = null;
  let bestFallbackScore = -1;

  for (const fb of fallbackAnswers) {
    const score = scoreItem(lower, fb.keywords, 15);
    if (score > bestFallbackScore) {
      bestFallbackScore = score;
      bestFallback = {
        question: fb.keywords[0] || "Konu",
        keywords: fb.keywords,
        answer: fb.answer,
        surah: `${fb.surah} Suresi, ${fb.ayah}`,
        arabic: fb.arabic,
      };
    }
  }

  if (bestFallbackScore > 0) return bestFallback!;

  if (includeHadith) {
    let bestHadith: QuranAnswer | null = null;
    let bestHadithScore = -1;

    for (const h of hadithAnswers) {
      const score = scoreItem(lower, h.keywords, 15);
      if (score > bestHadithScore) {
        bestHadithScore = score;
        bestHadith = {
          question: h.keywords[0] || "Konu",
          keywords: h.keywords,
          answer: h.answer,
          surah: h.source,
          arabic: "عَنْ رَسُولِ اللَّهِ صلى الله عليه وسلم",
        };
      }
    }

    if (bestHadithScore > 0) return bestHadith!;
  }

  return generalResponse;
}

export function findHadithAnswer(question: string): QuranAnswer | null {
  const lower = question.toLowerCase().trim().replace(/[?.,!]+$/, "");

  let best: QuranAnswer | null = null;
  let bestScore = -1;

  for (const h of hadithAnswers) {
    const score = scoreItem(lower, h.keywords, 20);
    if (score > bestScore) {
      bestScore = score;
      best = {
        question: h.keywords[0] || "Konu",
        keywords: h.keywords,
        answer: h.answer,
        surah: h.source,
        arabic: "عَنْ رَسُولِ اللَّهِ صلى الله عليه وسلم",
      };
    }
  }

  return bestScore > 0 ? best : null;
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
    "Gıybet nedir?",
    "Cennet nasıl bir yerdir?",
    "Abdest nasıl alınır?",
    "Kadın erkek eşit midir?",
  ];
}
