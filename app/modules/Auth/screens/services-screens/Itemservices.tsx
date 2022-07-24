import { useNavigation } from '@react-navigation/native'
import React, { useCallback } from 'react'
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native'
import FastImage from 'react-native-fast-image'
import { VectorColor } from '../../../../components/color/VectorColor'
import { AppRoutes } from '../../../../components/routes/AppRoutes'
import { scale } from '../../../../components/ScalingUtils'

interface ServicesItem {
  id: string
  name: string
  link: string
  imgList: []
}

interface PropsItem {
  data: { name: string; item: ServicesItem[] }
}

interface ItemPropsValues {
  data: ServicesItem
  navigate?: any
}

const Item = ({ data, navigate }: ItemPropsValues) => {
  const onChooseItem = useCallback(() => {
    navigate(AppRoutes.DETAIL, { data })
  }, [])

  return (
    <TouchableOpacity onPress={onChooseItem}>
      <>
        <FastImage source={{ uri: data.link }} style={styles.image} />
        <Text
          style={[
            styles.title,
            { fontWeight: 'normal', fontSize: scale(20), textAlign: 'center' },
          ]}
        >
          {data.name}
        </Text>
      </>
    </TouchableOpacity>
  )
}

export const Itemservices = ({ data }: PropsItem) => {
  const { name, item } = data
  const { navigate } = useNavigation()

  return (
    <>
      <Text style={[styles.title, { marginHorizontal: scale(10) }]}>
        {name}
      </Text>
      <FlatList
        data={item}
        horizontal
        renderItem={({ item }) => <Item data={item} navigate={navigate} />}
        keyExtractor={(_, index) => String(index)}
      />
    </>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: scale(22),
    fontWeight: 'bold',
    color: VectorColor.black,
    marginTop: scale(20),
    marginBottom: scale(10),
  },
  image: {
    width: scale(210),
    height: scale(160),
    resizeMode: 'contain',
    marginHorizontal: scale(10),
    borderRadius: scale(10),
  },
})
