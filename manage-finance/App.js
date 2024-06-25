import { StyleSheet, Text, View, SafeAreaView, Image, Button, Touchable, TouchableOpacity } from 'react-native';
import Home from './screens/Home';
import Settings from './screens/Settings';
import MyCards from './screens/MyCards';
import Statistics from './screens/Statistics';
import { NavigationContainer }from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/stack';


const Stack = createNativeTabNavigator();


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Home/> */}
      <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? require('./assets/home.png')
                : require('./assets/home.png'); // Change icon if needed
            } else if (route.name === 'MyCards') {
              iconName = focused ? require('./assets/myCards.png') : require('./assets/myCards.png');
            } else if (route.name === 'Statistics') {
              iconName = focused ? require('./assets/statictics.png') : require('./assets/statictics.png');
            } else if (route.name === 'Settings') {
              iconName = focused ? require('./assets/settings.png') : require('./assets/settings.png');
            }

            return <Image source={iconName} style={{ width: size, height: size }} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={Home} options={{ tabBarLabel: 'Home' }} />
        <Tab.Screen name="MyCards" component={MyCards} options={{ tabBarLabel: 'My Cards' }} />
        <Tab.Screen name="Statistics" component={Statistics} options={{ tabBarLabel: 'Statistics' }} />
        <Tab.Screen name="Settings" component={Settings} options={{ tabBarLabel: 'Settings' }} />
      </Tab.Navigator>
    </NavigationContainer>
      <BottomTabs/>
    </SafeAreaView>
  );
}

function BottomTabs(){
  return(
      <View style = {{flexDirection: 'row', width: '100%', justifyContent: 'space-around', position: 'absolute', bottom: 30}}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style = {{alignItems: 'center'}}>
          <Image source={require('./assets/home.png')}/>
          <Text style = {{marginTop: 5}}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('My Cards')} style = {{alignItems: 'center'}}>
          <Image source={require('./assets/myCards.png')}/>
          <Text style = {{marginTop: 5}}>My Cards</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Statistics')} style = {{alignItems: 'center'}}>
          <Image source={require('./assets/statictics.png')}/>
          <Text style = {{marginTop: 5}}>Statistics</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Settings')} style = {{alignItems: 'center'}}>
          <Image source={require('./assets/settings.png')}/>
          <Text style = {{marginTop: 5}}>Settings</Text>
        </TouchableOpacity>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
