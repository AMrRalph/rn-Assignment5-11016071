import { StyleSheet, Text, View, SafeAreaView, Image, Button, Touchable, TouchableOpacity } from 'react-native';
import Home from './screens/Home';
import Settings from './screens/Settings';
import MyCards from './screens/MyCards';
import Statistics from './screens/Statistics';



export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Home/> */}
      <Settings/>
      <BottomTabs/>
    </SafeAreaView>
  );
}

function BottomTabs(){
  return(
      <View style = {{flexDirection: 'row', width: '100%', justifyContent: 'space-around', position: 'absolute', bottom: 30, backgroundColor: '#1d193b', paddingVertical: 15}}>
        <TouchableOpacity style = {{alignItems: 'center'}}>
          <Image source={require('./assets/home.png')}/>
          <Text style = {{marginTop: 5, color: '#fff'}}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('My Cards')} style = {{alignItems: 'center'}}>
          <Image source={require('./assets/myCards.png')}/>
          <Text style = {{marginTop: 5, color: '#fff'}}>My Cards</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Statistics')} style = {{alignItems: 'center'}}>
          <Image source={require('./assets/statictics.png')}/>
          <Text style = {{marginTop: 5, color: '#fff'}}>Statistics</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Settings')} style = {{alignItems: 'center'}}>
          <Image source={require('./assets/settings.png')}/>
          <Text style = {{marginTop: 5, color: '#fff'}}>Settings</Text>
        </TouchableOpacity>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#07012b',
  },
});
