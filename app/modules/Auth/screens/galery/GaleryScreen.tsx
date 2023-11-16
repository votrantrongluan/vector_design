import { useFocusEffect } from '@react-navigation/native'
import React, { useState } from 'react'
import { getAsyncStorage } from '../../../../components/AsyncStorage'
import { KEY_STORAGE } from '../../../../utils/constants'
import { ViewPictureComponent } from '../../../../components/ViewPictureCompinent'
export const keyPath = 'file://'
export const image =
  'https://img.freepik.com/free-vector/video-production-landing-page_52683-76086.jpg?w=1480&t=st=1699847237~exp=1699847837~hmac=f64b9ed7c23a8d5d215f9b8b5d8e7a5d90e09004ead5a5aa7ef91d10e9c0005e'

export const GaleryScreen = () => {
  const [list, setList] = useState<any>([])

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

  return (
    <>
      <ViewPictureComponent data={list}/>
    </>
  )
}
