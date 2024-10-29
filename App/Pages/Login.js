import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../Shared/Colors'
import { Ionicons } from '@expo/vector-icons';


export default function Login() {
  return (
    <View>
      <Image source={require('./../Assets/Images/login.png')}/>
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Wellcome to CodeBox</Text>
        <Text style={{textAlign:'center',marginTop:90,fontSize:15}}>Login/Signup</Text>
      </View> 
      <View style={styles.button}>
        <Ionicons name="logo-google" size={24} color="white" style={{marginRight:10}}/>
        <Text style={{color:Colors.white}}>Sign In with Google</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        paddingTop:32,
        marginTop:-11,
        backgroundColor:'#fff',
        borderTopRightRadius:30,
        borderTopLeftRadius:30
    },
    welcomeText: {
        fontSize:25,
        textAlign:'center',
        fontWeight:'bold'
    },
    button:{
        backgroundColor:Colors.primary,
        padding:8,
        margin:27,
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10
    }
})