import React, { useCallback, useState } from 'react'
import { Alert, Linking, StyleSheet, View } from 'react-native'
import FastImage from 'react-native-fast-image'
import BottomNavigation, {
  FullTab, TabConfig,
} from 'react-native-material-bottom-navigation'
import Icon from 'react-native-vector-icons/Entypo'
import { VectorColor } from '../../../components/color/VectorColor'
import { scale } from '../../../components/ScalingUtils'
import { IndexIcon, linkFB, linkGmail, linkYoutube, linkZalo, Tabs, TypeIndexIcon, validEmail } from '../../../utils/constants'

export const BottomNavigatorScreen = () => {
  const [activeTab, setActiveTab] = useState<any>(null)

  const handleSetColor = (key: string) => {
    switch (key) {
      case Tabs[IndexIcon.ZALO].key:
        return VectorColor.cyan
      case Tabs[IndexIcon.MAIL].key:
        return VectorColor.orange
      case Tabs[IndexIcon.FB].key:
        return VectorColor.blue
      case Tabs[IndexIcon.YT].key:
        return VectorColor.red
      default:
        return VectorColor.black
    }
  }

  const handleIconFilter = (key: string, icon: string) => {
    if (key === Tabs[IndexIcon.ZALO].key) {
      return <FastImage source={require('../assets/zalo.png')} style={styles.icon} />
    } else {
      return <Icon size={24} color={handleSetColor(key)} name={icon} />
    }

  }

  const renderIcon = (tab: any) => ({ isActive }: any) => {
    return (
      handleIconFilter(tab?.key, tab?.icon)
    )
  }

  const renderTab = ({ tab, isActive }: any) => (
    <FullTab
      isActive={isActive}
      key={tab.key}
      label={tab.label}
      renderIcon={renderIcon(tab)}
      labelStyle={{ color: VectorColor.black }}
    />
  )

  const onLink = React.useCallback(async (url: string) => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(`${validEmail.test(url) ? 'mailto:' : url}`);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [])

  const handlePress = useCallback(async (activeTab: TabConfig) => {
    setActiveTab(activeTab)
    switch (activeTab?.key) {
      case TypeIndexIcon.ZALO:
        onLink(linkZalo)
        break;
      case TypeIndexIcon.MAIL:
        onLink(linkGmail)
        break;
      case TypeIndexIcon.FB:
        onLink(linkFB)
        break;
      case TypeIndexIcon.YT:
        onLink(linkYoutube)
        break;
      default:
        onLink(linkYoutube)
        break;
    }
  }, []);

  return (
    <BottomNavigation
      onTabPress={(activeTab) => handlePress(activeTab)}
      renderTab={renderTab}
      tabs={Tabs}
    />
  )
}

const styles = StyleSheet.create({
  icon: {
    width: scale(30),
    height: scale(28),
  }
})