import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TrendingScreen from './screens/TrendingScreen';
import {NavigationContainer} from '@react-navigation/native';
import {Icon} from 'react-native-paper';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DiscoverScreen from './screens/DiscoverScreen';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import SearchScreen from './screens/SearchScreen';
import ApplyWallpaperScreen from './screens/ApplyWallpaperScreen';
import Toast from 'react-native-toast-message';
import SavedWallpaperScreen from './screens/SavedWallpaperScreen';
import SettingsScreen from './screens/SettingsScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      structuralSharing: false,
    },
  },
});
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <View
        style={{
          zIndex: 1000,
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          
        }}>
        <Toast />
      </View>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="stack_1"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="stack_1" component={BottomNavigationBar} />
          <Stack.Screen name="search" component={SearchScreen} />
          <Stack.Screen name="apply" component={ApplyWallpaperScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}

export function BottomNavigationBar() {
  const routes = [
    {
      name: 'Trending',
      component: TrendingScreen,
      icon: 'fire',
    },
    {
      name: 'Discover',
      component: DiscoverScreen,
      icon: 'widgets',
    },
    {
      name: 'Saved',
      component: SavedWallpaperScreen,
      icon: 'bookmark',
    },
    {
      name: 'Settings',
      component: SettingsScreen,
      icon: 'brightness-7',
    },
  ];
  return (
    <Tab.Navigator
      initialRouteName="Trending"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#171717',
          borderTopWidth: 0,
          height: 60,
        },
      }}>
      {routes.map(route => {
        return (
          <Tab.Screen
            key={route.name}
            name={route.name}
            options={{
              tabBarIcon: ({color, size, focused}) => {
                color = focused ? color : 'white';
                return (
                  <Icon
                    source={route.icon}
                    allowFontScaling
                    color={color}
                    size={size * 1.2}
                  />
                );
              },
            }}
            component={route.component}
          />
        );
      })}
    </Tab.Navigator>
  );
}
