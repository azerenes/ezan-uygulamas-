export interface HadithAnswer {
  question: string;
  keywords: string[];
  answer: string;
  source: string;
}

export const hadithAnswers: HadithAnswer[] = [
  {
    question: "Komşuluk hakları",
    keywords: ["komşu", "komşuluk"],
    answer: "Peygamberimiz (sav) komşu hakkına büyük önem vermiştir. 'Cibril bana komşuya iyilik etmeyi o kadar çok tavsiye etti ki, neredeyse komşuyu komşuya mirasçı kılacak sandım' buyurmuştur. Ayrıca 'Komşusu açken tok yatan bizden değildir' hadisi komşuluk hakkının önemini vurgular. Bir diğer hadiste 'Kim Allah'a ve ahiret gününe inanıyorsa komşusuna eziyet etmesin' buyrulmuştur.",
    source: "Buhârî, Edeb, 28; Müslim, İman, 74"
  },
  {
    question: "Anne baba hakkı",
    keywords: ["anne baba hakkı", "ana baba hakkı"],
    answer: "Peygamberimiz (sav) anne babaya iyilik etmeyi en faziletli amel olarak saymıştır. Bir sahabe 'Allah katında en sevimli amel hangisidir?' diye sorduğunda 'Vaktinde kılınan namazdır' buyurdu. 'Sonra hangisi?' dediğinde 'Anne babaya iyilik etmektir' buyurdu. 'Sonra hangisi?' sorusuna ise 'Allah yolunda cihaddır' buyurdu. Cennet annelerin ayakları altındadır hadisi anne hakkının yüceliğini gösterir.",
    source: "Buhârî, Edeb, 1; Müslim, Birr, 5"
  },
  {
    question: "Güler yüz ve güzel ahlak",
    keywords: ["güler yüz", "güzel ahlak", "tebessüm"],
    answer: "Peygamberimiz (sav) güzel ahlakı tamamlamak için gönderildiğini bildirmiştir. 'Ben güzel ahlakı tamamlamak için gönderildim' buyurmuştur. 'Kardeşine gülümsemen sadakadır' ve 'Cennete en çok girecek olanlar takva sahipleri ve güzel ahlaklı olanlardır' hadisleri İslam'da güzel ahlakın önemini gösterir. Mümin yumuşak huylu olur, kaba ve sert olmaz.",
    source: "Muvatta, Hüsnü'l-Hulk, 1; Tirmizî, Birr, 62"
  },
  {
    question: "Namazın önemi",
    keywords: ["namazın önemi", "namaz dinin direği"],
    answer: "Peygamberimiz (sav) namaz için 'Namaz dinin direğidir. Kim onu ikame ederse dini ayakta tutmuş olur. Kim terk ederse dinini yıkmış olur' buyurmuştur. Bir diğer hadiste 'Kul ile küfür arasındaki fark namazı terk etmektir' buyrulmuştur. Namaz, hesap gününde ilk sorgulanacak ameldir. Namazı dosdoğru kılanın diğer amelleri de düzelir.",
    source: "Tirmizî, İman, 8; Müslim, İman, 134"
  },
  {
    question: "Oruç ve fazileti",
    keywords: ["oruç fazileti", "oruç sevap"],
    answer: "Peygamberimiz (sav) oruç hakkında 'Âdemoğlunun her ameli kat kat verilir. Bir iyilik on mislinden yedi yüz misline kadar artar. Allah: Oruç hariç, çünkü o benim içindir ve onun mükafatını ben vereceğim buyurur' demiştir. 'Oruçlu için iki sevinç vardır: İftar ettiği zaman sevinir ve Rabbine kavuştuğu zaman orucunun sevabıyla sevinir.' Ayrıca 'Oruç bir kalkandır, sizi cehennemden korur' buyrulmuştur.",
    source: "Buhârî, Savm, 2; Müslim, Sıyam, 163"
  },
  {
    question: "Zikir ve dua",
    keywords: ["zikir", "zikretmek", "allahı anmak"],
    answer: "Peygamberimiz (sav) 'Allah'ı zikreden kimse ile zikretmeyenin farkı, diri ile ölü gibidir' buyurmuştur. 'Dua ibadetin ta kendisidir' ve 'Allah katında duadan daha değerli bir şey yoktur' hadisleri duanın ehemmiyetini gösterir. Bir diğer hadiste 'Kim 'La ilahe illallah' derse, bu onun için bir kurtuluş vesilesi olur' buyrulmuştur.",
    source: "Buhârî, Da'avât, 1; Tirmizî, Da'avât, 1"
  },
  {
    question: "Yalan ve doğruluk",
    keywords: ["yalan söylemek haram", "yalan hadis"],
    answer: "Peygamberimiz (sav) 'Bana yalan söylemeyin! Kim bana yalan isnat ederse cehennemdeki yerine hazırlansın' buyurarak yalana karşı şiddetli uyarıda bulunmuştur. 'Müslüman, elinden ve dilinden Müslümanların güvende olduğu kimsedir' ve 'Doğruluk kurtuluşa, yalan ise helake götürür. Doğruluk iyiliğe, iyilik de cennete götürür' hadisleri doğruluğun önemini vurgular.",
    source: "Buhârî, İlim, 39; Müslim, Birr, 103"
  },
  {
    question: "Yemek adabı",
    keywords: ["yemek adabı", "yemek duası", "besmele"],
    answer: "Peygamberimiz (sav) yemekten önce besmele çekilmesini, sağ elle yenmesini ve önünden yenmesini tavsiye etmiştir. 'Yemeğin bereketi, yemekten önce ve sonra elleri yıkamaktadır' buyurmuştur. 'Hiçbiriniz sol eliyle yiyip içmesin; çünkü şeytan sol eliyle yer içer' hadisi sağ elle yemenin önemini belirtir. Kabın dibini sıyırmak da berekete vesiledir.",
    source: "Müslim, Eşribe, 105; İbn Mâce, Et'ıme, 16"
  },
  {
    question: "Selamlaşma",
    keywords: ["selam", "selamlaşma", "esselamün aleyküm"],
    answer: "Peygamberimiz (sav) selamlaşmaya büyük önem vermiştir. 'Selamı yayın, yemek yedirin, akraba ile ilişkiyi kesmeyin, insanlar uykudayken namaz kılın; selametle cennete girersiniz' buyurmuştur. Karşılaştığınızda selam verin, yoldan geçen selamı alan da selamı güzelleştirsin. En küçük selam bile sevap kazandırır. Binitli yürüyene, yürüyen oturana, az olan çoğa selam verir.",
    source: "Buhârî, İman, 6; Müslim, İman, 93"
  },
  {
    question: "Hasta ziyareti",
    keywords: ["hasta ziyareti", "hasta ziyaret"],
    answer: "Peygamberimiz (sav) hasta ziyaretini Müslümanın hakkı olarak saymıştır. 'Müslümanın Müslüman üzerinde beş hakkı vardır: selamı almak, hastayı ziyaret etmek, cenazeye katılmak, davete icabet etmek, aksırana yerhamükellah demek' buyurmuştur. Hasta ziyareti sevabı büyüktür, ziyaretçi cennet bahçelerinde yürümüş gibi olur. Hastanın yanında dua etmeli ve ona moral vermelidir.",
    source: "Buhârî, Cenâiz, 2; Müslim, Selam, 5"
  },
  {
    question: "İlim öğrenmek",
    keywords: ["ilim öğrenmek", "ilim tahsil"],
    answer: "Peygamberimiz (sav) ilim öğrenmeyi her Müslümana farz kılmıştır. 'İlim öğrenmek her Müslümana farzdır' buyurmuştur. 'Kim ilim öğrenmek için bir yola girerse, Allah ona cennetin yolunu kolaylaştırır. Melekler ilim talebesinden hoşlandıkları için kanatlarını onun üzerine gererler' hadisi ilmin faziletini gösterir. Alimin ibadet edenden üstün olduğu da hadislerle bildirilmiştir.",
    source: "İbn Mâce, Mukaddime, 17; Tirmizî, İlim, 19"
  },
  {
    question: "Kul hakkı",
    keywords: ["kul hakkı", "kul hakkı yemek"],
    answer: "Peygamberimiz (sav) 'Müflis (iflas eden) kimdir?' diye sorduğunda sahabe 'Parası olmayandır' dedi. Bunun üzerine 'Ümmetimin müflisi, kıyamet günü namaz, oruç ve zekat sevabıyla gelir; ama şuna sövdüğü, buna iftira ettiği, şunun malını yediği, bunun kanını döktüğü için iyiliklerinden alınıp hak sahiplerine verilir. Sevabı bitince de onların günahları kendisine yüklenir ve cehenneme atılır' buyurmuştur. Kul hakkı büyük bir sorumluluktur.",
    source: "Müslim, Birr, 60"
  },
  {
    question: "Yetim hakkı hadis",
    keywords: ["yetim hakkı hadis", "yetim sevgi"],
    answer: "Peygamberimiz (sav) 'Ben ve yetime bakan kimse cennette böyleyiz' buyurarak (şehadet ve orta parmağını gösterip) aralarını açmıştır. 'Yetimin başını okşayan, her bir saç teli sayısınca sevap alır' buyrulmuştur. 'Kim bir yetimin geçimini üstlenirse, ona cennette şöyle bir yer hazırlanır' hadisi yetimlere bakmanın büyük mükafatını müjdeler.",
    source: "Buhârî, Talak, 14; Tirmizî, Birr, 14"
  },
  {
    question: "İsraftan kaçınmak",
    keywords: ["israf", "savurganlık"],
    answer: "Peygamberimiz (sav) her konuda israftan kaçınmayı tavsiye etmiştir. 'İnsanoğlunun bir vadi dolusu altını olsa, bir vadi daha ister. Onun ağzını ancak toprak doldurur. Allah tövbe edenin tövbesini kabul eder' buyurmuştur. Abdest alırken bile akarsu kenarında olsanız suyu israf etmeyin hadisi israfın her alanda yasak olduğunu gösterir.",
    source: "Buhârî, Rikak, 10; İbn Mâce, Taharet, 48"
  },
  {
    question: "Kibir ve tevazu",
    keywords: ["kibir", "tevazu", "mütevazi"],
    answer: "Peygamberimiz (sav) 'Kalbinizde zerre kadar kibir bulunan cennete giremez' buyurmuştur. Bir sahabe 'Kişi elbisesinin güzel olmasını sever' deyince 'Allah güzeldir, güzelliği sever. Kibir ise hakkı kabul etmemek ve insanları küçük görmektir' buyurmuştur. Tevazu hakkında ise 'Allah benim mütevazı olmamı emretti. Kim Allah için tevazu gösterirse Allah onu yükseltir' buyrulmuştur.",
    source: "Müslim, İman, 147; İbn Mâce, Zühd, 16"
  },
  {
    question: "Helal rızık",
    keywords: ["helal rızık", "helal kazanç"],
    answer: "Peygamberimiz (sav) 'Helal rızık peşinde koşmak her Müslümana farzdır' buyurmuştur. 'Kişi yediğinden sorgulanacaktır: helalden mi yedi, haramdan mı?' uyarısı helal kazancın önemini gösterir. 'Kim helalden kazanır, hayra harcarsa sevap alır' buyrulmuştur. Mümin helal rızık için çalışmalı, harama bulaşmaktan sakınmalıdır. Rızıkta bereket helal yoldadır.",
    source: "Taberânî, Evsat, 1/209; Buhârî, Büyu, 1"
  },
  {
    question: "Kanaat ve şükür",
    keywords: ["kanaat", "kanaatkar"],
    answer: "Peygamberimiz (sav) 'Kanaat tükenmez bir hazinedir' buyurmuştur. 'Zenginlik mal çokluğu değil, gönül zenginliğidir. Kimin gözü doyarsa, Allah ona yeter. Kim gözünü açarsa, Allah onu ihtiyaç sahibi kılar' hadisi kanaatin önemini vurgular. 'Müminin hali ne güzeldir: başına hayır gelse şükreder, şer gelse sabreder, bu da ona hayır kazandırır' buyrulmuştur.",
    source: "Buhârî, Rikak, 15; Müslim, Zühd, 64"
  },
  {
    question: "Cömertlik",
    keywords: ["cömert", "cömertlik", "el açıklığı"],
    answer: "Peygamberimiz (sav) cömertliği överek 'Cömert Allah'a yakındır, insanlara yakındır, cennete yakındır, cehennemden uzaktır. Cimri ise Allah'tan uzaktır, insanlardan uzaktır, cennetten uzaktır, cehenneme yakındır' buyurmuştur. 'Sağ elin verdiğini sol el bilmesin' hadisi gizli sadakanın faziletini belirtir. Allah cömert kullarını sever.",
    source: "Tirmizî, Birr, 40; Buhârî, Zekat, 11"
  },
  {
    question: "Öfke kontrolü",
    keywords: ["öfke", "öfkelenmek", "sinir"],
    answer: "Peygamberimiz (sav) öfke kontrolüne büyük önem vermiştir. 'Öfkeyi yenmek büyük fazilettir. Güçlü kimse güreşte değil, öfke anında kendine hakim olandır' buyurmuştur. 'Öfkelenme, sana cennet vardır' diye tavsiye etmiştir. Öfkelenince abdest almak ve oturuyorsa kalkmak tavsiye edilmiştir. Öfke şeytandandır, şeytan ise ateştendir.",
    source: "Buhârî, Edeb, 76; Müslim, Birr, 107"
  },
  {
    question: "Kadın hakları",
    keywords: ["kadın hakları hadis", "hanım hakkı"],
    answer: "Peygamberimiz (sav) Veda Hutbesi'nde 'Kadınların haklarını yerine getirin, onlara iyi davranın. Onlar sizin hayat arkadaşlarınızdır' buyurmuştur. 'Sizin en hayırlınız hanımına karşı en iyi davrananınızdır. Ben hanımına karşı en iyi davrananınızım' hadisi aile içinde kadına verilen değeri gösterir. 'Annen, annen, annen, sonra baban' hadisi kadının İslam'daki saygın yerini ortaya koyar.",
    source: "Tirmizî, Rada, 11; Buhârî, Edeb, 2"
  },
];
