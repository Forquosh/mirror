import { View, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { Text } from '@/components/ui/text';

export default function ExploreScreen() {
  const { userName } = useLocalSearchParams<{ userName?: string }>();

  return (
    <ScrollView className="flex-1 bg-background">
      <View className="px-8 py-12">
        <View className="items-center mb-8">
          <Text className="text-2xl font-bold text-foreground mb-2">
            Explore
          </Text>
          <Text className="text-base text-muted-foreground text-center">
            Discover new features and possibilities, {userName}!
          </Text>
        </View>

        {/* Feature Cards */}
        <View className="space-y-4">
          <View className="bg-card p-6 rounded-xl border border-border">
            <Text className="text-lg font-semibold text-foreground mb-2">
              🎯 Features
            </Text>
            <Text className="text-sm text-muted-foreground">
              Explore amazing features tailored just for you.
            </Text>
          </View>

          <View className="bg-card p-6 rounded-xl border border-border">
            <Text className="text-lg font-semibold text-foreground mb-2">
              📊 Analytics
            </Text>
            <Text className="text-sm text-muted-foreground">
              Track your progress and see detailed insights.
            </Text>
          </View>

          <View className="bg-card p-6 rounded-xl border border-border">
            <Text className="text-lg font-semibold text-foreground mb-2">
              ⚙️ Settings
            </Text>
            <Text className="text-sm text-muted-foreground">
              Customize your experience to match your preferences.
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
