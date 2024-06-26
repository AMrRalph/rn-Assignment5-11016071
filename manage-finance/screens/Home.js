import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'








export default function Home() {
  return (
    <View>
      <Welcome/>
      <ScrollView showsVerticalScrollIndicator = {false} >
        <Main/>
        <Transaction/>
      </ScrollView>
    </View>
  )
}


 function Welcome() {
    return(
        <View style = {styles.head}>
            <View style = {{flexDirection: 'row', alignItems: 'center'}}> 
                <Image source={require('../assets/profile.png')}/>
                <View style= {{marginLeft: 15}}>
                    <Text style = {{fontSize: 15, color: '#6b6b6b'}}>Welcome back,</Text>
                    <Text style = {{fontSize: 30,fontWeight: 600, color: '#fff'}}>Eric Atsu</Text>
                </View>
            </View>
            <TouchableOpacity style = {{padding: 15, backgroundColor: '#1d193b', borderRadius: 50}}>
            <Image source={require('../assets/search.png')}/>
            </TouchableOpacity>
        </View>
    )
}

function Main(){
    return(
        <View>
        <Image style = {{margin: 'auto', marginBottom: 40}}source={require('../assets/Card.png')}/>
        <View style = {{flexDirection: 'row', justifyContent: 'space-evenly', }}>
            <View style = {{alignItems: 'center'}}>
                <View style = {{backgroundColor: '#1d193b',padding: 18, borderRadius: '50'}}>
                    <Image source={require('../assets/send.png')}/>
                </View>
                <Text style = {{fontSize: '15', marginTop: 5, color: '#fff'}}>Send</Text>
            </View>
            <View style = {{alignItems: 'center'}}>
                <View style = {{backgroundColor: '#1d193b',padding: 18, borderRadius: '50'}}>
                    <Image source={require('../assets/send.png')}/>
                </View>
                <Text style = {{fontSize: '15', marginTop: 5, color: '#fff'}}>Receive</Text>
            </View>  
            <View style = {{alignItems: 'center'}}>
                <View style = {{backgroundColor: '#1d193b',padding: 16, borderRadius: '50'}}>
                    <Image source={require('../assets/loan.png')}/>
                </View>
                <Text style = {{fontSize: '15', marginTop: 4, color: '#fff'}}>Loan</Text>
            </View>  
            <View style = {{alignItems: 'center'}}>
                <View style = {{backgroundColor: '#1d193b',padding: 18, borderRadius: '50'}}>
                    <Image source={require('../assets/send.png')}/>
                </View>
                <Text style = {{fontSize: '15', marginTop: 5, color: '#fff'}}>Topup</Text>
            </View>  
        </View>  
        </View>
    )
}

function Transaction(){
    return(
        <View style = {styles.transaction}>
            <View style = {{flexDirection: 'row', marginTop: 20, alignItems: 'center', justifyContent: 'space-between'}}>
                <Text style = {{fontSize: 30, fontWeight: 600, color: '#fff'}}>Transaction</Text>
                <Text style = {{fontSize: 17, color: 'blue'}}>See All</Text>
            </View>
            <View style = {{marginTop: 10}}>
                <View style = {{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10}}>
                    <View style = {{flexDirection: 'row', alignItems: 'center'}}>
                    <View style = {{padding: 16, backgroundColor: '#140e3b', borderRadius: '50'}}>
                    <Image style = {{margin: 6}} source={require('../assets/apple.png')}/>
                    </View>
                    <View style = {{marginLeft: 15}}>
                        <Text style = {{fontSize:20, fontWeight: 600, color: '#fff'}}>Apple Store</Text>
                        <Text style = {{fontSize:16, color: '#6b6b6b'}}>Entertainment</Text>
                    </View>
                    </View>
                    <Text style = {{fontSize:20, fontWeight: 600, color: '#fff'}}>- $5,99</Text>
                </View>
                <View style = {{flexDirection: 'row', justifyContent: 'space-between',alignItems: 'center', marginTop: 10}}>
                    <View style = {{flexDirection: 'row', alignItems: 'center'}}>
                    <View style = {{padding: 16, backgroundColor: '#140e3b', borderRadius: '50'}}>
                    <Image style = {{margin: 6}} source={require('../assets/spotify.png')}/>
                    </View>
                    <View style = {{marginLeft: 15}}>
                        <Text style = {{fontSize:20, fontWeight: 600, color: '#fff'}}>Spotify</Text>
                        <Text style = {{fontSize:16, color: '#6b6b6b'}}>Music</Text>
                    </View>
                    
                    </View>
                    <Text style = {{fontSize:20, fontWeight: 600, color: '#fff'}}>- $12,99</Text>
                </View>
                <View style = {{flexDirection: 'row', justifyContent: 'space-between' ,alignItems: 'center', marginTop: 10}}>
                    <View style = {{flexDirection: 'row', alignItems: 'center'}}>
                    <View style = {{padding: 15, backgroundColor: '#140e3b',borderRadius: '50'}}>
                        <Image style = {{margin: 6}} source={require('../assets/moneyTransfer.png')}/>
                    </View>
                    <View style = {{marginLeft: 15}}>
                        <Text style = {{fontSize:20, fontWeight: 600, color: '#fff'}}>Money Transfer</Text>
                        <Text style = {{fontSize:16, color: '#6b6b6b'}}>Transaction</Text>
                    </View>
                    
                    </View>
                    <Text style = {{fontSize:20, color: 'blue', fontWeight: 600}}>$300</Text>
                </View>
                <View style = {{flexDirection: 'row', justifyContent: 'space-between',alignItems: 'center', marginTop: 10}}>
                    <View style = {{flexDirection: 'row', alignItems: 'center'}}>
                        <View style = {{padding: 15, backgroundColor: '#140e3b', borderRadius: '50'}}>
                        <Image style = {{margin: 6}} source={require('../assets/grocery.png') } />
                        </View>
                        <View style = {{marginLeft: 15}}>
                            <Text style = {{fontSize:20, fontWeight: 600, color: '#fff'}}>Grocery</Text>
                            <Text style = {{fontSize:16, color: '#6b6b6b'}}>Food</Text>
                        </View>
                    </View>
                    <Text style = {{fontSize:20, fontWeight: 600, color: '#fff'}}>- $88</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    head: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 25,
    },
    transaction: {
        width: '90%',
        margin: 'auto'
    }
})