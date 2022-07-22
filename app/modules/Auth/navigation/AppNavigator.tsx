import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AppRoutes } from '../../../components/routes/AppRoutes'
import { HomeScreen } from '../screens/HomeScreens'
import { VectorColor } from '../../../components/color/VectorColor'

const Stack = createNativeStackNavigator<any>()

const HomePages = () => {
  const arr = []
  arr.push(
    <Stack.Screen
      name={AppRoutes.HOME}
      component={HomeScreen}
      key={AppRoutes.HOME}
      options={{
        title: 'Trang Chủ',
      }}
    />,
  )
  return arr.filter((item) => item.key)
}

const AppNavigator = (): React.ReactElement => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={() => ({
          headerShown: true,
          gestureEnabled: false,
          cardStyle: { backgroundColor: 'transparent' },
          headerTintColor: VectorColor.black,
        })}
      >
        {HomePages()}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator
