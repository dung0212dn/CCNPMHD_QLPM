import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Register from '../../components/auth/Register'
import globalStyles from '../../assets/styles/GlobalStyles'
import { ScrollView } from 'react-native-gesture-handler'

const RegisterPage = ({navigation}) => {
  return (
    <ImageBackground style={{flex: 1}} source={require('../../assets/images/background-base-2.jpg')}>

    <View style={globalStyles.container}>
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <Register navigation={navigation}></Register>
      </ScrollView>
    </View>

    </ImageBackground>
  )
}

export default RegisterPage

const styles = StyleSheet.create({})