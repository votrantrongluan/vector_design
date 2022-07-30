import React, { Fragment, useCallback } from "react"
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { Divider } from "react-native-elements"
import { VectorColor } from "./color/VectorColor"
import { scale } from "./ScalingUtils"

interface PropsItem {
    dataList: {
        title: string;
        data: {
            id: string;
            name: string;
            description: {
                id: string;
                title: string;
            }[];
        }[];
    }
}

export const ItemDetailInfo = ({ dataList }: PropsItem) => {
    const { title, data } = dataList

    const checkLine = useCallback((index: number) => {
        if (index % 2 === 0) {
            return scale(10)
        }
        return scale(4)
    }, [])

    return (
        <ScrollView>
            {data?.map((item, index) => {
                return (
                    <View key={item.id}>
                        <Divider color={VectorColor.greyf0} width={checkLine(index)} />
                        <View style={style.containerItem}>
                            <Text style={style.title}>{item.name}</Text>
                            {item?.description?.map((_) => {
                                return (
                                    <Text key={_.id} style={style.titleDes}>{`- ${_.title}`}</Text>
                                )
                            })}
                        </View>
                    </View>
                )
            })}
        </ScrollView>
    )
}

const style = StyleSheet.create({
    containerItem: {
        padding: scale(10),
    },
    titleMain: {
        marginVertical: scale(10),
        fontSize: scale(22),
        fontWeight: 'bold',
        paddingHorizontal: scale(10),
        marginTop: scale(18)
    },
    title: {
        fontSize: scale(18),
        fontWeight: 'bold',
        color: VectorColor.black
    },
    titleDes: {
        fontSize: scale(16),
        color: VectorColor.black,
        lineHeight: scale(22),
        marginVertical: scale(6)
    }
})