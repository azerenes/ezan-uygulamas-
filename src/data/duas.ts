export interface Dua {
  id: string;
  category: string;
  arabic: string;
  translation: string;
  source: string;
}

export const duaCategories = [
  { key: "all", label: "Tümü" },
  { key: "namaz-sonrasi", label: "Namaz Sonrası" },
  { key: "sabah", label: "Sabah" },
  { key: "aksam", label: "Akşam" },
  { key: "uyku", label: "Uyku" },
  { key: "yemek", label: "Yemek" },
];

export const duas: Dua[] = [
  {
    id: "1",
    category: "namaz-sonrasi",
    arabic: "اللهم انت السلام ومنك السلام تباركت يا ذا الجلال والاكرام",
    translation: "Allah'ım! Sen selam (kurtuluş)sın. Selam yalnız sendendir. Ey azamet ve ikram sahibi! Sen mübareksin (hayır ve bereketin sonsuzdur).",
    source: "Müslim, Mesâcid, 135; Ebû Dâvûd, Salât, 362"
  },
  {
    id: "2",
    category: "namaz-sonrasi",
    arabic: "سبحان الله والحمد لله ولا اله الا الله والله اكبر",
    translation: "Allah eksikliklerden münezzehtir, hamd Allah'adır, Allah'tan başka ilah yoktur, Allah en büyüktür.",
    source: "Tesbih / Namaz sonrası 33'er kez"
  },
  {
    id: "3",
    category: "sabah",
    arabic: "اللهم بك اصبحنا وبك امسينا بك نحيا وبك نموت واليك النشور",
    translation: "Allah'ım! Senin yardımınla sabaha ulaştık, Senin yardımınla akşama erdik. Senin yardımınla yaşar, Senin yardımınla ölürüz ve dönüş sanadır.",
    source: "Ebû Dâvûd, Edeb, 110"
  },
  {
    id: "4",
    category: "sabah",
    arabic: "اللهم عافني في بدني اللهم عافني في سمعي اللهم عافني في بصري",
    translation: "Allah'ım! Bedenimi afiyet kıl. Allah'ım! Kulağımı afiyet kıl. Allah'ım! Gözümü afiyet kıl.",
    source: "Ebû Dâvûd, Edeb, 110"
  },
  {
    id: "5",
    category: "aksam",
    arabic: "امسينا وامسى الملك لله والحمد لله لا اله الا الله وحده لا شريك له",
    translation: "Akşama erdik, mülk Allah'a aittir. Hamd Allah'adır. O'ndan başka ilah yoktur, birdir ve ortağı yoktur.",
    source: "Müslim, Zikr, 72"
  },
  {
    id: "6",
    category: "uyku",
    arabic: "باسمك اللهم اموت واحيا",
    translation: "Allah'ım! Senin adınla ölür ve Senin adınla dirilirim.",
    source: "Buhârî, Da'avât, 7"
  },
  {
    id: "7",
    category: "uyku",
    arabic: "اللهم قني عذابك يوم تبعث عبادك",
    translation: "Allah'ım! Kullarını yeniden dirilteceğin gün beni azabından koru.",
    source: "Ebû Dâvûd, Edeb, 107"
  },
  {
    id: "8",
    category: "yemek",
    arabic: "بسم الله",
    translation: "Allah'ın adıyla.",
    source: "Buhârî, Et'ıme, 2"
  },
  {
    id: "9",
    category: "yemek",
    arabic: "الحمد لله الذي اطعمنا وسقانا وجعلنا مسلمين",
    translation: "Bizi yediren, içiren ve Müslüman kılan Allah'a hamd olsun.",
    source: "Ebû Dâvûd, Edeb, 111"
  },
  {
    id: "10",
    category: "sabah",
    arabic: "رضيت بالله ربا وبالاسلام دينا وبمحمد صلى الله عليه وسلم نبيا",
    translation: "Allah'ı Rab, İslam'ı din ve Muhammed (sav)'i peygamber olarak kabul ettim.",
    source: "Müslim, Zikr, 71"
  },
  {
    id: "11",
    category: "aksam",
    arabic: "اللهم بك امسينا وبك اصبحنا وبك نحيا وبك نموت واليك المصير",
    translation: "Allah'ım! Seninle akşamladık, Seninle sabahladık. Seninle yaşar, Seninle ölürüz. Dönüş sanadır.",
    source: "Müslim, Zikr, 72"
  },
  {
    id: "12",
    category: "namaz-sonrasi",
    arabic: "استغفر الله (ثلاثا) اللهم انت السلام ومنك السلام تباركت يا ذا الجلال والاكرام",
    translation: "Allah'tan bağışlanma dilerim (3 kez). Allah'ım! Sen selamsın, selam sendendir. Ey azamet ve ikram sahibi! Sen mübareksin.",
    source: "Müslim, Mesâcid, 135"
  },
];
