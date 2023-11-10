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
import { HomeNavigator } from '../screens/HomeNavigator'
import IntroduceScreen from '../screens/TodoList/introduce/screens/IntroduceScreen'
import SigninScreen from '../screens/TodoList/login/screens/SigninScreen'
import { GaleryScreen } from '../screens/galery/GaleryScreen'

const Stack = createNativeStackNavigator<any>()

const HomePages = () => {
  const arr = []
  arr.push(
    <Stack.Screen
      name={AppRoutes.HOME}
      component={HomeNavigator}
      key={AppRoutes.HOME}
      options={{ gestureEnabled: false, headerShown: false }}
    />,
  ),
  arr.push(
    <Stack.Screen
      name={AppRoutes.INTRODUCE}
      component={IntroduceScreen}
      key={AppRoutes.INTRODUCE}
      options={{ gestureEnabled: false, headerShown: false }}
    />,
  ),
  arr.push(
    <Stack.Screen
      name={AppRoutes.DETAIL}
      component={DetailItemScreens}
      key={AppRoutes.DETAIL}
      options={({ route }) => ({ title: route?.params?.nameInfo })}
    />,
  )
  arr.push(
    <Stack.Screen
      name={AppRoutes.SIGNIN}
      component={SigninScreen}
      key={AppRoutes.SIGNIN}
      options={({ route }) => ({ title: route?.params?.nameInfo })}
    />,
  )
  arr.push(
    <Stack.Screen
      name={AppRoutes.GALARY}
      component={GaleryScreen}
      key={AppRoutes.GALARY}
      options={({ route }) => ({ title: route?.params?.nameInfo })}
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
