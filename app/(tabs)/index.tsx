import { SafeAreaView } from 'react-native-safe-area-context'
import '@/global.css'
import { Text } from 'react-native'

const App = () => {
  return (
    <SafeAreaView className="flex-1 bg-background">
      {/* The rest of your app components will go here */}
      <SafeAreaView className="flex-1 items-center justify-center">
        <Text className="text-2xl font-bold text-foreground">
          Welcome to the App!
        </Text>
        <Text className="text-lg text-muted-foreground">
          This is a simple example of using SafeAreaView.
        </Text>
      </SafeAreaView>
    </SafeAreaView>
  )
}

export default App
