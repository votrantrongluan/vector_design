import React, { useCallback, useEffect, useState } from "react"
import { StyleSheet, Text, TextInput, View } from "react-native"
import { Categories, TypeCatelogies, TypeInfo } from "../../utils/constants"
import { VectorColor } from "../color/VectorColor"
import { FormatNumber } from "../format-numbert/FormatNumber"
import { ModalControl } from "../modal/ModalControl"
import { scale } from "../ScalingUtils"
import { useForm } from "react-hook-form";

interface Props {
    type: string
}

export const FormInfo = ({ type }: Props) => {
    const [input, setInput] = React.useState<string>('')
    const [result, setResult] = React.useState<string>('')
    const [catelogies, setCatelogies] = useState<{ name: string, value: string, num: number } | null>(null)
    const [showResult, setShowResult] = React.useState<boolean>(false)
    const { formState: { errors }, setValue, watch, getValues, clearErrors, handleSubmit, reset, register } = useForm();

    useEffect(() => {
        register('catelogies', {
            required: true
        })
    }, [])

    const handleCalculator = useCallback(() => {
        setShowResult(true)
        let result = 0
        if (Number(input) < 101) {
            switch (type) {
                case TypeInfo.TYPEA:
                    if (catelogies?.value === TypeCatelogies.VILA) {
                        result = Number(input) * 50000
                        break
                    }
                    result = Number(input) * 45000
                    break
                case TypeInfo.TYPEB:
                    if (catelogies?.value === TypeCatelogies.VILA) {
                        result = Number(input) * 60000
                        break
                    }
                    result = Number(input) * 50000
                    break
                case TypeInfo.TYPEC:
                    if (catelogies?.value === TypeCatelogies.VILA) {
                        result = Number(input) * 80000
                        break
                    }
                    result = Number(input) * 60000
                    break
                default:
                    result = 0
                    break
            }
        }
        else {
            result = Number(input) * 45000
        }
        setResult(String(result))
    }, [input, catelogies])

    const handleSelected = React.useCallback((name: string, value: string, num: number) => {
        setValue('catelogies', {
            name,
            value,
            num
        }, { shouldValidate: true })
        setCatelogies({
            name,
            value,
            num
        })
    }, [])

    useEffect(() => {
        if (Number(input) > 0) {
            handleCalculator()
        }
    }, [catelogies])

    const getNameFromOptionsSearch = useCallback((options: any[], code: string) => {
        if (code) {
            const result = options.find((item) => item.value === code);
            return result && result.name ? result.name : '';
        }
        return code;
    }, []);

    return (
        <View style={{ marginTop: scale(10) }}>
            <ModalControl
                placeholder={'Chọn hạng mục'}
                title={'Hạng mục'}
                value={
                    catelogies
                        ? catelogies.name ||
                        getNameFromOptionsSearch(Categories || [], catelogies.value || '')
                        : undefined
                }
                data={Categories}
                titleModal="Hạng mục"
                key="catelogies"
                dropdownSelected={catelogies && catelogies.name}
                onSelected={(name, value, num) => handleSelected(name || '', value || '', num || 0)} >
                {errors.catelogies && <Text style={styles.error}>Vui lòng chọn hạng mục</Text>}
            </ModalControl>
            <TextInput
                style={styles.title}
                value={input}
                keyboardType='numeric'
                onChangeText={setInput}
                onSubmitEditing={handleSubmit(handleCalculator)}
                placeholder="Nhập diện tích (M2)"
            />
            {result && showResult ? <View style={{ marginTop: scale(10) }}>
                <Text style={styles.titleResult}>KẾT QUẢ Giá dự toán:
                </Text>
                <Text style={[styles.titleResult, { color: VectorColor.red, fontWeight: 'bold' }]}>{FormatNumber()(Number(result))}</Text>
            </View> : <View />}
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: scale(16),
        color: VectorColor.black,
        borderWidth: 1,
        borderColor: VectorColor.greyc1,
        paddingVertical: scale(16),
        paddingHorizontal: scale(10),
        marginTop: scale(-10)
    },
    titleResult: {
        fontSize: scale(16),
        color: VectorColor.black,
        marginVertical: scale(3)
    },
    error: {
        fontSize: scale(12),
        color: VectorColor.red,
        marginTop: scale(-10),
        marginBottom: scale(30),
    },
})