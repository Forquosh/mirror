import { useState } from 'react';
import { View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from 'expo-router';
import { Text } from '@/components/ui/text';

const App = () => {
  const [name, setName] = useState('');

  const handleContinue = () => {
    if (!name.trim()) {
      Alert.alert('Please enter your name', 'Your name is required to continue.');
      return;
    }
    
    // Navigate to tabs with name parameter
    router.push({
      pathname: '/(tabs)',
      params: { userName: name.trim() }
    });
  };

  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="flex-1 justify-center items-center px-8">
        {/* Welcome Header */}
        <View className="items-center mb-12">
          <Text className="text-4xl font-bold text-foreground mb-4">
            Welcome
          </Text>
          <Text className="text-lg text-muted-foreground text-center leading-6">
            Enter your name to get started with your personalized experience
          </Text>
        </View>

        {/* Input Section */}
        <View className="w-full max-w-sm mb-8">
          <Text className="text-sm font-medium text-foreground mb-3 ml-1">
            Your Name
          </Text>
          <TextInput
            value={name}
            onChangeText={setName}
            placeholder="Enter your name here..."
            placeholderTextColor="#9CA3AF"
            className="w-full px-4 py-4 bg-card border border-border rounded-xl text-foreground text-base"
            autoCapitalize="words"
            autoCorrect={false}
            returnKeyType="done"
            onSubmitEditing={handleContinue}
          />
        </View>

        {/* Continue Button */}
        <TouchableOpacity
          onPress={handleContinue}
          className={`w-full max-w-sm py-4 rounded-xl ${
            name.trim() 
              ? 'bg-primary active:bg-primary/90' 
              : 'bg-muted'
          }`}
          activeOpacity={0.8}
        >
          <Text className={`text-center text-base font-semibold ${
            name.trim() 
              ? 'text-primary-foreground' 
              : 'text-muted-foreground'
          }`}>
            Continue
          </Text>
        </TouchableOpacity>

        {/* Decorative Elements */}
        <View className="absolute top-20 left-8 w-20 h-20 bg-primary/10 rounded-full" />
        <View className="absolute bottom-32 right-8 w-16 h-16 bg-accent/20 rounded-full" />
        <View className="absolute top-40 right-12 w-12 h-12 bg-secondary/15 rounded-full" />
      </View>
    </SafeAreaView>
  );
};

export default App;
