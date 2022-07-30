import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import WishlistScreen from './src/screens/WishlistScreen';
import UserScreen from './src/screens/UserScreen';
import COLORS from './src/constants/colors';
import {StyleSheet} from 'react-native';
import HomeIcon from './assets/icons/home';
import HeartIcon from './assets/icons/heart';
import UserIcon from './assets/icons/user';
import ListIcon from './assets/icons/list';
import SettingScreen from './src/screens/SettingScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};
const TapBottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarActiveTintColor: COLORS.fuchia,
        tabBarInactiveTintColor: COLORS.black,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tapBottomNavigator,
      })}>
      <Tab.Screen
        name="Home"
        component={WishlistScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <HomeIcon
                width={32}
                height={32}
                fill={'none'}
                stroke={focused ? COLORS.fuchia : COLORS.black}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Products"
        component={WishlistScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <ListIcon
                width={32}
                height={32}
                fill={'none'}
                stroke={focused ? COLORS.fuchia : COLORS.black}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Wishlist"
        component={WishlistScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <HeartIcon
                width={32}
                height={32}
                fill={focused ? COLORS.fuchia : 'none'}
                stroke={focused ? COLORS.fuchia : COLORS.black}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="UserScreen"
        component={UserScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <UserIcon
                width={32}
                height={32}
                fill={'none'}
                stroke={focused ? COLORS.fuchia : COLORS.black}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="TapBottomNavigator"
          component={TapBottomNavigator}
          options={{
            transitionSpec: {
              open: config,
              close: config,
            },
          }}
        />
        <Stack.Screen
          name="SettingScreen"
          component={SettingScreen}
          options={{
            transitionSpec: {
              open: config,
              close: config,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tapBottomNavigator: {
    backgroundColor: COLORS.white,
    paddingTop: 20,
    paddingBottom: 30,
    height: 80,
  },
});

export default App;
