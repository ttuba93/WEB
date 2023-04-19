export interface Product {
    id: number;
    name: string;
    image: string;
    price: number;
    description: string;
    rating: string;
    url: string;
    category: string;
    likes: number;
  }
  
  export const products = [
    {
      id: 1,
      name: 'Наушники Marshall Major IV коричневый',
      image:
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hae/h94/49221104828446/marshall-major-iv-koricnevyj-104024603-3.jpg',
      price: 145845,
      description:
        'Bluetooth гарнитура MARSHALL Major IV благодаря своим особенностям подарит вам комфортное прослушивание музыки самых разных жанров.',
      rating: '5/5',
      url: 'https://kaspi.kz/shop/p/marshall-major-iv-korichnevyi-104024603/?m=2910006&sr=2&ref=shared_link&c=750000000#!/item',
      category: 'electronics',
      likes: 7589,
    },
    {
      id: 2,
      name: 'Наушники JBL Tune 510BT белый',
      image:
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h3d/h52/33973207105566/jbl-tune-510bt-belyj-101420096-1-Container.jpg',
      price: 23990,
      description:
        'Наушники JBL Tune 510BT позволяют наслаждаться мощными басами благодаря технологии JBL Pure Bass без проводов.',
      rating: '5/5',
      url: 'https://kaspi.kz/shop/p/jbl-tune-510bt-belyi-101420096/?c=750000000&ref=shared_link#!/item',
      category: 'electronics',
      likes: 74,
    },
    {
      id: 3,
      name: 'Наушники Apple AirPods with Charging Case белый',
      image:
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb6/h3d/46637140508702/apple-airpods-2-with-charging-case-belyj-4804056-2-Container.jpg',
      price: 67840,
      description:
        'AirPods настраиваются в одно касание. Автоматически включаются и устанавливают соединение. Пользоваться ими невероятно легко',
      rating: '5/5',
      url: 'https://kaspi.kz/shop/p/apple-airpods-with-charging-case-belyi-4804056/?c=750000000&sr=1&ref=shared_link#!/item',
      category: 'electronics',
      likes: 98495,
    },
    {
      id: 4,
      name: 'Смарт-часы Apple Watch SE 2nd Gen 44 мм золотистый',
      image:
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb8/hb1/62711074553886/apple-watch-se-2nd-generation-40-mm-zolotistyj-106362773-1.jpg',
      price: 136451,
      description:
        'Дисплей Retina увеличен более чем на 30% по сравнению с Apple Watch Series 3. На нём умещается больше контента, а ещё вы можете выбрать новые циферблаты и расширения. Просто поднимите запястье — и дисплей сразу включится.',
      rating: '5/5',
      url: 'https://kaspi.kz/shop/p/apple-watch-se-2nd-gen-44-mm-zolotistyi-106362773/?c=750000000&sr=22&ref=shared_link',
      category: 'electronics',
      likes: 8974,
    },
    {
      id: 5,
      name: 'Фотокамера моментальной печати Fujifilm Instax Mini 11 белый',
      image:
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hdd/h5d/33137507926046/fujifilm-instax-mini-11-belyj-100788233-1-Container.jpg',
      price: 50930,
      description:
        'Фотокамера моментальной печати FujiFilm Instax mini 11 с элегантной белой расцветкой корпуса - это компактный фотоаппарат, который станет надежным спутником любого путешественника. Размеры устройства не превышают 107.6x121.2x67.3 мм (ширина, высота и глубина соответственно), благодаря чему вы сможете уместить его в любой сумке.',
      rating: '5/5',
      url: 'https://kaspi.kz/shop/p/fujifilm-instax-mini-11-belyi-100788233/?c=750000000&sr=3&ref=shared_link#!/item',
      category: 'electronics',
      likes: 89498,
    },
    {
      id: 6,
      name: 'Книга Сильвера А.: В конце они оба умрут',
      image:
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hbc/h14/34401361100830/silvera-a-v-konce-oni-oba-umrut-101280241-1.jpg',
      price: 5225,
      description:
        'Однажды ночью сотрудники «Отдела Смерти» звонят Матео Торресу и Руфусу Эметерио, чтобы сообщить им плохие новости: сегодня они умрут...',
      rating: '5/5',
      url: 'https://kaspi.kz/shop/p/sil-vera-a-v-kontse-oni-oba-umrut-101280241/?c=750000000&sr=5&ref=shared_link#!/item',
      category: 'books',
      likes: 98498,
    },
    {
      id: 7,
      name: 'Книга Примаченко О.: К себе нежно',
      image:
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h68/hd6/49511184400414/primachenko-o-k-sebe-nezhno-101855237-1.jpg',
      price: 4789,
      description:
        'К себе нежно» – это новый, очень честный взгляд на любовь к себе. Это книга-медитация, которая призывает к внутреннему разговору и помогает услышать собственный голос среди множества других.',
      rating: '5/5',
      url: 'https://kaspi.kz/shop/p/primachenko-o-k-sebe-nezhno-101855237/?c=750000000&sr=1&ref=shared_link#!/item',
      category: 'books',
      likes: 1650,
    },
    {
      id: 8,
      name: 'Книга Сильванова К., Малисова Е.: Лето в пионерском галстуке',
      image:
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc7/h2a/47571550568478/silvanova-k-malisova-e-leto-v-pionerskom-galstuke-103070416-1.jpg',
      price: 4583,
      description:
        'Юра возвращается в пионерский лагерь своей юности спустя двадцать лет. В руинах прошлого он надеется отыскать путь в настоящее, к человеку, которого когда-то любил',
      rating: '5/5',
      url: 'https://kaspi.kz/shop/p/sil-vanova-k-malisova-e-leto-v-pionerskom-galstuke-103070416/?c=750000000#!/item',
      category: 'books',
      likes: 1478,
    },
    {
      id: 9,
      name: 'Книга Кристи А.: Убийства по алфавиту',
      image:
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hfc/h5b/34248519352350/kristi-a-ubijstva-po-alfavitu-101516844-1.jpg',
      price: 1837,
      description:
        'В английском алфавите 26 букв. В подписи преступника, затеявшего с Эркюлем Пуаро игру при помощи писем, всего три буквы - первые, А, B и С. Он планирует совершить убийства в местах, названия которых расположены в алфавитном порядке. ',
      rating: '5/5',
      url: 'https://kaspi.kz/shop/p/kristi-a-ubiistva-po-alfavitu-101516844/?c=750000000#!/item',
      category: 'books',
      likes: 54187,
    },
    {
      id: 10,
      name: 'Книга Коэльо П.: Алхимик',
      image:
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h71/h43/31576355897374/koel-o-p-alkhimik-26018156-1.jpg',
      price: 2497,
      description:
        'Алхимик — самый известный роман бразильского писателя Пауло Коэльо, любимая книга миллионов людей во всем мире. В юности люди не боятся мечтать, все кажется им возможным.',
      rating: '5/5',
      url: 'https://kaspi.kz/shop/p/koel-o-p-alhimik-26018156/?c=750000000#!/item',
      category: 'books',
      likes: 154,
    },
    {
      id: 11,
      name: 'Рубашка Koton 3WAK60255UW000 белый 40',
      image:
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h4a/h6b/68034000191518/koton-3wak60255uw000-108506905-1jpg.jpg',
      price: 6997,
      description: 'Рубашка облегающего кроя изо льна',
      rating: '4/5',
      url: 'https://kaspi.kz/shop/p/koton-3wak60255uw000-belyi-40-108155769/?c=750000000#!/item',
      category: 'fashion',
      likes: 478,
    },
    {
      id: 12,
      name: 'Платье FollowMe BV31122201 черный 42',
      image:
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha0/h22/67661089865758/followme-bv31122201-chernyi-108354212-1.jpg',
      price: 8000,
      description: 'Bечернее платье, состав: полиэстер',
      rating: '5/5',
      url: 'https://kaspi.kz/shop/p/followme-bv31122201-chernyi-42-108354213/?c=750000000#!/item',
      category: 'fashion',
      likes: 56149,
    },
    {
      id: 13,
      name: 'Футболка PDWR 22012869 белый 44',
      image:
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h44/h66/62260925825054/pdwr-22012869-belyj-106356755-1.jpg',
      price: 6600,
      description: 'Футболка с круглым вырезом, состав: эластан, хлопок',
      rating: '5/5',
      url: 'https://kaspi.kz/shop/p/pdwr-22012869-belyi-44-106356822/?c=750000000#!/item',
      category: 'fashion',
      likes: 47849,
    },
    {
      id: 14,
      name: 'Пиджак Your.kzt kzt4 черный 42-44',
      image:
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h90/h06/64912856088606/your-kzt-kzt4-chernyi-107284839-1.jpg',
      price: 10850,
      description: 'состав: полиэстер, хлопок',
      rating: '4.5/5',
      url: 'https://kaspi.kz/shop/p/your-kzt-kzt4-chernyi-42-44-107284843/?c=750000000#!/item',
      category: 'fashion',
      likes: 519,
    },
    {
      id: 15,
      name: 'Худи Koton 3WAL10090IK265 42',
      image:
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5e/h56/67296987217950/koton-3wal10090ik265-107369748-1.jpg',
      price: 6490,
      description: 'состав: полиэстер, ,хлопок; сезон: круглогодичный',
      rating: '5/5',
      url: 'https://kaspi.kz/shop/p/koton-3wal10090ik265-42-106826969/?c=750000000#!/item',
      category: 'fashion',
      likes: 5414,
    },
    {
      id: 16,
      name: 'Кольцо GOLD ZAMIRA ZAM06-485 17.5 1.67 г золото, фианит',
      image:
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h24/hbe/52722400231454/gold-zamira-gold-zamira-zam06-485-17-5-1-67-g-zoloto-fianit-105950519-1.jpg',
      price: 53836,
      description: 'проба: 585; материал: золото; вставка: фианит',
      rating: '5/5',
      url: 'https://kaspi.kz/shop/p/gold-zamira-zam06-485-17-5-1-67-g-zoloto-fianit-105950519/?c=750000000#!/item',
      category: 'jewerly',
      likes: 10125,
    },
    {
      id: 17,
      name: 'Zere подвеска Древо жизни 01-13-32 3.4 г золото, фианит',
      image:
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h44/hff/50925196869662/podveska-zere-zoloto-3-45-104950688-1.jpg',
      price: 89296,
      description: 'проба: 585; материал: золото; вставка: фианит',
      rating: '5/5',
      url: 'https://kaspi.kz/shop/p/zere-podveska-drevo-zhizni-01-13-32-3-4-g-zoloto-fianit-104950688/?c=750000000#!/item',
      category: 'jewerly',
      likes: 6854,
    },
    {
      id: 18,
      name: 'Felice подвеска KE00130 3.2 г серебро, цирконий',
      image:
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h83/h47/67826497880094/felice-podveska-ke00130-3-2-g-serebro-tsirkonii-103883080-1.jpg',
      price: 8900,
      description: 'проба: 925 ; материал: серебро; вставка: цирконий',
      rating: '5/5',
      url: 'https://kaspi.kz/shop/p/felice-podveska-ke00130-3-2-g-serebro-tsirkonii-103883080/?c=750000000#!/item',
      category: 'jewerly',
      likes: 987,
    },
    {
      id: 19,
      name: 'Серьги SOKOLOV 87020055 2.29 г серебро, бриллиант',
      image:
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he3/h81/47011081650206/sokolov-87020055-serebro-brilliant-102798899-1.jpg',
      price: 31990,
      description:
        'SOKOLOV – международный ювелирный бренд, представленный на рынках СНГ, Европы, Ближнего Востока, Азии и Америки. В центре внимания бренда – совершенство его произведений и принципы высочайшего качества.',
      rating: '5/5',
      url: 'https://kaspi.kz/shop/p/sokolov-87020055-2-29-g-serebro-brilliant-102798899/?c=750000000#!/item',
      category: 'jewerly',
      likes: 74,
    },
    {
      id: 20,
      name: 'Браслет Orlando Silver BRAC17 21 см 2.1 г серебро, без вставок',
      image:
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf0/h3d/52683203280926/orlando-silver-brac17-21-sm-2-1-g-serebro-bez-vstavok-105935857-1.jpg',
      price: 11400,
      description: 'проба: 925; материал: серебро; вставка: без вставок',
      rating: '5/5',
      url: 'https://kaspi.kz/shop/p/orlando-silver-brac17-21-sm-2-1-g-serebro-bez-vstavok-105935857/?c=750000000#!/item',
      category: 'jewerly',
      likes: 1560,
    },
  ];
  
  /*
  Copyright Google LLC. All Rights Reserved.
  Use of this source code is governed by an MIT-style license that
  can be found in the LICENSE file at https://angular.io/license
  */
  