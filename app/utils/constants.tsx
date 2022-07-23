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
        name: 'Architect A',
        link:
          'https://hoaphatmiennam.vn/wp-content/uploads/2020/10/anh-noi-that-dep-21.jpg',
      },
      {
        id: '2',
        name: 'Architect B',
        link:
          'https://hoaphatmiennam.vn/wp-content/uploads/2020/10/anh-noi-that-dep-2.jpg.webp',
      },
      {
        id: '3',
        name: 'Architect C',
        link:
          'https://hoaphatmiennam.vn/wp-content/uploads/2020/10/anh-noi-that-dep-3.jpg.webp',
      },
      {
        id: '4',
        name: 'Architect D',
        link:
          'https://hoaphatmiennam.vn/wp-content/uploads/2020/10/anh-noi-that-dep-14.jpg.webp',
      },
      {
        id: '5',
        name: 'Architect E',
        link:
          'https://hoaphatmiennam.vn/wp-content/uploads/2020/10/anh-noi-that-dep-13.jpg.webp',
      },
      {
        id: '6',
        name: 'Architect F',
        link:
          'https://hoaphatmiennam.vn/wp-content/uploads/2020/10/anh-noi-that-dep-3.jpg.webp',
      },
    ],
  },
  {
    name: 'Interior Design',
    item: [
      {
        id: '1',
        name: 'Interior A',
        link: 'https://i.imgur.com/UPrs1EWl.jpg',
      },
      {
        id: '2',
        name: 'Interior B',
        link: 'https://i.imgur.com/UPrs1EWl.jpg',
      },
      {
        id: '3',
        name: 'Interior C',
        link: 'https://i.imgur.com/UPrs1EWl.jpg',
      },
      {
        id: '4',
        name: 'Interior D',
        link: 'https://i.imgur.com/UPrs1EWl.jpg',
      },
      {
        id: '5',
        name: 'Interior E',
        link: 'https://i.imgur.com/UPrs1EWl.jpg',
      },
      {
        id: '6',
        name: 'Interior F',
        link: 'https://i.imgur.com/UPrs1EWl.jpg',
      },
    ],
  },
  {
    name: 'Drafts',
    item: [
      {
        id: '1',
        name: 'Drafts A',
        link: 'https://i.imgur.com/UPrs1EWl.jpg',
      },
      {
        id: '2',
        name: 'Drafts B',
        link: 'https://i.imgur.com/UPrs1EWl.jpg',
      },
      {
        id: '3',
        name: 'Drafts C',
        link: 'https://i.imgur.com/UPrs1EWl.jpg',
      },
      {
        id: '4',
        name: 'Drafts D',
        link: 'https://i.imgur.com/UPrs1EWl.jpg',
      },
      {
        id: '5',
        name: 'Drafts E',
        link: 'https://i.imgur.com/UPrs1EWl.jpg',
      },
      {
        id: '6',
        name: 'Drafts F',
        link: 'https://i.imgur.com/UPrs1EWl.jpg',
      },
    ],
  },
  {
    name: '3Dprint',
    item: [
      {
        id: '1',
        name: '3Dprint A',
        link: 'https://i.imgur.com/UPrs1EWl.jpg',
      },
      {
        id: '2',
        name: '3Dprint B',
        link: 'https://i.imgur.com/UPrs1EWl.jpg',
      },
      {
        id: '3',
        name: '3Dprint C',
        link: 'https://i.imgur.com/UPrs1EWl.jpg',
      },
      {
        id: '4',
        name: '3Dprint D',
        link: 'https://i.imgur.com/UPrs1EWl.jpg',
      },
      {
        id: '5',
        name: '3Dprint E',
        link: 'https://i.imgur.com/UPrs1EWl.jpg',
      },
      {
        id: '6',
        name: '3Dprint F',
        link: 'https://i.imgur.com/UPrs1EWl.jpg',
      },
    ],
  },
]

export const Tabs = [
  {
    key: 'zalo',
    icon: 'chat',
    label: 'Zalo',
    barColor: '#388E3C',
    pressColor: 'rgba(255, 255, 255, 0.16)',
    size: {
      width: scale(30),
      height: scale(30),
    },
  },
  {
    key: 'gmail',
    icon: 'mail',
    label: 'Gmail',
    barColor: '#B71C1C',
    pressColor: 'rgba(255, 255, 255, 0.16)',
    size: {
      width: scale(30),
      height: scale(30),
    },
  },
  {
    key: 'facebook',
    icon: 'facebook',
    label: 'Facebook',
    barColor: '#E64A19',
    pressColor: 'rgba(255, 255, 255, 0.16)',
    size: {
      width: scale(30),
      height: scale(30),
    },
  },
  {
    key: 'yt',
    icon: 'youtube',
    label: 'Youtube',
    barColor: '#E64A69',
    pressColor: 'rgba(255, 255, 255, 0.16)',
    size: {
      width: scale(30),
      height: scale(30),
    },
  },
]
