import { Tabs } from 'expo-router'
import { Home, Map, Notebook, Settings2 } from 'lucide-react-native'
import { useColorScheme } from '@/lib/useColorScheme'

export default function TabLayout() {
  const { isDarkColorScheme } = useColorScheme()

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: isDarkColorScheme
          ? 'hsl(0 0% 98%)'
          : 'hsl(240 5.9% 10%)',
        tabBarInactiveTintColor: isDarkColorScheme
          ? 'hsl(240 5% 64.9%)'
          : 'hsl(240 3.8% 46.1%)',
        tabBarStyle: {
          backgroundColor: isDarkColorScheme
            ? 'hsl(240 10% 3.9%)'
            : 'hsl(0 0% 100%)',
          borderTopColor: isDarkColorScheme
            ? 'hsl(240 3.7% 15.9%)'
            : 'hsl(240 5.9% 90%)',
          borderTopWidth: 1,
          height: 90,
          paddingBottom: 20,
          elevation: 0,
          shadowOpacity: 0
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
          marginTop: 4
        },
        tabBarIconStyle: {
          marginBottom: 2
        },
        tabBarItemStyle: {
          paddingVertical: 8
        }
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <Home
              color={color}
              size={focused ? 26 : 24}
              strokeWidth={focused ? 2.5 : 2}
            />
          )
        }}
      />
      <Tabs.Screen
        name="notes"
        options={{
          title: 'Notes',
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <Notebook
              color={color}
              size={focused ? 26 : 24}
              strokeWidth={focused ? 2.5 : 2}
            />
          )
        }}
      />
      <Tabs.Screen
        name="mind-maps"
        options={{
          title: 'Mind Maps',
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <Map
              color={color}
              size={focused ? 26 : 24}
              strokeWidth={focused ? 2.5 : 2}
            />
          )
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <Settings2
              color={color}
              size={focused ? 26 : 24}
              strokeWidth={focused ? 2.5 : 2}
            />
          )
        }}
      />
    </Tabs>
  )
}
