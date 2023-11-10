import { Clipboard, Platform } from 'react-native'
import Share from 'react-native-share'

export interface ShareLinkOpt {
  title: string
  url: string
  message?: string
  icon?: string
  subject?: string
  log?: any
  urls?: string[]
}

export interface ShareTextOpt {
  title?: string
  message?: string
  icon?: string
  subject?: string
  log?: any
}

export interface ShareFileOpt {
  failOnCancel?: boolean
  title?: string
  urls?: string[]
  url?: string
  type?: string
  message?: string
  icon?: string
  log?: any
}
export interface SharePDFOpt {
  title?: string
  fileUrl: string
  fileName: string
  type: string
  message?: string
}

export interface SharePDFOpt {
  title?: string
  fileUrl: string
  fileName: string
  type: string
  message?: string
}

interface onPickCallback {
  onPickWhatsApp?: () => void
  onPickMore?: () => void
  onCancel?: () => void
}

const defaultIcon =
  'data:image/png;base64,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'

export default function SharePopup(opts: ShareLinkOpt) {
//   if (
//     GlobalHelper.getStaffLoginFlag() &&
//     GlobalHelper.getStaffSelectedAgentCode()
//   ) {
//     PruModalService.showAlert(
//       getI18n().t(CommonTranslateKey.staff_block_alert_title),
//       getI18n().t(CommonTranslateKey.staff_block_alert_label),
//     )
//     return new Promise((resolve, reject) => reject())
//   }
  /*---------- code VN---------- */
  const {
    url = 'https://www.selfmgmt.com/pac/assessment/?testtype=pop7&function=cac&ac=Y53SH61J2C75&programlang=cht',
    title = '英國保誠',
    message = '保誠保險有限公司',
    icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA4gSURBVHgB7ZxdjBXlGcff5XPPAotgL3TZvRBk/VgUaqVlMZIACdguwQtdNMFIG0iqTZuUTfFCi8HPi7ZCL0i1KaRqMKmsXmDcVkjcTWoVE6jFVlbFKhd8eVFAV9kF9oO+v/fMc5gzO+ecOXNmzrxL5p9Mzjlz5szMef7P1/u87zw1lzRUCmswTqWwCikhliElxDKkhFiGlBDLkBJiGVJCLENKiGVICbEMKSGWISXEMlhPyOmzZ9WHH32sysUzW7errn1vq7GGCcpyHPnvUfXyq6+r1ttvU5lMrSGH1wXzblJtK5YX/N2ihbep1/Z0mffFjrMNNWOh2tu556+q+513R+1vbLhWbXx4g6rTBPnhzX3dxkqunjFDNc66RjXPuU7Nn9eiP1+lbMWYIAScPqNd1+Fe/fqVOnbylDpx4pTqP39+FCmnz36VJ/D9Bz9QXXu7jesTtN/9I7XszjuUjRgzhPhBhA3mXn+d+ky7NwSPRTza8fM8y8FaerSV9Q+cNy7v6Uc3me85/sjnR41LtAFjOstCiI9pwc+fd7N6/8AHOSvgtcfj4latWJazpAFNyhnnWN537es2lmUDxm/RUGMYEydOUC03zlVXz5yhjp/4Ug1oNwZwa3e2/sB8L6ifNk0NDg2pz7RFLGn9vvnMhovY/qcX1RntDufOmZ33m2rjihmHYC1PP/Yr9eD99xiXhea/f/Cfo45brmPHXB3ciT2CxY67Mi4w4VT5ihsYCjG8+o1fiB8d2nV590ESaJx1rUoSVgb14cOfqvEtN6hKQbBudgRdCgR73F3SKbGVhHy16Idq6ran1ITW21UYjBw/qYYOf6Iuff2Nee9FTf00Na6pQY2rr8++NjYoW1BVQhAOQgLFLABCQP1rO0sKC2sa3H/AvA71fmpeywUETdD3M3HlUjXprmWJEhSKkPM7dpk/PkVrcSkM7T+oLuzeoy7u7VGX+r7J7edPT7xrqcpseCBPAJz365Vrcsd4LQVSB987YM7rPWdUyHQ8pLeHVRIIRci3GzerQS2MaZ07jWZ5gZAg7cLuN3xdhhsIve6JTWrSymXmM0L+dv0vfY/jvHEQ4Ier3v9bIpZSNiH9W36jhf1K9sfa1NGmCS03qpG+PjVy7KQhakhrOYIzVqC1Gz/NZ/aj2X5wa6X7Gnk36/j+CTffkPP946bXm9ea6dN8z8s9geFjJ4xy8HlYvw4791gIY4aQM43zSx4zuX21mrzmbt+gjFAGnnteXeh8Y/TvNqxVdZoUBD/iCG3k6z4jdGJO1AKSa1x8q1vHoYM5ax5TLmtg6wt6e370ibQQa3U8mLxmdSDB8ef77l0/yqX5xY1qAavEOmce/1AlhVAxhNgwqIt6I7glMpTWhYYISBHk3IN2FbiTQikmLowsCfdx8a2eHEH1xKcESPmmfb2JjUkhVNEG4bN5gTAlmBfzz8b9EA9c5JCyChkTdYBPggy5t7Dwlv7DILJxCL64T2tXJVkQJBBDkiIjLKguv/yX101lgDraxp9tCE1MZIRARqEMquRNmGztYR2D1pb1O0run35xVFd5T+lK7VkzYSWoq61Vs3RdinK7FBTjANd89rnteRNgTB+vu+8eFQaR15lxQwT3SXrQx6hc0t1hXcoYduIKrklSWMYfEOGOP0GANr6k59oFaObSJXeY2hWV3ELTuoWAYJngotDYXAZ5XXvfziMDcJ6wiIyQGicmTN+3+7JwG52LxOiC0PxVK5aXJUQ3IJaSO1PDy5a0qsZM8NQaIrrfeS/3Gats0wrW/ff9KiwiIYQ0mBhC7alcTa8E7Xe36bnxxY5g3tWTUl8a1yXAUiinF5qe5TcsoPCb8g0CmT4GkPFoxy/0RNlVqnn2bBUWkcyH4P+jGNke17N8QYFFQAbYr2MJgv33f3pNPJHgytRuXW3GlNb94NbkHp9VLaXAdQRtK5cbMkAlcypWTVBtfX5HqEVxaDZrr556bJP66U8eMPsgN7vs5yZfzUeYWBYxgyVCsmQoKJhdlNgB+aIclcKqhXJMu7706mtqnbrXCDIo3Et6yLwgp5SATjuurQm3pjesaNHt3zP7CPC4oGL48KPe3Pt194fLqPxgBSEys4cmI5hDh3vLIsSNBwMKR7RbkgI3Ovd0FU1bURyx5EU6PkWZUifushAMMQDM1KYPqjGNKm6syePvBwrEGzfcsWPxwmjXcyVKCGRs+8PO3J+S1JUlPXEjo4M9qHNeBf/T9xTUXeHuoh5wJkYIWgYZ7hUfZEXVgmRCMz3kszZLsqVCOOZkg0uXRBPI3UiEEDKUbTqjGhgYUA/9+IHc/qYQI+ywECvwuscjn3+h76Nw+o5LI4NDkea3RK9AiRACEYClnWgjQVT+JNYi38cJ3KKfa8RyZzUUHkeIdUBGHMqTjIUc+JchA7eBxlF+kMBOCsuIuxpobLgm7zMxjfspJmgsCCy4JVwWWAqJEMICaQngkrFIGto8J56qrBfegqDcC4PEYpBqwtwKyiPFkPg4RDSOhdKC5XpQ119CU4MCd4grZIE18ww1zn7O745fACttLZHGUoSUMVMcqDohaBj1pkwmY1yW+OT+85fjRmNDdOtrGbGTRLQ5FWGsgI3HE9zAYiBt3X33qlL33+b5bZSoKiGUK3gY0w9BBmRhQOB2j8Qhxc8tUrmlOlAs5ZV7vGFOPO4KVDWGIJxiA6k4HgWgLvXHP+9SHZufMuV2rOOFF3flHWOqBQdLuytBJsbUvOoui0cByKoO6dGuPCcooOJqMrAK5qQF8kTVIV1zal34XXXrLTcbK8g4T1DhesQ1st+U60uMK/gtsQN3GxcSXf1uRut6gAgYqAk5YSeMvOdmsurWeZfHC5IouKu5kPbrZ35nipJBnjNkimC5HqHHMSgEiWZZ7rhBgH9QV1if3bY994xgJc+XmzihN7IsriNxA9dErJCSPdZBxTboQ59r9Cyl26qjRqLFxX7XiBx3QIxZ5Aim0CxfucKQgM6CCDbS1vktLWYfVkShcFUZxOPmmmfHN1ZK1ELcg7OrndK7WE2haVCptAbVaIjGHbE0x+vCWEu1bMkdRTOraj82bc0ULoLDnbDhTgoJgP1YD+kzxwYFLgtShIw3nYyu1JiCijTEdYeYcw8Da6ZwmYEj84EMOi0UAyP5BS03qc43ukwMYOlNsx4bBM3Msk/bdpecXeSexIpZEIGrK1WarxTWBHXeU3AMWssi3lD6kG4OL599PWcFMk/uB/fSn1Ju6NjJ7FrjUj1VokQihLjXwgrCjj1anQzJuDs99uC8gLSWOJRxxg2U9FlRKCnvRs+j0cXAIgYhQxbWMZkW1UoTN6pOCBoqC8zQPKmeVjoQFGIozxz54qgh57hn4Jm9Dpa1NpDr4VjTScixNkiHcK4TBxmgqoQQSPHdAA09rl1C555TxsVEBVxZ68zL7qjfGZUDtLzcwqWbONJdCIqz/1bVCJEmL4CxBv5e1kbFWRuqK3PxtBsDugLtnnPPxq21sQb2RNLeJs8kUJTl9ihBXa3JNauI+6Nnl8SpOFA1QrACcSPeKdrm66szSxgUCB6h4+rco/rNT//WkHRFuCwgeT+VXqXrVrLIQEbpNkDWivEq8yOHDn9sSvhAVrjHhaq7LEbGsjgtm5LWWuWyhAxS4/bVq8y+z5xpZmLfFTcwxB3IRNB3AsxBVBOyIh64Hy9oX92mmJBfUIWFfIl3A4pqMUMUkLSc6m+c8+bFkHhx0RYyBNlxRjJkgLTVuAsoxyI93ZskxnSb2DiQtAtNCbEMqcuyDBWlvec6Npu+Jm7QK2Tazt+bLnJ0DnJDmpXRUOBcx+NqytYnTRsnN3jE2vs7acGXcdpu+F0X0BaKtk+T1qxWU7eO7nZH68BSDdXo70WrJl7dTWjoUkG3Cm/rJrmXqDoIRWIhPBLNDU3fu1tdOpZtuySgqw/fcQxdgb5dvzFQCw753YzefxiChzmvFgjNbdzHcF7ZaBkILmoB+bWQAlO2bModX+8IfNLKpbl9hdoWntcKZl53vBJrV7tIXRbWgXZKY7C8C2nrmNyetQY6/wSFsQ6traYhpn6P9UgjzVxXOdnq63O/4biLrgf7c3A6TpitqSF3vPs8XvB/LmrL4/9BxgWHnDgQeQwZcYTlp0WX+vqyFw3RYIDfQLbpq7W3p+ixU7Y9acg7t/Hxki4qCAa0VXJ9LIrzDpa4fiWIlBBcERs3L/1N0FI0CleDuRvBrlyqwsDbtgPXSFyQjWZpgB6QmSceMeRxTKUuZvCtnlyDNpRi0PmfcSCSWpb02TUn1ETQok/Mmi5xyukUJ81p6HEYBQiw45tm+X5HgKfzELGELqrEoTDgf3DvknzQvQjFIqZMjaGpTiSEFOtzIv0TpdMofzBsg5pBRyvJuGj5NHHxwvyudB6thTDaQuHiCgX5UpCMz52omHuJqWdw1aq9pIpYC39wqpPJ+Pn3IScZ8Lbag0wETvfpcTpbGwrYwZqsaWjFmlGpdBAMOZ1K67Y8ktefGDdsrGTHLhU1qkYIVgERkrpiNQiJdLZWuwP6/pqGmFrzaGgmWRr7IVKynCk6Noi249tV/dTcNQr1eSdD69OkjJSp0bilbEO2/E533AepNaRMclJtd+aFGw3bI6wiQsY1Zi/s54L8vuMzfw7txmIQ+oXOPYYk+R5tHO79RPW7XMx4Wsfu3Jbrfi3nvuCT1vrdj2k9q2MI5/TGHI4fr5OAUefQvzHWoRXAC9MSF4s316/J3ourDzHWFJaQtJZlGdJalmVICbEMKSGWISXEMqSEWIaUEMuQEmIZUkIsQ0qIZUgJsQwpIZYhJcQypIRYhpQQy5ASYhn+D2eAJdwaijKdAAAAAElFTkSuQmCC',
    subject = '',
    // agentCode = 'unknown',
  } = opts

  const shareTitle = title?.length > 0 ? `${title}\n` : ''
  const shareMessage = message?.length > 0 ? `${message}\n` : ''
  /*---------- code COE 23.01 LTS ---------- */
  // const url = opts.url;
  // const title = opts.title || 'Prudential';
  // const message = opts.message ? `${opts.message}\n` : '';
  // const shareingMsg = `${title}\n${message}`;
  // const icon = opts.icon || defaultIcon;
  // const subject = opts.subject || '';
  return Share.open(
    Platform.select({
      ios: {
        activityItemSources: [
          {
            // For sharing text.
            placeholderItem: { type: 'text', content: icon },
            subject: {
              default: subject || shareTitle,
            },
            item: {
              /*---------- code COE VN ---------- */
              default: {
                type: 'text',
                content: `${shareTitle}${shareMessage}`,
              },
              message: {
                type: 'text',
                content: `${shareTitle}${shareMessage}`,
              }, // Specify no text to share via Messages app.
              mail: { type: 'text', content: `${shareTitle}${shareMessage}` }, // Specify no text to share via Mail.
              copyToPasteBoard: {
                type: 'text',
                content: `${shareTitle}${shareMessage}`,
              }, // Specify no text to share via PasteBoard.
              /*---------- code COE 23.01 LTS ---------- */
              // default: { type: 'text', content: shareingMsg },
              // message: { type: 'text', content: shareingMsg }, // Specify no text to share via Messages app.
              // mail: { type: 'text', content: shareingMsg }, // Specify no text to share via Mail.
              // copyToPasteBoard: { type: 'text', content: shareingMsg }, // Specify no text to share via PasteBoard.
            },
          },
          {
            // For using custom icon instead of default text icon at share preview when sharing with message.
            placeholderItem: {
              type: 'url',
              // 顯示在分享彈框的Icon
              content: url,
            },
            item: {
              default: {
                // 分享類型
                type: 'url',
                // 分享類型，只允許url?
                content: `${url}`,
              },
            },
            linkMetadata: {
              // 顯示在分享彈框的title
              title,
              url,
              originUrl: url,
              icon,
            },
          },
        ],
      },
      default: {
        failOnCancel: false,
        type: 'url',
        title,
        subject: subject || title,
        /*---------- code VN ---------- */
        message: `${shareTitle}${shareMessage}${url}`,
        /*---------- code COE 23.01 LTS ---------- */
        // message: `${shareingMsg}${url}`,
      },
    }),
  ).then((data) => {
  })
}

export function ShareLinkForSingleWhatsApp(opts: ShareLinkOpt) {
  const {
    url = 'https://www.selfmgmt.com/pac/assessment/?testtype=pop7&function=cac&ac=Y53SH61J2C75&programlang=cht',
    title = '英國保誠',
    message = '保誠保險有限公司',
    icon = defaultIcon,
    subject = '',
    // agentCode = 'unknown',
  } = opts

  return Share.shareSingle(
    Platform.select({
      default: {
        type: 'url',
        title: title,
        subject: title,
        message: `${message}\n`,
        url,
        social: Share.Social.WHATSAPP,
        whatsAppNumber: '',
      },
    }),
  ).then((data) => {})
}

export const ShareFiles = (opts: ShareFileOpt) => {
  return Share.open({ ...opts }).then((data) => {
    let fileName: any = ''
    if (opts.url && opts.url.split('/').length) {
      fileName = opts.url?.split('/').pop()
    }
    return data
  })
}

export const shareText = (opts: ShareTextOpt) => {
  const { message = '', subject = '', title = '', icon = defaultIcon } = opts
  return Share.open({
    type: 'text',
    subject: subject || message,
    message: message,
  }).then((data) => {})
}

export const shareStandardLink = (opts: ShareLinkOpt) => {
  const {
    url = 'http://test.e-ink.top/portal/redirect/prudna-zhhk/?redirect=https://www.selfmgmt.com/pac/assessment/?testtype=pop7&function=cac&ac=Y53SH61J2C75&programlang=cht',
    title = 'PRUDNA評估問卷',
    message = '[英國保誠]招聘經理Mia邀請您完成PRUDNA測評',
    icon = defaultIcon,
  } = opts

  Share.open(
    Platform.select({
      ios: {
        activityItemSources: [
          {
            // For sharing text.
            placeholderItem: { type: 'text', content: url },
            subject: {
              default: title,
            },
            item: {
              default: { type: 'text', content: `${title}\n${message}\n` },
              message: { type: 'text', content: `${title}\n${message}\n` }, // Specify no text to share via Messages app.
              mail: { type: 'text', content: `${title}\n${message}\n` }, // Specify no text to share via Mail.
              copyToPasteBoard: {
                type: 'text',
                content: `${title}\n${message}\n`,
              }, // Specify no text to share via PasteBoard.
            },
          },
          {
            placeholderItem: {
              type: 'url',
              content: url,
            },
            item: {
              default: {
                type: 'url',
                content: `${url}`,
              },
            },
            linkMetadata: {
              // 鏈接render之前顯示在分享頭部彈框的title, url
              title,
              // icon,
              url,
              originalUrl: url,
            },
          },
        ],
      },
      default: {
        type: 'url',
        title,
        subject: title,
        message: `${title}\n${message}\n${url}`,
      },
    }),
  )
}

export const sharePDF = (opts: SharePDFOpt) => {
  if (Platform.OS === 'ios') {
    return sharePDFWithIOS(opts)
  } else {
    return sharePDFWithAndroid(opts)
  }
}

const sharePDFWithIOS = (opts: SharePDFOpt) => {
  const { fileUrl, type, fileName, title, message } = opts
  let options = {
    type: type,
    url: fileUrl,
    fileName: fileName,
    title: title,
    message: message,
  }
  Share.open(options)
}

function sharePDFWithAndroid(opts: SharePDFOpt) {
  let { fileUrl, type, fileName, title = '', message = '' } = opts
  // let filePath: string = '';
  //   let dirs = RNFetchBlob.fs.dirs

  //   RNFetchBlob.fs.readFile(fileUrl, 'base64').then(async (base64Data) => {
  //     base64Data = `data:${type};base64,` + base64Data
  //     // console.log('Debug --- base64Data', base64Data);

  //     await Share.open({
  //       url: base64Data,
  //       filename: fileName,
  //       title: title,
  //       message: message,
  //     })
  //   })
}
/**
 * join the share message items with \n
 * @returns full message
 */
function concatShareMessage(
  url: string | undefined,
  title: string | undefined,
  message: string | undefined,
): string {
  const arrMessage = []
  if (title) {
    arrMessage.push(title)
  }
  if (message) {
    arrMessage.push(message)
  }
  if (url) {
    arrMessage.push(url)
  }
  return arrMessage.join('\n')
}
