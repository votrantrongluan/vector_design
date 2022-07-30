import React from "react"
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { TabBar, TabView } from "react-native-tab-view"
import { VectorColor } from "../../../components/color/VectorColor";
import { scale } from "../../../components/ScalingUtils";
import { TabsQuote, TypeTabsQuote } from "../../../utils/constants";
import { ItemConstructuion } from "./services-screens/ItemConstructuion";
import { ItemDesign } from "./services-screens/ItemDesign";
const { width } = Dimensions.get('window')

export const QuoteTabs = ({ data }: any) => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState(TabsQuote);

    const QuoteDesign = (jumpTo: any) => (
        <ItemDesign dataList={data} />
    );

    const QuoteConstructuion = (jumpTo: any) => (
        <ItemConstructuion dataList={data} />
    );

    const renderScene = ({ route, jumpTo, data }: any) => {
        switch (route.key) {
            case TypeTabsQuote.Design:
                return <QuoteDesign jumpTo={jumpTo} />;
            case TypeTabsQuote.Construction:
                return <QuoteConstructuion jumpTo={jumpTo} />;
            default:
                return <View />
        }
    };

    return (
        <TabView
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
            initialLayout={{ width }}
            style={styles.containerTabs}
            renderTabBar={(props) => (
                <TabBar
                    pressOpacity={0.6}
                    renderLabel={({ route, focused, color }) => (
                        <Text
                            style={[styles.title, { color, }]}>
                            {route.title}
                        </Text>
                    )}
                    activeColor={VectorColor.red}
                    inactiveColor={VectorColor.grey66}
                    indicatorStyle={{ backgroundColor: VectorColor.red }}
                    style={{ backgroundColor: VectorColor.white }}
                    getLabelText={({ route }) => route.title}
                    {...props}
                />
            )}
        />
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerTabs: {
        backgroundColor: '#F8F8F8'
    },
    title: {
        fontSize: scale(15),
        lineHeight: scale(24),
        fontWeight: 'bold',
    }
})