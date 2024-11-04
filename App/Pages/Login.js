import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import {useState, React, useEffect} from 'react';
import Colors from '../Shared/Colors'
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import  * as Google from 'expo-auth-session/providers/google';


export default function Login() {
  WebBrowser.maybeCompleteAuthSession();
  const [accessToken,setAccessToken] = useState();
  const [userInfor,setUserInfor] = useState();
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: '296142872374-p6u6du2gjum1co59dl82dfjcs1qr2qjn.apps.googleusercontent.com',
    expoClientId: '296142872374-2mfb1g579tamlhq94hkp4qsv1nfjsc6p.apps.googleusercontent.com',
  });

  useEffect(() => {
    if (response?.type === 'success') {
      setAccessToken(response.authentication.accessToken);
      console.log(response.authentication.accessToken);
      getUserData();
    }
  }, [response]);

  const getUserData = async () => {
    try{
      const response = await fetch(
        'https://www.googleapis.com/userinfo/v2/me',
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
        );
        const user = await response.json();
        console.log("user Details",user);
        setUserInfor(user);
      }
      catch(err){
      }
  };
  return (
    <View>
      <Image source={require('./../Assets/Images/login.png')}/>
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Wellcome to CodeBox</Text>
        <Text style={{textAlign:'center',marginTop:90,fontSize:15}}>Login/Signup</Text>
      </View> 
      <TouchableOpacity style={styles.button} 
      onPress={()=>promptAsync()}>
        <Ionicons name="logo-google" size={24} color="white" style={{marginRight:10}}/>
        <Text style={{color:Colors.white}}>Sign In with Google</Text>
      </TouchableOpacity>
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