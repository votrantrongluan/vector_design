import AsyncStorage from '@react-native-community/async-storage'
import { useFocusEffect } from '@react-navigation/native'
import React, { useCallback, useRef, useState } from 'react'
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
import RNFS from 'react-native-fs';
import RNFetchBlob from 'rn-fetch-blob'
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
import { CheckBox } from 'react-native-elements'
import SharePopup, { ShareFiles } from '../../../../components/share-popup'
const { width, height } = Dimensions.get('window')

export const GaleryScreen = () => {
  const [list, setList] = useState<any>([])
  const [showShare, setShare] = useState<boolean>(false)
  const [uriView, setUriView] = useState<string>('')
  const modalImageRef = useRef<FlexModalHandler | null>(null)
  const [isSelected, setSelection] = useState<string[]>([])

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

  const Item = ({ item }: any) => {
    return (
      <View>
        <Text
          style={{
            color: 'black',
            fontSize: scale(17),
            marginBottom: scale(4),
            fontWeight: 'bold',
            marginLeft: scale(40),
          }}
        >
          {item?.date}
        </Text>
        <FlatList
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  if (showShare) return setSelection((prev) => [...prev, item])
                  setUriView(item)
                  handleOpen()
                }}
                onLongPress={() => {
                  LayoutAnimation.easeInEaseOut()
                  setShare(true)
                  setSelection((prev) => [...prev, item])
                }}
              >
                <View>
                  <FastImage
                    source={{ uri: item }}
                    style={{
                      width: width / 3,
                      height: scale(130),
                      marginHorizontal: scale(2),
                      marginVertical: scale(3),
                    }}
                  />
                  {showShare && (
                    <CheckBox
                      checked={isSelected.includes(item)}
                      checkedColor={'red'}
                      onPress={() => setSelection((prev) => [...prev, item])}
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
      message: 'Email',
      urls: isSelected,
      email: 'luanlapluan@gmail.com',
      subject: 'Hlannnn'
    }

    await Share.open(options)
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
          style={{ marginTop: scale(-10) }}
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
              style={{ margin: scale(20), position: 'absolute', zIndex: 1 }}
              color={VectorColor.white}
              onPress={handleClose}
            />
            <ImageViewer
              imageUrls={[{ url: uriView }]}
              index={0}
              renderIndicator={() => {
                return <></>
              }}
            />
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
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                paddingHorizontal: scale(10),
                marginHorizontal: scale(8),
              }}
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
            </View>
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
    margin: 0,
    padding: 0,
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
})
