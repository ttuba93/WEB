export interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  description: string;
  rating: string;
  url: string;
}

export const products = [
  {
    id: 1,
    name: 'Наушники Marshall Major IV коричневый',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hae/h94/49221104828446/marshall-major-iv-koricnevyj-104024603-3.jpg',
    price: 145845,
    description: 'Bluetooth гарнитура MARSHALL Major IV благодаря своим особенностям подарит вам комфортное прослушивание музыки самых разных жанров.',
    rating: '5/5',
    url: "https://kaspi.kz/shop/p/marshall-major-iv-korichnevyi-104024603/?m=2910006&sr=2&ref=shared_link&c=750000000#!/item",
  },
  {
    id: 2,
    name: 'Наушники JBL Tune 510BT белый',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h3d/h52/33973207105566/jbl-tune-510bt-belyj-101420096-1-Container.jpg',
    price: 23990,
    description: 'Наушники JBL Tune 510BT позволяют наслаждаться мощными басами благодаря технологии JBL Pure Bass без проводов.',
    rating: '5/5',
    url:"https://kaspi.kz/shop/p/jbl-tune-510bt-belyi-101420096/?c=750000000&ref=shared_link#!/item",
  },
  {
    id: 3,
    name: 'Наушники Apple AirPods with Charging Case белый',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb6/h3d/46637140508702/apple-airpods-2-with-charging-case-belyj-4804056-2-Container.jpg',
    price: 67840,
    description: 'AirPods настраиваются в одно касание. Автоматически включаются и устанавливают соединение. Пользоваться ими невероятно легко',
    rating: '5/5',
    url: "https://kaspi.kz/shop/p/apple-airpods-with-charging-case-belyi-4804056/?c=750000000&sr=1&ref=shared_link#!/item",
  },
  {
    id: 4,
    name: 'Смарт-часы Apple Watch SE 2nd Gen 44 мм золотистый',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb8/hb1/62711074553886/apple-watch-se-2nd-generation-40-mm-zolotistyj-106362773-1.jpg',
    price: 136451,
    description: 'Дисплей Retina увеличен более чем на 30% по сравнению с Apple Watch Series 3. На нём умещается больше контента, а ещё вы можете выбрать новые циферблаты и расширения. Просто поднимите запястье — и дисплей сразу включится.',
    rating: '5/5',
    url: "https://kaspi.kz/shop/p/apple-watch-se-2nd-gen-44-mm-zolotistyi-106362773/?c=750000000&sr=22&ref=shared_link",
  },
  {
    id: 5,
    name: 'Фотокамера моментальной печати Fujifilm Instax Mini 11 белый',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hdd/h5d/33137507926046/fujifilm-instax-mini-11-belyj-100788233-1-Container.jpg',
    price: 50930,
    description: 'Фотокамера моментальной печати FujiFilm Instax mini 11 с элегантной белой расцветкой корпуса - это компактный фотоаппарат, который станет надежным спутником любого путешественника. Размеры устройства не превышают 107.6x121.2x67.3 мм (ширина, высота и глубина соответственно), благодаря чему вы сможете уместить его в любой сумке.',
    rating: '5/5',
    url: "https://kaspi.kz/shop/p/fujifilm-instax-mini-11-belyi-100788233/?c=750000000&sr=3&ref=shared_link#!/item",
  },
  {
    id: 6,
    name: 'Проектор VEIDADZ YG300 мультимедийный',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hef/h76/51387499577374/lejiada-yg300-105219862-1.jpg',
    price: 21949,
    description: 'Естественные цвета и оптимальная яркость.',
    rating: '4.5/5',
    url: "https://kaspi.kz/shop/p/veidadz-yg300-mul-timediinyi-105219862/?c=750000000&sr=1&ref=shared_link#!/item",
  },
  {
    id: 7,
    name: 'Гитара Fender Squier SA-150 Dreadnought Natural ',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h7b/hfd/31544039800862/fender-squier-sa-150-dreadnought-natural-14100005-1-Container.jpg',
    price: 59900,
    description: 'Гитара отлично подходит для ежедневных интенсивных занятий. Новая модель обладает ламинированной конструкции с верхней декой из липы и красного дерева на нижней деке и обечайках.',
    rating: '5/5',
    url: "https://kaspi.kz/shop/p/fender-squier-sa-150-dreadnought-natural-14100005/?c=750000000&m=MusicAvenue&sr=2&ref=shared_link#!/item",
  },
  {
    id: 8,
    name: 'Книга Сильвера А.: В конце они оба умрут',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hbc/h14/34401361100830/silvera-a-v-konce-oni-oba-umrut-101280241-1.jpg',
    price: 5225,
    description: 'Однажды ночью сотрудники «Отдела Смерти» звонят Матео Торресу и Руфусу Эметерио, чтобы сообщить им плохие новости: сегодня они умрут...',
    rating: '5/5',
    url: "https://kaspi.kz/shop/p/sil-vera-a-v-kontse-oni-oba-umrut-101280241/?c=750000000&sr=5&ref=shared_link#!/item",
  },
  {
    id: 9,
    name: 'Книга Примаченко О.: К себе нежно',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h68/hd6/49511184400414/primachenko-o-k-sebe-nezhno-101855237-1.jpg',
    price: 4789,
    description: '«К себе нежно» – это новый, очень честный взгляд на любовь к себе. Это книга-медитация, которая призывает к внутреннему разговору и помогает услышать собственный голос среди множества других.',
    rating: '5/5',
    url: "https://kaspi.kz/shop/p/primachenko-o-k-sebe-nezhno-101855237/?c=750000000&sr=1&ref=shared_link#!/item",
  },
  {
    id: 10,
    name: 'Настольная игра Hasbro Монополия Классическая Обновленная C1009',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h0d/h2e/31513526272030/hasbro-monopolia-klassiceskaa-obnovlennaa-c1009-10100767-1-Container.jpg',
    price: 22995,
    description: 'Настольная игра «Классическая монополия» от производителя Hasbro поможет собрать всех членов семьи. Ее суть заключается в том, чтобы приобретать собственность, вкладывать деньги в недвижимость и заключении сделок с партнерами.',
    rating: '5/5',
    url: "https://kaspi.kz/shop/p/hasbro-monopolija-klassicheskaja-obnovlennaja-c1009-10100767/?c=750000000&sr=8&ref=shared_link#!/item",
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/