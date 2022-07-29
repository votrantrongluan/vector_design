import { VectorColor } from '../components/color/VectorColor'
import { scale } from '../components/ScalingUtils'

export const ENTRIES1 = [
  {
    title: 'Beautiful and dramatic Antelope Canyon',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'https://i.imgur.com/UYiroysl.jpg',
    item: [
      { id: 1, illustration: 'https://i.imgur.com/UYiroysl.jpg' },
      { id: 2, illustration: 'https://i.imgur.com/UPrs1EWl.jpg' },
      { id: 3, illustration: 'https://i.imgur.com/MABUbpDl.jpg' },
      { id: 4, illustration: 'https://i.imgur.com/KZsmUi2l.jpg' },
    ],
  },
  {
    title: 'Earlier this morning, NYC',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://i.imgur.com/UPrs1EWl.jpg',
    item: [
      { id: 1, illustration: 'https://i.imgur.com/KZsmUi2l.jpg' },
      { id: 4, illustration: 'https://i.imgur.com/UPrs1EWl.jpg' },
    ],
  },
  {
    title: 'White Pocket Sunset',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
    illustration: 'https://i.imgur.com/MABUbpDl.jpg',
    item: [
      { id: 1, illustration: 'https://i.imgur.com/KZsmUi2l.jpg' },
      { id: 2, illustration: 'https://i.imgur.com/UPrs1EWl.jpg' },
    ],
  },
  {
    title: 'Acrocorinth, Greece',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'https://i.imgur.com/KZsmUi2l.jpg',
    item: [
      { id: 1, illustration: 'https://i.imgur.com/UYiroysl.jpg' },
      { id: 2, illustration: 'https://i.imgur.com/UPrs1EWl.jpg' },
    ],
  },
  {
    title: 'The lone tree, majestic landscape of New Zealand',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://i.imgur.com/2nCt3Sbl.jpg',
    item: [
      { id: 1, illustration: 'https://i.imgur.com/UYiroysl.jpg' },
      { id: 2, illustration: 'https://i.imgur.com/UPrs1EWl.jpg' },
    ],
  },
  {
    title: 'Middle Earth, Germany',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://i.imgur.com/lceHsT6l.jpg',
    item: [
      { id: 1, illustration: 'https://i.imgur.com/UYiroysl.jpg' },
      { id: 2, illustration: 'https://i.imgur.com/UPrs1EWl.jpg' },
    ],
  },
]

export enum TranSlationLanguage {
  Home_Title = 'VECTOR Design',
  Products_Title = 'Products',
}

export const DataHome = [
  {
    name: 'Architect Design',
    item: [
      {
        id: '1',
        name: 'Minimalism - Tối Giản',
        link:
          'https://hoaphatmiennam.vn/wp-content/uploads/2020/10/anh-noi-that-dep-21.jpg',
        imgList: [
          'https://hoaphatmiennam.vn/wp-content/uploads/2020/10/anh-noi-that-dep-21.jpg',
          'https://hoaphatmiennam.vn/wp-content/uploads/2020/10/anh-noi-that-dep-2.jpg.webp',
          'https://hoaphatmiennam.vn/wp-content/uploads/2020/10/anh-noi-that-dep-3.jpg.webp',
        ],
      },
      {
        id: '2',
        name: 'Địa Trung Hải',
        link:
          'https://hoaphatmiennam.vn/wp-content/uploads/2020/10/anh-noi-that-dep-2.jpg.webp',
        imgList: [
          'https://hoaphatmiennam.vn/wp-content/uploads/2020/10/anh-noi-that-dep-21.jpg',
          'https://hoaphatmiennam.vn/wp-content/uploads/2020/10/anh-noi-that-dep-2.jpg.webp',
          'https://hoaphatmiennam.vn/wp-content/uploads/2020/10/anh-noi-that-dep-3.jpg.webp',
        ],
      },
      {
        id: '3',
        name: 'Hiện Đại',
        link:
          'https://hoaphatmiennam.vn/wp-content/uploads/2020/10/anh-noi-that-dep-3.jpg.webp',
        imgList: [
          'https://hoaphatmiennam.vn/wp-content/uploads/2020/10/anh-noi-that-dep-21.jpg',
          'https://hoaphatmiennam.vn/wp-content/uploads/2020/10/anh-noi-that-dep-2.jpg.webp',
          'https://hoaphatmiennam.vn/wp-content/uploads/2020/10/anh-noi-that-dep-3.jpg.webp',
        ],
      }
    ]
  },
  {
    name: 'Interior Design',
    item: [
      {
        id: '1',
        name: 'Minimalism - Tối Giản',
        link: 'https://i.imgur.com/UPrs1EWl.jpg',
      },
      {
        id: '2',
        name: 'Đồng Quê',
        link: 'https://i.imgur.com/UPrs1EWl.jpg',
      },
      {
        id: '3',
        name: 'Rustic',
        link: 'https://i.imgur.com/UPrs1EWl.jpg',
      },
      {
        id: '4',
        name: 'Indochin - Đông Dương',
        link: 'https://i.imgur.com/UPrs1EWl.jpg',
      },
      {
        id: '5',
        name: 'Hiện Đại',
        link: 'https://i.imgur.com/UPrs1EWl.jpg',
      },
    ],
  },
  {
    name: 'Drafts',
    item: [
      {
        id: '1',
        name: 'Tối Giản',
        link: 'https://i.imgur.com/UPrs1EWl.jpg',
      },
      {
        id: '2',
        name: 'Hiện Đại',
        link: 'https://i.imgur.com/UPrs1EWl.jpg',
      },
      {
        id: '3',
        name: 'Bán Cổ Điển',
        link: 'https://i.imgur.com/UPrs1EWl.jpg',
      },
    ],
  },
  {
    name: '3Dprint',
    item: [
      {
        id: '1',
        name: 'Con Người',
        link: 'https://i.imgur.com/UPrs1EWl.jpg',
      },
      {
        id: '2',
        name: 'Cảnh Quan',
        link: 'https://i.imgur.com/UPrs1EWl.jpg',
      },
    ],
  },
]

export enum IndexIcon {
  ZALO,
  MAIL,
  FB,
  YT,
}

export const Tabs = [
  {
    key: 'zalo',
    icon: 'chat',
    label: 'Zalo',
    barColor: VectorColor.white,
    pressColor: VectorColor.greenLight,
    size: {
      width: scale(30),
      height: scale(30),
    },
  },
  {
    key: 'gmail',
    icon: 'mail',
    label: 'Gmail',
    barColor: VectorColor.white,
    pressColor: VectorColor.orange,
    size: {
      width: scale(30),
      height: scale(30),
    },
  },
  {
    key: 'facebook',
    icon: 'facebook',
    label: 'Facebook',
    barColor: VectorColor.white,
    pressColor: VectorColor.blue,
    size: {
      width: scale(30),
      height: scale(30),
    },
  },
  {
    key: 'yt',
    icon: 'youtube',
    label: 'Youtube',
    barColor: VectorColor.white,
    pressColor: VectorColor.red,
    size: {
      width: scale(30),
      height: scale(30),
    },
  },
]

export enum TypeTabsDetail {
  Overview = 'overview',
  Detail = 'detail',
  Offer = 'offer',
  Quote = 'quote',
}

export const TabsDetail = [
  { key: 'overview', title: 'Tổng Quan' },
  { key: 'detail', title: 'Chi Tiết' },
  { key: 'offer', title: 'Đề Xuất' },
  { key: 'quote', title: 'Báo Giá' },
]