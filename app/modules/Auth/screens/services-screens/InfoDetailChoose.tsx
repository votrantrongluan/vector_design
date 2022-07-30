import React, { Fragment } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { TabView, TabBar } from 'react-native-tab-view';
import { VectorColor } from '../../../../components/color/VectorColor';
import { ItemDetailInfo } from '../../../../components/ItemDetailInfo';
import { scale } from '../../../../components/ScalingUtils';
import { DataInfoDetail, DataInfoOffer, DataInfoOverview, DataInfoQuote, TabsDetail, TypeTabsDetail } from '../../../../utils/constants';
import { QuoteTabs } from '../QuoteTabs';

const { width } = Dimensions.get('window')

const OverviewRoute = (jumpTo: any) => (
    <ItemDetailInfo dataList={DataInfoOverview} />
);

const DetailRoute = (jumpTo: any) => (
    <ItemDetailInfo dataList={DataInfoDetail} />
);
const OfferRoute = (jumpTo: any) => (
    <ItemDetailInfo dataList={DataInfoOffer} />
);
const QuoteRoute = (jumpTo: any) => (
    <QuoteTabs data={DataInfoQuote} />
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