import { View, Text, StyleSheet, Touchable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'





export default function Settings() {
    const [isDark, setDark] = useState(0)
  return (
    <View>
      <Title/>
      <Options/>
      <Theme/>
    </View>
  )
}

function Title(){
    return(
        <View style = {styles.title}>
            <Text style = {{fontSize: 30, fontWeight: 600, color: '#fff'}}>Settings</Text>
        </View>
    )
}



function Options(){
    return(
        <View style = {{width: '90%', margin: 'auto',}}>
            <View style = {{flexDirection: 'row', justifyContent: 'space-between', marginTop: 55}}>
                <Text style = {{fontSize: 25, color: '#fff'}}>Language</Text>
                <Text style = {{fontSize: 20, color: '#6b6b6b'}}>&gt;</Text>
            </View>
            <View style = {{flexDirection: 'row', justifyContent: 'space-between', marginTop: 25}}>
                <Text style = {{fontSize: 25, color: '#fff'}}>My Profile</Text>
                <Text style = {{fontSize: 20, color: '#6b6b6b'}}>&gt;</Text>
            </View>
            <View style = {{flexDirection: 'row', justifyContent: 'space-between', marginTop: 25}}>
                <Text style = {{fontSize: 25, color: '#fff'}}>Contact Us</Text>
                <Text style = {{fontSize: 20, color: '#6b6b6b'}}>&gt;</Text>
            </View>
            <View style = {{flexDirection: 'row', justifyContent: 'space-between', marginTop: 25}}>
                <Text style = {{fontSize: 25, color: '#fff'}}>Change Password</Text>
                <Text style = {{fontSize: 20, color: '#6b6b6b'}}>&gt;</Text>
            </View>
            <View style = {{flexDirection: 'row', justifyContent: 'space-between', marginTop: 25}}>
                <Text style = {{fontSize: 25, color: '#fff'}}>Privacy Policy</Text>
                <Text style = {{fontSize: 20, color: '#6b6b6b'}}>&gt;</Text>
            </View>
        </View>
    )
}



function Theme(){
    return(
        <View style = {{marginTop: 100, width: '90%', margin: 'auto'}}>
            <View style = {{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <Text style = {{fontSize: 33, fontWeight: 600, color: '#fff'}}>Theme</Text>
                <View style = {{backgroundColor: '#07db11', width: 50, height: 30, borderRadius: 50, justifyContent: 'center', alignItems: 'flex-end'}}>
                    <TouchableOpacity style = {{width: 22, height: 24, marginRight: 4, backgroundColor: '#fff', borderRadius: 50}}></TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 40,
    }
})