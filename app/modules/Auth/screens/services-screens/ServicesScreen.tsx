import React from 'react'
import { FlatList } from 'react-native'
import { DataHome } from '../../../../utils/constants'
import { Itemservices } from './Itemservices'

export const ServicesScreen = () => {
  return (
    <>
      <FlatList
        data={DataHome}
        renderItem={({ item }) => <Itemservices data={item} />}
        keyExtractor={(_, index) => String(index)}
      />
    </>
  )
}
