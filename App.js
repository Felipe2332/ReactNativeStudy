import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import { SafeAreaProvider,useSafeAreaInsets } from 'react-native-safe-area-context';


function HomeScreen(){
  const insets = useSafeAreaInsets();
  return (
    <View style={{ flex: 1, paddingTop: insets.top, alignItems:'center' }}>
      <Text style={{ fontSize: 28 }}>Inside safe area</Text>
    </View>
  );
}

export default function App() {
  
  return (
    <SafeAreaProvider>
    <HomeScreen></HomeScreen>
    </SafeAreaProvider>
  );
}

/*const styles = StyleSheet.create({
  container: {
    paddingTop: insets.top,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/
