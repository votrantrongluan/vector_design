import { useFocusEffect } from '@react-navigation/native'
import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import FastImage from 'react-native-fast-image'
import { VectorColor } from '../../../../components/color/VectorColor'
import { scale } from '../../../../components/ScalingUtils'

interface ServicesItem {
  id: string
  name: string
  link: string
}

interface PropsItem {
  data: { name: string; item: ServicesItem[] }
}

interface ItemPropsValues {
  data: ServicesItem
}

const Item = ({ data }: ItemPropsValues) => {
  return (
    <View>
      <FastImage source={{ uri: data.link }} style={styles.image} />
      <Text
        style={[styles.title, { fontWeight: 'normal', fontSize: scale(20), textAlign: 'center' }]}
      >
        {data.name}
      </Text>
    </View>
  )
}

export const Itemservices = ({ data }: PropsItem) => {
  const { name, item } = data
  
  return (
    <>
      <Text style={[styles.title, { marginHorizontal: scale(10) }]}>
        {name}
      </Text>
      <FlatList
        data={item}
        horizontal
        renderItem={({ item }) => <Item data={item} />}
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
    borderRadius: scale(10)
  },
})
