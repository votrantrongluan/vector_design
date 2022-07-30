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

interface PropsItem {
  data: {
    name: string;
    item: {
      id: string;
      name: string;
      link: string;
      imgList: string[];
      type: string
    }[];
  }
}

interface ItemPropsValues {
  data: {
    id: string;
    name: string;
    link: string;
    imgList: string[];
    type: string
  }
  navigate?: any
  name: string
}

const Item = ({ data, navigate, name }: ItemPropsValues) => {
  const onChooseItem = useCallback(() => {
    navigate(AppRoutes.DETAIL, { data, nameInfo: name })
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
  const { navigate }: any = useNavigation()

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>
          {name}
        </Text>
      </View>
      <FlatList
        data={item}
        horizontal
        renderItem={({ item }) => <Item data={item} navigate={navigate} name={name} />}
        keyExtractor={(_, index) => String(index)}
      />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: scale(10),
    justifyContent: 'space-between',
  },
  titleView: {
    color: VectorColor.blue,
    fontSize: scale(16),
    fontWeight: 'normal',
    alignSelf: 'center'
  },
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
