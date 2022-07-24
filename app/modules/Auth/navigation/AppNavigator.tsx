import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AppRoutes } from '../../../components/routes/AppRoutes'
import { HomeScreen } from '../screens/HomeScreens'
import { VectorColor } from '../../../components/color/VectorColor'
import { TranSlationLanguage } from '../../../utils/constants'
import { StyleSheet, Text, View } from 'react-native'
import { scale } from '../../../components/ScalingUtils'
import { BottomNavigatorScreen } from './BottomNavigatorScreen'
import { DetailItemScreens } from '../screens/DetailItemScreens'

const Stack = createNativeStackNavigator<any>()

const HomePages = () => {
  const arr = []
  arr.push(
    <Stack.Screen
      name={AppRoutes.HOME}
      component={HomeScreen}
      key={AppRoutes.HOME}
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
    />,
  ),
    arr.push(
      <Stack.Screen
        name={AppRoutes.DETAIL}
        component={DetailItemScreens}
        key={AppRoutes.DETAIL}
        options={{
          title: 'Chi tiết sản phẩm',
        }}
      />,
    )
  return arr.filter((item) => item.key)
}

const AppNavigator = (): React.ReactElement => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={() => ({
            headerShown: true,
            gestureEnabled: false,
            cardStyle: { backgroundColor: 'transparent' },
            headerTintColor: VectorColor.black,
            headerBackTitleVisible: false,
          })}
        >
          {HomePages()}
        </Stack.Navigator>
      </NavigationContainer>
      <BottomNavigatorScreen />
    </>
  )
}

export default AppNavigator

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
