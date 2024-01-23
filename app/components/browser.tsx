import React from "react"
import { requireNativeComponent, ViewProps } from "react-native"

type BrowserEvent = {
    message: string
}

interface BrowserViewProps extends ViewProps {
    onPress: (event: BrowserEvent) => void
}

export const BrowserView = (props: BrowserViewProps) => {
    return <RCTBrowserView {...props} onPress={(event: any) => props?.onPress(event.nativeEvent)} />
}

const RCTBrowserView = requireNativeComponent("RCTBrowserView")