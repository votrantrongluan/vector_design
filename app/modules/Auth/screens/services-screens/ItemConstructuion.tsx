import React, { Fragment, useCallback, useEffect } from "react"
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { Divider } from "react-native-elements";
import { VectorColor } from "../../../../components/color/VectorColor";
import { FormInfo } from "../../../../components/form/FormInfo";
import { scale } from "../../../../components/ScalingUtils";

export enum TypeDesign { 
    KEY = '2'
}

interface PropsItem {
    dataList: {
        title: string;
        type: string;
        dataConstruction: {
            id: string;
            name: string;
            description: {
                id: string;
                title: string;
            }[];
        }[];
    }
}

export const ItemConstructuion = ({ dataList }: PropsItem) => {
    const { dataConstruction, type} = dataList

    const checkLine = useCallback((index: number) => {
        if (index % 2 === 0) {
            return scale(10)
        }
        return scale(4)
    }, [])

    return (
        <ScrollView>
            {dataConstruction?.map((item, index) => {
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
            <Text style={style.footer}>Dac quyen chua biet ghi gi</Text>
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
    footer: {
        fontSize: scale(16),
        fontStyle: 'italic',
        color: VectorColor.blue,
        paddingBottom: scale(16),
        paddingHorizontal: scale(10),
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