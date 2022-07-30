import React from 'react'
import { StyleSheet } from 'react-native'
import { VectorColor } from '../color/VectorColor'
import { scale } from '../ScalingUtils'
import { VectorHeader } from './Header'

interface Props {
    title: string
    navigation?: any
}

export const HeaderBar = ({ title, navigation }: Props) => {
    return (
        <VectorHeader
            title={title}
            style={style.HEAD}
            titleStyle={style.title}
            leftIcon="chevron-small-left"
            onLeftPress={async () => {
                await navigation.goback()
            }}
        />
    )
}

const style = StyleSheet.create({
    HEAD: {
        borderBottomWidth: 1,
        borderBottomColor: VectorColor.greyeb,
    },
    title: {
        textAlign: 'center', fontSize: scale(16), fontWeight: 'bold', color: VectorColor.black
    }
})