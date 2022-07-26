import React, { Fragment, useCallback } from "react"
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { Divider } from "react-native-elements";
import { VectorColor } from "../../../../components/color/VectorColor";
import { FormInfo } from "../../../../components/form/FormInfo";
import { scale } from "../../../../components/ScalingUtils";
import { TypeDesign } from "./ItemConstructuion";

interface PropsItem {
    dataList: {
        title: string;
        type: string,
        dataDesign: {
            id: string;
            name: string;
            description: {
                id: string;
                title: string;
            }[];
        }[];
    }
}

export const ItemDesign = ({ dataList }: PropsItem) => {
    const { dataDesign, type } = dataList

    const checkLine = useCallback((index: number) => {
        if (index % 2 === 0) {
            return scale(10)
        }
        return scale(4)
    }, [])

    return (
        <ScrollView>
            {dataDesign?.map((item, index) => {
                return (
                    <View key={item.id}>
                        <Divider color={VectorColor.greyf0} width={checkLine(index)} />
                        <View style={style.containerItem}>
                            <Text style={style.title}>{item.name}</Text>
                            {item?.description?.map((_) => {
                                return (
                                    item.id === TypeDesign.KEY ? <FormInfo type={type} /> : <Text key={_.id} style={style.titleDes}>{`- ${_.title}`}</Text>
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