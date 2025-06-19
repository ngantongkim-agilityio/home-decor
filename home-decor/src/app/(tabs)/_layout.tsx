import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import {
  HomeIcon,
  CategoriesIcon,
  CartIcon,
  WishlistIcon,
  ProfileIcon,
} from '@/components';

const TabLayout = () => {
  const isAndroid = Platform.OS === 'android';

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarItemStyle: {
          padding: isAndroid ? 4 : 8,
        },
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
            paddingHorizontal: 20,
          },
          default: {
            paddingHorizontal: 30,
          },
        }),
      }}
    >
      <Tabs.Screen
        name="(home)"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <HomeIcon color={focused ? '#363130' : '#f4b5a4'} />
          ),
        }}
      />
      <Tabs.Screen
        name="categories"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <CategoriesIcon color={focused ? '#363130' : '#f4b5a4'} />
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <CartIcon color={focused ? '#363130' : '#f4b5a4'} />
          ),
        }}
      />
      <Tabs.Screen
        name="wishlist"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <WishlistIcon color={focused ? '#363130' : '#f4b5a4'} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <ProfileIcon color={focused ? '#363130' : '#f4b5a4'} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
