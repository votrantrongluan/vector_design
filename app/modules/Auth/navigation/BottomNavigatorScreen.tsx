import React, { useState } from 'react'
import BottomNavigation, {
  FullTab,
} from 'react-native-material-bottom-navigation'
import Icon from 'react-native-vector-icons/Entypo'
import { Tabs } from '../../../utils/constants'

export const BottomNavigatorScreen = () => {
  const [activeTab, setActiveTab] = useState<any>(null)

  const renderIcon = (tab: any) => ({ isActive }: any) => {
    return (
      <Icon size={24} color="white" name={tab.icon} />
    )
  }

  const renderTab = ({ tab, isActive }: any) => (
    <FullTab
      isActive={isActive}
      key={tab.key}
      label={tab.label}
      renderIcon={renderIcon(tab)}
    />
  )

  return (
    <BottomNavigation
      onTabPress={(activeTab) => setActiveTab(activeTab)}
      renderTab={renderTab}
      tabs={Tabs}
    />
  )
}
