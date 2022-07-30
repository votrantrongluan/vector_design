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
      }, {
        id: '4',
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
        id: '5',
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
        id: '6',
        name: 'Hiện Đại',
        link:
          'https://hoaphatmiennam.vn/wp-content/uploads/2020/10/anh-noi-that-dep-3.jpg.webp',
        imgList: [
          'https://hoaphatmiennam.vn/wp-content/uploads/2020/10/anh-noi-that-dep-21.jpg',
          'https://hoaphatmiennam.vn/wp-content/uploads/2020/10/anh-noi-that-dep-2.jpg.webp',
          'https://hoaphatmiennam.vn/wp-content/uploads/2020/10/anh-noi-that-dep-3.jpg.webp',
        ],
      },
    ]
  },
  {
    name: 'Interior Design',
    item: [
      {
        id: '1',
        name: 'Minimalism - Tối Giản',
        link: 'https://i.imgur.com/UPrs1EWl.jpg',
        imgList: [
          'https://hoaphatmiennam.vn/wp-content/uploads/2020/10/anh-noi-that-dep-21.jpg',
          'https://hoaphatmiennam.vn/wp-content/uploads/2020/10/anh-noi-that-dep-2.jpg.webp',
          'https://hoaphatmiennam.vn/wp-content/uploads/2020/10/anh-noi-that-dep-3.jpg.webp',
        ],
      },
      {
        id: '2',
        name: 'Đồng Quê',
        link: 'https://hoaphatmiennam.vn/wp-content/uploads/2020/10/anh-noi-that-dep-2.jpg.webp',
        imgList: [
          'https://hoaphatmiennam.vn/wp-content/uploads/2020/10/anh-noi-that-dep-21.jpg',
          'https://hoaphatmiennam.vn/wp-content/uploads/2020/10/anh-noi-that-dep-2.jpg.webp',
          'https://hoaphatmiennam.vn/wp-content/uploads/2020/10/anh-noi-that-dep-3.jpg.webp',
        ],
      },
      {
        id: '3',
        name: 'Rustic',
        link: 'https://i.imgur.com/UPrs1EWl.jpg',
        imgList: [
          'https://hoaphatmiennam.vn/wp-content/uploads/2020/10/anh-noi-that-dep-21.jpg',
          'https://hoaphatmiennam.vn/wp-content/uploads/2020/10/anh-noi-that-dep-2.jpg.webp',
          'https://hoaphatmiennam.vn/wp-content/uploads/2020/10/anh-noi-that-dep-3.jpg.webp',
        ],
      },
      {
        id: '4',
        name: 'Indochin - Đông Dương',
        link: 'https://hoaphatmiennam.vn/wp-content/uploads/2020/10/anh-noi-that-dep-2.jpg.webp',
        imgList: [
          'https://hoaphatmiennam.vn/wp-content/uploads/2020/10/anh-noi-that-dep-21.jpg',
          'https://hoaphatmiennam.vn/wp-content/uploads/2020/10/anh-noi-that-dep-2.jpg.webp',
          'https://hoaphatmiennam.vn/wp-content/uploads/2020/10/anh-noi-that-dep-3.jpg.webp',
        ],
      },
      {
        id: '5',
        name: 'Hiện Đại',
        link: 'https://i.imgur.com/UPrs1EWl.jpg',
        imgList: [
          'https://hoaphatmiennam.vn/wp-content/uploads/2020/10/anh-noi-that-dep-21.jpg',
          'https://hoaphatmiennam.vn/wp-content/uploads/2020/10/anh-noi-that-dep-2.jpg.webp',
          'https://hoaphatmiennam.vn/wp-content/uploads/2020/10/anh-noi-that-dep-3.jpg.webp',
        ],
      },
    ],
  },
  {
    name: 'Drafts',
    item: [
      {
        id: '1',
        name: 'Tối Giản',
        link: 'https://hoaphatmiennam.vn/wp-content/uploads/2020/10/anh-noi-that-dep-3.jpg.webp',
        imgList: [
          'https://hoaphatmiennam.vn/wp-content/uploads/2020/10/anh-noi-that-dep-21.jpg',
          'https://hoaphatmiennam.vn/wp-content/uploads/2020/10/anh-noi-that-dep-2.jpg.webp',
          'https://hoaphatmiennam.vn/wp-content/uploads/2020/10/anh-noi-that-dep-3.jpg.webp',
        ],
      },
      {
        id: '2',
        name: 'Hiện Đại',
        link: 'https://i.imgur.com/UPrs1EWl.jpg',
        imgList: [
          'https://hoaphatmiennam.vn/wp-content/uploads/2020/10/anh-noi-that-dep-21.jpg',
          'https://hoaphatmiennam.vn/wp-content/uploads/2020/10/anh-noi-that-dep-2.jpg.webp',
          'https://hoaphatmiennam.vn/wp-content/uploads/2020/10/anh-noi-that-dep-3.jpg.webp',
        ],
      },
      {
        id: '3',
        name: 'Bán Cổ Điển',
        link: 'https://hoaphatmiennam.vn/wp-content/uploads/2020/10/anh-noi-that-dep-3.jpg.webp',
        imgList: [
          'https://hoaphatmiennam.vn/wp-content/uploads/2020/10/anh-noi-that-dep-21.jpg',
          'https://hoaphatmiennam.vn/wp-content/uploads/2020/10/anh-noi-that-dep-2.jpg.webp',
          'https://hoaphatmiennam.vn/wp-content/uploads/2020/10/anh-noi-that-dep-3.jpg.webp',
        ],
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
        imgList: [
          'https://hoaphatmiennam.vn/wp-content/uploads/2020/10/anh-noi-that-dep-21.jpg',
          'https://hoaphatmiennam.vn/wp-content/uploads/2020/10/anh-noi-that-dep-2.jpg.webp',
          'https://hoaphatmiennam.vn/wp-content/uploads/2020/10/anh-noi-that-dep-3.jpg.webp',
        ],
      },
      {
        id: '2',
        name: 'Cảnh Quan',
        link: 'https://hoaphatmiennam.vn/wp-content/uploads/2020/10/anh-noi-that-dep-3.jpg.webp',
        imgList: [
          'https://hoaphatmiennam.vn/wp-content/uploads/2020/10/anh-noi-that-dep-21.jpg',
          'https://hoaphatmiennam.vn/wp-content/uploads/2020/10/anh-noi-that-dep-2.jpg.webp',
          'https://hoaphatmiennam.vn/wp-content/uploads/2020/10/anh-noi-that-dep-3.jpg.webp',
        ],
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

export enum TypeIndexIcon {
  ZALO = 'zalo',
  MAIL = 'gmail',
  FB = 'facebook',
  YT = 'yt',
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

export const DataInfoOverview = {
  title: 'Chi tiet san pham',
  data: [
    {
      id: '1', name: 'Khởi nguồn', description: [
        {
          id: '1a',
          title: 'Ban muon ghi gi o day, chuc ban ngay moi an lanh hanh phuc vui ve nhe'
        },
        {
          id: '2a',
          title: 'Ban muon ghi gi o day, chuc ban ngay moi an lanh hanh phuc vui ve nhe'
        },
        {
          id: '3a',
          title: 'Ban muon ghi gi o day, chuc ban ngay moi an lanh hanh phuc vui ve nhe'
        },
        {
          id: '4a',
          title: 'Ban muon ghi gi o day, chuc ban ngay moi an lanh hanh phuc vui ve nhe'
        }
      ]
    },
    {
      id: '2', name: 'Đặc điểm', description: [
        {
          id: '1a',
          title: 'Ban muon ghi gi o day, chuc ban ngay moi an lanh hanh phuc vui ve nhe'
        },
        {
          id: '2a',
          title: 'Ban muon ghi gi o day, chuc ban ngay moi an lanh hanh phuc vui ve nhe'
        }
      ]
    },
  ]
}


export const DataInfoDetail = {
  title: 'Chi tiet san pham',
  data: [
    {
      id: '1', name: 'Chất liệu', description: [
        {
          id: '1a',
          title: 'Ban muon ghi gi o day, chuc ban ngay moi an lanh hanh phuc vui ve nhe'
        },
        {
          id: '2a',
          title: 'Ban muon ghi gi o day, chuc ban ngay moi an lanh hanh phuc vui ve nhe'
        }, {
          id: '3a',
          title: 'Ban muon ghi gi o day, chuc ban ngay moi an lanh hanh phuc vui ve nhe'
        },
        {
          id: '4a',
          title: 'Ban muon ghi gi o day, chuc ban ngay moi an lanh hanh phuc vui ve nhe'
        }
      ]
    },
    {
      id: '2', name: 'Trang trí, họa tiết, hoa văn', description: [
        {
          id: '1a',
          title: 'Ban muon ghi gi o day, chuc ban ngay moi an lanh hanh phuc vui ve nhe'
        },
        {
          id: '2a',
          title: 'Ban muon ghi gi o day, chuc ban ngay moi an lanh hanh phuc vui ve nhe'
        }
      ]
    },
  ]
}


export const DataInfoOffer = {
  title: 'Chi tiet san pham',
  data: [
    {
      id: '1', name: 'Màu sắc, Chất liệu', description: [
        {
          id: '1a',
          title: 'Ban muon ghi gi o day, chuc ban ngay moi an lanh hanh phuc vui ve nhe'
        },
        {
          id: '2a',
          title: 'Ban muon ghi gi o day, chuc ban ngay moi an lanh hanh phuc vui ve nhe'
        }
      ]
    },
    {
      id: '2', name: 'Trang trí, hoa văn, họa tiết', description: [
        {
          id: '1a',
          title: 'Ban muon ghi gi o day, chuc ban ngay moi an lanh hanh phuc vui ve nhe'
        },
        {
          id: '2a',
          title: 'Ban muon ghi gi o day, chuc ban ngay moi an lanh hanh phuc vui ve nhe'
        }
      ]
    },
  ]
}


export const DataInfoQuote = {
  title: 'Chi tiet san pham',
  dataDesign: [
    {
      id: '1', name: 'Thông tin', description: [
        {
          id: '1a',
          title: 'Ban muon ghi gi o day, chuc ban ngay moi an lanh hanh phuc vui ve nhe'
        },
        {
          id: '2a',
          title: 'Ban muon ghi gi o day, chuc ban ngay moi an lanh hanh phuc vui ve nhe'
        },
      ]
    },
    {
      id: '2', name: 'Báo giá', description: [
        {
          id: '1a',
          title: ''
        },
      ]
    },
    {
      id: '3', name: 'Ghi chú tính giá', description: [
        {
          id: '1a',
          title: `Dự toán trên tính cho cấu tạo một phòng ngủ cơ bản, đang thực hiện tại AHDesign - Bếp Xinh. Giá dự toán trên có thể thay đổi theo sự lựa chọn các loại vật liệu, thiết bị, phụ kiện theo thực tế thi công. Để có thông tin chính xác quý khách vui lòng gọi đến số máy miễn phí 1800.68.59 hoặc đường dây nóng 0922.185.185 - 0926.185.185 để được tư vấn và giải đáp những thắc mắc.`
        },
      ]
    }
  ],
  dataConstruction: [
    {
      id: '1', name: 'Thông tin', description: [
        {
          id: '1a',
          title: 'Ban muon ghi gi o day, chuc ban ngay moi an lanh hanh phuc vui ve nhe'
        },
      ]
    },
    {
      id: '2', name: 'Ghi chú tính giá', description: [
        {
          id: '1a',
          title: `Dự toán trên tính cho cấu tạo một phòng ngủ cơ bản, đang thực hiện tại AHDesign - Bếp Xinh. Giá dự toán trên có thể thay đổi theo sự lựa chọn các loại vật liệu, thiết bị, phụ kiện theo thực tế thi công. Để có thông tin chính xác quý khách vui lòng gọi đến số máy miễn phí 1800.68.59 hoặc đường dây nóng 0922.185.185 - 0926.185.185 để được tư vấn và giải đáp những thắc mắc.`
        },
      ]
    }
  ]
}

export const linkYoutube = 'https://www.youtube.com/channel/UCGK-qyRVEecY_JASXrgMzFQ'
export const linkGmail = 'vectordesigncomp@gmail.com'
export const linkZalo = 'https://zalo.me/0981818866'
export const linkFB = 'https://www.facebook.com/luan.vo.5686/'
export const validEmail = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/

export enum TypeTabsQuote {
  Design = 'design',
  Construction = 'construction',
}

export const TabsQuote = [
  { key: 'design', title: 'Thiết kế' },
  { key: 'construction', title: 'Thi công' },
]