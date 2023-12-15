import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import { SafeAreaProvider,useSafeAreaInsets } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';


function HomeScreen(){
  const insets = useSafeAreaInsets();
  return (
    <View style={{ flex: 1, paddingTop: insets.top, alignItems:'center' }}>
      <Text style={{ fontSize: 28 }}>Home Screen</Text>
    </View>
  );
}

function SettingsScreen(){
  return(
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  )
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        

          <Tab.Screen name="Home" component={HomeScreen}></Tab.Screen>
          <Tab.Screen name="SettingsScreen" component={SettingsScreen}></Tab.Screen>

        
      </Tab.Navigator>
    </NavigationContainer>
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
