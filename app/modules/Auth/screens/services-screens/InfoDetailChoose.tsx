import React, { Fragment } from 'react';
import { View, Text, StyleSheet, useWindowDimensions, Dimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { VectorColor } from '../../../../components/color/VectorColor';
import { scale } from '../../../../components/ScalingUtils';
import { TabsDetail, TypeTabsDetail } from '../../../../utils/constants';

const { width } = Dimensions.get('window')

const OverviewRoute = (jumpTo: any) => (
    <View style={{ flex: 1, backgroundColor: '#ff4081' }} />
);

const DetailRoute = (jumpTo: any) => (
    <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
);
const OfferRoute = (jumpTo: any) => (
    <View style={{ flex: 1, backgroundColor: 'green' }} />
);
const QuoteRoute = (jumpTo: any) => (
    <View style={{ flex: 1, backgroundColor: 'red' }} />
);

const renderScene = ({ route, jumpTo }: any) => {
    switch (route.key) {
        case TypeTabsDetail.Overview:
            return <OverviewRoute jumpTo={jumpTo} />;
        case TypeTabsDetail.Detail:
            return <DetailRoute jumpTo={jumpTo} />;
        case TypeTabsDetail.Offer:
            return <OfferRoute jumpTo={jumpTo} />;
        case TypeTabsDetail.Quote:
            return <QuoteRoute jumpTo={jumpTo} />;
        default:
            return <View />
    }
};

export const InfoDetailChoose = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState(TabsDetail);

    return (
        <Fragment>
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
                            <View>
                                <Text
                                    style={[styles.title, { color, }]}>
                                    {route.title}
                                </Text>
                            </View>
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
        </Fragment>
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