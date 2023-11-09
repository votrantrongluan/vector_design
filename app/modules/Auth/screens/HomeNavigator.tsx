import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { HomeScreen } from './HomeScreens'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { scale } from '../../../components/ScalingUtils'
import { VectorColor } from '../../../components/color/VectorColor'
import { TranSlationLanguage } from '../../../utils/constants'
import { InfoContract } from './InfoContract'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import { BottomNavigatorScreen } from '../navigation/BottomNavigatorScreen'

const Drawer = createDrawerNavigator()

export const HomeNavigator = () => {
  const navigation = useNavigation()

  return (
    <>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen
          name="Trang chủ"
          component={HomeScreen}
          options={{
            headerTitle: () => (
              <View style={styles.container}>
                <Text style={styles.titleHeader}>
                  {TranSlationLanguage.Home_Title}
                </Text>
                <Text style={styles.titleBottom}>T2 - 8:00 - 17:00</Text>
              </View>
            ),
          }}
        />
        <Drawer.Screen
          name="Thông tin về chúng tôi"
          component={InfoContract}
          options={{
            headerLeft: () => (
              <TouchableOpacity
                disabled={true}
                onPress={() => navigation.goBack()}
                style={{ marginLeft: scale(4) }}
              >
                <Ionicons
                  name="chevron-back"
                  size={scale(30)}
                  color={VectorColor.black}
                />
              </TouchableOpacity>
            ),
          }}
        />
        <Drawer.Screen
          name="Đối tác"
          component={InfoContract}
          options={{
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{ marginLeft: scale(4) }}
              >
                <Ionicons
                  name="chevron-back"
                  size={scale(30)}
                  color={VectorColor.black}
                />
              </TouchableOpacity>
            ),
          }}
        />
      </Drawer.Navigator>
      <BottomNavigatorScreen />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleHeader: {
    fontSize: scale(16),
    color: VectorColor.black,
    fontWeight: 'bold',
  },
  titleBottom: {
    fontSize: scale(14),
    color: VectorColor.black,
    lineHeight: scale(22),
    marginTop: scale(1),
  },
})
