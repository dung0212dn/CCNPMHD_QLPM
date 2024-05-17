import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import globalStyles from '../../assets/styles/GlobalStyles'
import Login from '../../components/auth/Login'

const LoginPage = ({navigation}) => {
  return (
    <ImageBackground style={{flex: 1}} source={require('../../assets/images/background-base-2.jpg')}>
    <View style={{flex: 1}}>
     
      <Login navigation={navigation}></Login>

    </View>
    </ImageBackground>
  )
}

export default LoginPage

const styles = StyleSheet.create({})