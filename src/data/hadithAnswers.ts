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
  {
    question: "Yetim ve öksüz",
    keywords: ["yetim sevindir", "yetim bakmak"],
    answer: "Peygamberimiz (sav) 'Kim bir yetimi veya bir yoksulu doyurursa, Allah onu cennet meyveleriyle doyurur' buyurmuştur. 'Ben ve yetime bakan kimse cennette şöyleyiz' buyurarak (şehadet ve orta parmağını gösterip) aralarını açmıştır. Yetimi sevindirmek, Allah katında büyük bir ibadettir ve sahibini birçok beladan korur.",
    source: "Buhârî, Talak, 25; Müslim, Zühd, 42"
  },
  {
    question: "Çocuk terbiyesi",
    keywords: ["çocuk terbiyesi", "çocuk eğitimi"],
    answer: "Peygamberimiz (sav) 'Hiçbir baba, çocuğuna güzel terbiyeden daha değerli bir miras bırakmamıştır' buyurmuştur. Çocuklara iyi davranmayı, onlarla şakalaşmayı ve onları sevmeyi tavsiye etmiştir. 'Çocuklarınıza ikramda bulunun ve onları güzelce terbiye edin' ve 'Küçüklerimize merhamet etmeyen, büyüklerimize saygı göstermeyen bizden değildir' hadisleri çocuk terbiyesinin önemini belirtir.",
    source: "Tirmizî, Birr, 33; İbn Mâce, Edeb, 3"
  },
  {
    question: "Akraba ziyareti",
    keywords: ["akraba", "sıla", "sıla rahim"],
    answer: "Peygamberimiz (sav) 'Sıla-i rahim (akraba ziyareti) malı çoğaltır ve ömrü uzatır' buyurmuştur. 'Rahm (akraba) ile ilişkiyi kesen cennete giremez' hadisi akraba ziyaretinin önemini gösterir. Kimin rızkının genişlemesini ve ömrünün uzamasını istiyorsa akrabasını ziyaret etsin buyrulmuştur. En küçük bir ziyaret bile büyük sevaptır.",
    source: "Buhârî, Edeb, 12; Müslim, Birr, 20"
  },
  {
    question: "İslam kardeşliği",
    keywords: ["mümin kardeş", "islam kardeşliği"],
    answer: "Peygamberimiz (sav) 'Mümin, müminin kardeşidir. Ona zulmetmez, onu yardımsız bırakmaz' buyurmuştur. 'Birbirinize buğz etmeyin, haset etmeyin, sırt çevirmeyin. Ey Allah'ın kulları! Kardeş olun' hadisi İslam kardeşliğinin temelini oluşturur. 'Müminler bir binanın tuğlaları gibi birbirini tutar' buyrulmuştur. Mümin birbirini seven, birbirine yardım eden bir bütündür.",
    source: "Buhârî, Mezalim, 3; Müslim, Birr, 28"
  },
  {
    question: "Su içme adabı",
    keywords: ["su içmek", "içme adabı"],
    answer: "Peygamberimiz (sav) su içerken üç nefeste içmeyi tavsiye etmiştir. 'Suyu üç nefeste için, kabın dışında (nefes alın) ve bir nefeste içmeyin' buyurmuştur. Ayrıca su içerken besmele çekmeyi ve bitince şükretmeyi tavsiye etmiştir. Ayakta su içmeyi ise zaman zaman yasaklamış, bazı durumlarda da izin vermiştir. Genel olarak oturarak içmek daha faziletlidir.",
    source: "Müslim, Eşribe, 128; Tirmizî, Eşribe, 16"
  },
  {
    question: "Cuma günü",
    keywords: ["cuma", "cuma günü", "cuma namazı"],
    answer: "Peygamberimiz (sav) 'Güneşin doğduğu en hayırlı gün Cuma günüdür' buyurmuştur. Cuma günü üzerine güzel koku sürünmek, misvak kullanmak, temiz elbise giymek sünnettir. Cuma namazına erken gitmek büyük sevaptır. 'Cuma günü imamın minberde olduğu andan namaz bitene kadar selamet bekleyenin günahları affolunur' buyrulmuştur. Cuma günü çok salevat getirmek de sünnettir.",
    source: "Müslim, Cum'a, 5; Ebû Dâvûd, Salât, 226"
  },
  {
    question: "Bayram sevinci",
    keywords: ["bayram", "ramazan bayramı", "kurban bayramı"],
    answer: "Peygamberimiz (sav) bayram günlerinde sevinci ve ibadeti birleştirmiştir. Bayram namazına giderken yoldan dönüşte farklı yol kullanılmasını tavsiye etmiştir. Bayramlarda birbirimize hediye vermek sevgiyi artırır. 'Bayram günlerinde çocukları sevindirin, Allah da sizi sevindirsin' buyrulmuştur. Bayramlar Müslümanlar arasında birlik ve beraberliğin pekiştiği günlerdir.",
    source: "Buhârî, Iydeyn, 1; Tirmizî, Salât, 386"
  },
  {
    question: "Kefen ve cenaze",
    keywords: ["cenaze", "kefen", "defin", "ölü yıkama"],
    answer: "Peygamberimiz (sav) cenaze namazının önemini vurgulamıştır. 'Kim bir cenaze namazı kılar, cenaze defnedilinceye kadar beklerse, bir dağ kadar sevap alır' buyurmuştur. Ölüyü yıkarken güzel davranılmasını, kefenin güzel olmasını ve cenaze namazına acele edilmesini tavsiye etmiştir. 'Ölülerinizi defnetmekte acele edin' buyrulmuştur. Cenaze sahiplerine sabır ve başsağlığı dilenmesi sünnettir.",
    source: "Buhârî, Cenâiz, 51; Müslim, Cenâiz, 71"
  },
  {
    question: "Rüya tabiri",
    keywords: ["rüya", "rüya yorumu"],
    answer: "Peygamberimiz (sav) 'Müminin rüyası peygamberliğin kırk altıda biridir' buyurmuştur. 'Üç türlü rüya vardır: Allah'tan gelen güzel rüya, şeytandan gelen korkulu rüya, kişinin kendi düşüncelerinden gelen rüya' buyrulmuştur. Güzel rüya görüldüğünde Allah'a hamd edilmesini, kötü rüya görüldüğünde sol tarafa üç kere tükürmeyi ve o rüyayı kimseye anlatmamayı tavsiye etmiştir.",
    source: "Buhârî, Ta'bir, 4; Müslim, Rüya, 8"
  },
  {
    question: "Sadaka çeşitleri",
    keywords: ["sadaka çeşit", "sadaka vermek"],
    answer: "Peygamberimiz (sav) sadakanın sadece mal ile olmadığını öğretmiştir. 'Her bir tesbih sadakadır, her bir tekbir sadakadır, her bir hamd sadakadır, her bir tehlil sadakadır. İyiliği emretmek sadakadır, kötülükten alıkoymak sadakadır. Kişinin hanımıyla cinsel münasebeti bile sadakadır' buyurmuştur. Gülümsemek, yoldaki engeli kaldırmak da sadakadır.",
    source: "Müslim, Zekat, 56; Buhârî, Edeb, 33"
  },
  {
    question: "İhlas ve niyet",
    keywords: ["ihlas", "niyet", "samimiyet"],
    answer: "Peygamberimiz (sav) 'Ameller niyetlere göredir. Herkes niyetine göre karşılık alır' buyurmuştur. Bu hadis İslam'ın temel hadislerindendir ve amellerin değerinin niyete bağlı olduğunu gösterir. 'Allah sizin suretlerinize ve mallarınıza değil, kalplerinize ve amellerinize bakar' buyrulmuştur. İhlas ile yapılan az amel bile Allah katında değerlidir.",
    source: "Buhârî, İman, 41; Müslim, İman, 155"
  },
  {
    question: "Borç ödeme",
    keywords: ["borç", "borç ödemek", "borçlu"],
    answer: "Peygamberimiz (sav) borcu vaktinde ödemeyi tavsiye etmiş, borç ertelemeyi hoş karşılamamıştır. 'Zengin kişinin borcunu ertelemesi zulümdür' buyurmuştur. Kim borçlu olarak ölürse, cenaze namazını kılmamış, borcun ödenmesini istemiştir. 'Kim insanların malını ödemek niyetiyle alırsa, Allah ona ödemeyi kolaylaştırır. Kim de telef etmek niyetiyle alırsa, Allah onu mahveder' buyrulmuştur.",
    source: "Buhârî, İstikraz, 12; Müslim, Müsakat, 34"
  },
  {
    question: "Gıybet ve iftira",
    keywords: ["gıybet hadis", "iftira hadis"],
    answer: "Peygamberimiz (sav) gıybeti şiddetle yasaklamıştır. 'Gıybet nedir bilir misiniz?' diye sormuş, 'Allah ve Resulü daha iyi bilir' dediklerinde 'Kardeşini hoşlanmadığı bir şeyle anmandır' buyurmuştur. 'Gerçekse söylediğin' denilince 'Söylediğin şey onda varsa gıybet etmiş olursun, yoksa iftira etmiş olursun' buyurmuştur. Gıybet, kişiyi cehenneme götüren büyük günahlardandır.",
    source: "Müslim, Birr, 84; Tirmizî, Birr, 22"
  },
];
