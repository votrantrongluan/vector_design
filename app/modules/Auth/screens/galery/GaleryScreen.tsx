import AsyncStorage from '@react-native-community/async-storage'
import { useFocusEffect } from '@react-navigation/native'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import {
  View,
  StyleSheet,
  Dimensions,
  FlatList,
  Text,
  TouchableOpacity,
  LayoutAnimation,
  Linking,
  Alert,
} from 'react-native'
import { WebView } from 'react-native-webview'
//@ts-ignore
import Video from 'react-native-video'
import Share from 'react-native-share'
import ImageViewer from 'react-native-image-zoom-viewer'
import FastImage from 'react-native-fast-image'
import { getAsyncStorage } from '../../../../components/AsyncStorage'
import { VectorColor } from '../../../../components/color/VectorColor'
import {
  FlexModal,
  FlexModalHandler,
} from '../../../../components/modal/FlexModal'
import { scale } from '../../../../components/ScalingUtils'
import { KEY_STORAGE } from '../../../../utils/constants'
import Ionicons from 'react-native-vector-icons/Ionicons'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome6 from 'react-native-vector-icons/AntDesign'
import { CheckBox } from 'react-native-elements'
import SharePopup, { ShareFiles } from '../../../../components/share-popup'
const { width, height } = Dimensions.get('window')
const image =
  'https://img.freepik.com/free-vector/video-production-landing-page_52683-76086.jpg?w=1480&t=st=1699847237~exp=1699847837~hmac=f64b9ed7c23a8d5d215f9b8b5d8e7a5d90e09004ead5a5aa7ef91d10e9c0005e'
const FileType = {
  PDF: 'pdf',
  IMG: [
    'bmp',
    'jpg',
    'jpeg',
    'png',
    'tif',
    'gif',
    'pcx',
    'tga',
    'exif',
    'fpx',
    'svg',
    'psd',
    'cdr',
    'pcd',
    'dxf',
    'ufo',
    'eps',
    'ai',
    'raw',
    'WMF',
    'webp',
  ],
}

export const GaleryScreen = () => {
  const [list, setList] = useState<any>([])
  const [showShare, setShare] = useState<boolean>(false)
  const [uriView, setUriView] = useState<string>('')
  const modalImageRef = useRef<FlexModalHandler | null>(null)
  const [isSelected, setSelection] = useState<string[]>([])
  const webviewRef = useRef<any>(null)
  const [webHtml, setWebHtml] = useState('')
  const INJECTEDJAVASCRIPT = {
    injectedJavaScript: `const meta = document.createElement('meta'); meta.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=1'); meta.setAttribute('name', 'viewport'); document.getElementsByTagName('head')[0].appendChild(meta); var style = document.createElement('style');style.innerHTML = '::-webkit-scrollbar {display: none;}';document.head.appendChild(style);`,
  }

  useEffect(() => {
    setWebHtml(uriView)
  }, [uriView])

  const handleOpen = useCallback(() => {
    if (modalImageRef.current) {
      modalImageRef.current.open({
        title: '',
        message: '',
      })
    }
  }, [])

  const handleClose = useCallback(() => {
    if (modalImageRef.current) {
      setUriView('')
      modalImageRef.current.dismiss()
    }
  }, [])

  useFocusEffect(
    React.useCallback(() => {
      getAsyncStorage(KEY_STORAGE.KEY_IMAGE).then(async (item: any) => {
        let newDirectory = Object.values(
          JSON.parse(item).reduce((acc: any, item: any) => {
            if (!acc[item.date])
              acc[item.date] = {
                date: item.date,
                uri: [],
              }
            acc[item.date].uri.push(item.uri)
            return acc
          }, {}),
        )
        setList(newDirectory)
      })
    }, []),
  )

  const updateFieldChanged = (name?: any) => {
    setSelection((prev) => [...prev, name])
    const res_check = isSelected?.filter((item) => item === name)
    const res_response = isSelected?.filter((item) => item !== name)
    if (res_check?.length > 0) {
      return setSelection(res_response)
    }
  }

  const Item = ({ item }: any) => {
    return (
      <View style={{ marginTop: 12 }}>
        <Text
          style={{
            color: 'black',
            fontSize: scale(17),
            marginBottom: scale(6),
            fontWeight: 'bold',
            marginLeft: scale(40),
          }}
        >
          {item?.date}
        </Text>
        <FlatList
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  if (showShare) return updateFieldChanged(item)
                  setUriView(item)
                  handleOpen()
                }}
                onLongPress={() => {
                  LayoutAnimation.easeInEaseOut()
                  setShare(true)
                  updateFieldChanged(item)
                }}
              >
                <View>
                  {item?.includes('.mov') || item?.includes('.mp4') ? (
                    <>
                      <FastImage
                        source={{ uri: image }}
                        style={{
                          width: width / 3,
                          height: scale(130),
                          marginHorizontal: scale(2),
                          marginVertical: scale(3),
                        }}
                      />
                      <FontAwesome6
                        name="playcircleo"
                        size={scale(40)}
                        color={VectorColor.red}
                        style={{
                          position: 'absolute',
                          alignSelf: 'center',
                          top: scale(50),
                        }}
                      />
                    </>
                  ) : (
                    <FastImage
                      source={{ uri: item }}
                      style={{
                        width: width / 3,
                        height: scale(130),
                        marginHorizontal: scale(2),
                        marginVertical: scale(3),
                      }}
                    />
                  )}
                  {showShare && (
                    <CheckBox
                      checked={isSelected.includes(item)}
                      checkedColor={'red'}
                      onPress={() => updateFieldChanged(item)}
                      containerStyle={styles.checkbox}
                    />
                  )}
                </View>
              </TouchableOpacity>
            )
          }}
          horizontal={false}
          numColumns={3}
          data={item?.uri}
          keyExtractor={(_, index) => index.toString()}
        />
      </View>
    )
  }

  if (list?.length <= 0)
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
        }}
      >
        <Text style={{ fontSize: scale(17), color: 'black' }}>
          Chưa có hình ảnh hoặc video
        </Text>
      </View>
    )

  const handleshare = async () => {
    const options = {
      message: '',
      urls: isSelected,
      email: 'luanlapluan@gmail.com',
      subject: 'Thêm dự án',
    }

    await Share.open(options)
  }

  const handleDelete = () => {
    AsyncStorage.getItem(KEY_STORAGE.KEY_IMAGE).then((response?: any) => {
      const res = JSON.parse(response).filter((e: any) => {
        return isSelected.find((_) => _ !== e?.uri)
      })
      AsyncStorage.setItem(KEY_STORAGE.KEY_IMAGE, JSON.stringify(res))
      let newDirectory = Object.values(
        res.reduce((acc: any, item: any) => {
          if (!acc[item.date])
            acc[item.date] = {
              date: item.date,
              uri: [],
            }
          acc[item.date].uri.push(item.uri)
          return acc
        }, {}),
      )
      setList(newDirectory)
      setShare(false)
      setSelection([])
    })
  }

  const handleSpecialFileExt = (url: string) => {
    let fileType: string = url.replace(/.+\./, '')
    fileType = fileType.toLocaleLowerCase()
    let renderredContent
    if (FileType.IMG.includes(fileType)) {
      renderredContent = {
        baseUrl: url,
        html: `<img width="100%" src="${url}" />`,
      }
    } else if (fileType === 'mp4') {
      renderredContent = {
        baseUrl: url,
        html: `<video controls preload="metadata" width="100%" height="100%"><source src="${url}#t=0.1" type="video/mp4"></video>`,
      }
    } else {
      renderredContent = {
        uri: url || '#',
        method: 'GET',
      }
    }
    return renderredContent
  }

  return (
    <>
      {showShare && (
        <EvilIcons
          style={{ position: 'absolute', zIndex: 2, right: 10, top: 10 }}
          name="close"
          color={VectorColor.black}
          size={scale(30)}
          onPress={() => {
            setShare(false)
            setSelection([])
          }}
        />
      )}
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          backgroundColor: 'white',
        }}
      >
        <FlatList
          style={{ marginTop: scale(10) }}
          renderItem={({ item }) => {
            return <Item item={item} />
          }}
          data={list}
          keyExtractor={(_, index) => index.toString()}
        />

        <FlexModal
          containerStyle={styles.containerImage}
          ref={modalImageRef}
          modalStyle={{ padding: 0, margin: 0, height: 100 }}
          animationIn={'zoomIn'}
          animationOut={'zoomOut'}
        >
          <View style={styles.containerImageRow}>
            <Ionicons
              name={'arrow-back'}
              size={scale(30)}
              style={{
                left: scale(0),
                position: 'absolute',
                zIndex: 99,
                top: scale(40),
              }}
              color={VectorColor.white}
              onPress={handleClose}
            />
            {uriView?.includes('.mov') || uriView?.includes('.mp4') ? (
              <Video
                source={{ uri: uriView }} // Can be a URL or a local file.
                style={styles.backgroundVideo}
              />
              // <WebView
              //   style={styles.backgroundVideo}
              //   originWhitelist={['*']}
              //   ref={(ref: WebView) => {
              //     webviewRef.current = ref
              //   }}
              //   source={handleSpecialFileExt(uriView)}
              //   startInLoadingState
              //   allowsFullscreenVideo
              //   allowsInlineMediaPlayback
              //   mixedContentMode="always"
              //   androidLayerType="none"
              //   sharedCookiesEnabled
              //   javaScriptEnabled
              //   allowFileAccess
              //   scalesPageToFit
              //   {...INJECTEDJAVASCRIPT}
              //   onContentProcessDidTerminate={async (syntheticEvent) => {
              //     // const { nativeEvent } = syntheticEvent;
              //     // console.warn('Content process terminated, reloading', nativeEvent);
              //     webviewRef.current.reload()
              //   }}
              //   cacheEnabled
              // />
            ) : (
              <ImageViewer
                imageUrls={[{ url: uriView }]}
                index={0}
                renderIndicator={() => {
                  return <></>
                }}
              />
            )}
          </View>
        </FlexModal>
        {showShare && (
          <View
            style={{
              paddingVertical: scale(10),
              paddingHorizontal: scale(40),
              backgroundColor: VectorColor.white,
              position: 'absolute',
              zIndex: 1,
              bottom: 0,
              margin: scale(20),
              borderRadius: scale(10),
              flexDirection: 'row',
              alignSelf: 'center',
              borderWidth: 0.2,
              justifyContent: 'space-around',
              alignItems: 'center',
            }}
          >
            <TouchableOpacity
              onPress={handleshare}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                paddingHorizontal: scale(10),
                marginHorizontal: scale(8),
              }}
            >
              <>
                <AntDesign
                  name="sharealt"
                  size={18}
                  color={VectorColor.black}
                />
                <Text
                  style={{
                    fontSize: scale(14),
                    color: VectorColor.black,
                    marginTop: scale(4),
                  }}
                >
                  Gửi
                </Text>
              </>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                paddingHorizontal: scale(10),
                marginHorizontal: scale(8),
              }}
              onPress={handleDelete}
            >
              <AntDesign name="delete" size={18} color={VectorColor.black} />
              <Text
                style={{
                  fontSize: scale(14),
                  color: VectorColor.black,
                  marginTop: scale(4),
                }}
              >
                Xóa
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  containerImageRow: {
    flex: 1,
  },
  container: {
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 20,
  },
  containerImage: {
    flex: 1,
    backgroundColor: VectorColor.black,
  },
  containerModal: {
    backgroundColor: VectorColor.red,
    justifyContent: 'flex-end',
    margin: 0,
    padding: 0,
    height: '40%',
  },
  checkbox: {
    position: 'absolute',
    zIndex: 1,
    right: scale(-14),
    bottom: scale(-8),
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
})
