import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import { useColorScheme } from '@/hooks/useColorScheme';

import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import {
  HomeIcon,
  CategoriesIcon,
  CartIcon,
  WishlistIcon,
  ProfileIcon,
} from '@/components';

const TabLayout = () => {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarItemStyle: {
          padding: 8,
        },
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
            paddingHorizontal: 20,
          },
          default: {
            paddingHorizontal: 20,
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
