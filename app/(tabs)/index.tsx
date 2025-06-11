import { View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { Text } from '@/components/ui/text';

export default function HomeScreen() {
  const { userName } = useLocalSearchParams<{ userName?: string }>();

  return (
    <View className="flex-1 justify-center items-center px-8 bg-background">
      <View className="items-center">
        <Text className="text-3xl font-bold text-foreground mb-4">
          Hello, {userName || 'User'}! 👋
        </Text>
        <Text className="text-lg text-muted-foreground text-center">
          Welcome to your home screen. Explore the tabs to discover more features!
        </Text>
      </View>
    </View>
  );
}
