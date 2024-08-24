import React from 'react';

import {Tabs} from 'expo-router';

import TabBarIcon from '@/components/atoms/tabBarIcon/tabBarIcon';
import {useAppSelector} from '@/store';

export default function TabLayout() {
  const cartProductsCount = useAppSelector(s =>
    s.user.cart.reduce((acc, curr) => acc + curr.count, 0),
  );

  return (
    <Tabs
      initialRouteName="index"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'black',
        tabBarStyle: {paddingBottom: 10, height: 70},
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({color, focused}) => (
            <TabBarIcon
              name={focused ? 'home' : 'home-outline'}
              color={color}
              className={`${focused && 'text-lemon'}`}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="catalog"
        options={{
          title: 'Catalog',
          tabBarIcon: ({color, focused}) => (
            <TabBarIcon
              name={focused ? 'search' : 'search-outline'}
              color={color}
              className={`${focused && 'text-lemon'}`}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: 'Cart',
          tabBarIcon: ({color, focused}) => (
            <TabBarIcon
              name={focused ? 'cart' : 'cart-outline'}
              color={color}
              className={`${focused && 'text-lemon'}`}
            />
          ),
          tabBarBadge: cartProductsCount,
          tabBarBadgeStyle: {backgroundColor: 'black', padding: 1},
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          title: 'Favorites',
          tabBarIcon: ({color, focused}) => (
            <TabBarIcon
              name={focused ? 'heart' : 'heart-outline'}
              color={color}
              className={`${focused && 'text-lemon'}`}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({color, focused}) => (
            <TabBarIcon
              name={focused ? 'person-circle' : 'person-circle-outline'}
              color={color}
              className={`${focused && 'text-lemon'}`}
            />
          ),
        }}
      />
    </Tabs>
  );
}
